/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function($) {

	$('#tm-content').html(function(i, html) {
    	return html.
		replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?([\w\-]{10,12})(?:&feature=related)?(?:[\w\-]{0})?/g,
			'<div class="videoWrapper"><iframe width="853" height="480" src="http://www.youtube.com/embed/$1?rel=0&hd=1&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>');

});

	var config = $('html').data('config') || {};

	// Adblock detect
	if(window.areAdsDisplayed === undefined) {
		console.log('You\'re using an Ad Blocker.')
	} else {
		$('#sysMessage').hide();
	}

	// Social buttons
	$('article[data-permalink]').socialButtons(config);

	// Cookies
	var $sess = $.now();
	if(Cookies.get('bci')){
		$('#cookieInfo').hide();
		console.log('You already have some BCI cookies set. You can change your broswer preferences to stop them if you want.');
	} else {
		Cookies.set('bci', $sess, {expires: 365, path: '/'});
		$('#cookieInfo').show().delay(10000).animate({bottom: '-500px'}, 5000).fadeOut(1500);
	}

	$('ul.weblinks li').each(function(){
		var weblinkDesc = $(this).find('p').html(),
			weblinkLink = $(this).find('a');
		weblinkLink.html('<i class="' + weblinkDesc +'"></i>');
	});

	$('a[title="emaillink"]').each(function(){
		var weblinkDesc = $(this).text(),
			weblinkLink = $(this);
		weblinkLink.html('<i class="' + weblinkDesc +'"></i>');
	});

	$('.tab-content').each(function(){
		var tabId = $(this).data('id'),
			tabOrig = $('.tab-pane').attr('id', tabId).html();
		$(this).data('id', tabId).html(tabOrig)
	});

	$('.accordion-item .element').on('click', 'h3:not(.open)', function() {
		$('.accordion-item .element div').slideUp();
		$(this).next().slideToggle();
		$('.accordion-item .element h3').removeClass('open');
		$(this).addClass('open');
	});

	$('.accordion-item .element').on('click', 'h3.open', function() {
		$(this).removeClass('open');
		$(this).next().slideUp();
	});

	$('.accordion-item .tab-pane').on('click', 'h2', function() {
		$('.accordion-item .tab-pane div').slideUp();
		$(this).next().slideToggle();
		$('.accordion-item .tab-pane h2').removeClass('open');
		$(this).addClass('open');
	});

	$('.accordion-item .element').on('click', 'h2.open', function() {
		$(this).removeClass('open');
		$(this).next().slideUp();
	});

	$('.accordion-item .element div').on('click', 'h3', function() {
		return false;
	});

	$('.accordion-item .tab-pane div').on('click', 'h2', function() {
		return false;
	});

	$('.uk-search-field').on('focus', function(){
		$(this).addClass('focus');
	});

	$('.uk-search-field').on('blur', function(){
		$(this).removeClass('focus');
	});

	// Back to Top behaviour
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	if(exists($('.linky'))) {
		$('.linky h3.uk-panel-title').html('<a href="/news-updates">Latest BCI news</a>');
	}

	// Filtering
	if($('#filteringRes').length) {

		$('#tm-content ul.zoo-list a').each(function(){
			var tag = $(this).find('span').html(),
				filter = tag.replace(/\s+/g, '-').toLowerCase()
			if(filter == 'all') {
				$(this).attr('data-filter', '*')
			} else {
				$(this).attr('data-filter', '.'+filter)
			}
		});

		$('#tm-content ul.zoo-list a:first').addClass('active');

		$.getScript('/templates/bci_theme/js/isotope.js')
		.done(function(script, textStatus) {
			var $grid = $('.items');
			$grid.isotope({
				itemSelector: '.view-all-researchers',
				layoutMode: 'fitRows',
			});
			$('#tm-content ul.zoo-list').on( 'click', 'a', function(e) {
				e.preventDefault();
				$('ul.zoo-list a').removeClass('active');
				$(this).addClass('active');
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
		})
		.fail(function(jqxhr, settings, exception) {
			console.log('Triggered ajaxError handler.');
		});

	}

	// Filtering
	if($('.product-default-all-staff').length) {

		$('#tm-content ul.zoo-list a').each(function(){
			var tag = $(this).html(),
				filter = tag.replace(/\s+/g, '-').toLowerCase()
			$(this).attr('data-filter', '.'+filter)
		});

		$('.teaser-item .pos-links a').each(function(){
			var $this = $(this),
				tag = $(this).html(),
				filter = tag.replace(/\s+/g, '-').toLowerCase();
			$this.parent().parent().parent().parent().addClass(filter)
		});

		$('.teaser-item').each(function(){
			if($('.pos-specification li:contains("PhD")')) {
				$(this).parent().parent().parent().parent().addClass('PhD');
			}
			if($('.pos-specification li:contains("Clinical")')) {
				$(this).parent().parent().parent().parent().addClass('clinical');
			}
			if($('.pos-specification li:contains("Postdoctoral")')) {
				$(this).parent().parent().parent().parent().addClass('postdoc');
			}
		});

		$('ul.zoo-list li:eq(0)').before('<li><a href="#" data-filter="*" class="active">All</li>');

	// Filtering
		$.getScript('/templates/bci_theme/js/isotope.js')
		.done(function(script, textStatus) {
			var $grid = $('.items');
			$grid.isotope({
				itemSelector: '.teaser-item',
				layoutMode: 'fitRows',
			});
			$('#tm-content ul.zoo-list').on( 'click', 'a', function(e) {
				e.preventDefault();
				$('ul.zoo-list a').removeClass('active');
				$(this).addClass('active');
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
		})
		.fail(function(jqxhr, settings, exception) {
			console.log('Triggered ajaxError handler.');
		});
	}

	// Filtering
	if($('#filtering').length) {
		$.getScript('/templates/bci_theme/js/isotope.js')
		.done(function(script, textStatus) {
			var $grid = $('#grid');
			$grid.isotope({
				itemSelector: '.centre',
				layoutMode: 'fitRows',
			});
			$('#filter').on( 'click', 'a', function(e) {
				e.preventDefault();
				$('#filter a').removeClass('active');
				$(this).addClass('active');
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
		})
		.fail(function(jqxhr, settings, exception) {
			console.log('Triggered ajaxError handler.');
		});
	}

	// Accordion formatting
	$('#tm-content').html(function(index, text) {
		return text.split('[accordion]').join('<div class="accordion-item"><div class="element">').split('[/accordion]').join('</div></div>');
	});

	var pageLink = window.location.pathname;

	$('.accordion-item .element h3').each(function() {
		var $this = $(this),
			tag = $this.html(),
			filter = tag.replace(/["~!@#$%^&*\(\)_+=`{}\[\]\|\\:;'<>,.\/?"\- \t\r\n]+/g, '-').toLowerCase();
		$this.attr('data-id', filter);
		$this.next().attr('data-target', filter);
		$this.append('<a href="'+pageLink+'#'+filter+'" target="_blank" title="Copy direct link to this item"><i class="bci-link"></i></a>');
	});

	$('.accordion-item .element h3').next().hide();

	$('.accordion-item .element').on('click', 'h3:not(.open)', function(){
		$('.accordion-item .element h3').removeClass('open').next().slideUp('200');
		$(this).addClass('open').next().slideDown('200');
	});

	$('.accordion-item .element').on('click', 'h3.open', function(){
		$('.accordion-item .element h3').removeClass('open').next().slideUp('200');
		$(this).next().slideUp('200');
	});

	var accOpen = location.hash.replace('#', '');
	$('.accordion-item .element h3[data-id="'+accOpen+'"]').addClass('open');
	$('.accordion-item .element div[data-target="'+accOpen+'"]').slideDown('200');
	if(window.location.hash) {
		$('html,body').animate({
			scrollTop: $('h3[data-id="'+accOpen+'"]').offset().top
		}, 200);
	}

});

function exists(data) {
	if(!data || data==null || data=='undefined' || typeof(data)=='undefined') return false;
	else return true;
}

/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(factory);}else if(typeof exports==='object'){module.exports=factory();}else{var _OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=_OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);}else{value=converter.write(value,key);}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);return(document.cookie=[key,'=',value,attributes.expires&&'; expires='+attributes.expires.toUTCString(),attributes.path&&'; path='+attributes.path,attributes.domain&&'; domain='+attributes.domain,attributes.secure?'; secure':''].join(''));}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var name=parts[0].replace(rdecode,decodeURIComponent);var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.get=api.set=api;api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init(function(){});}));

(function(a){a.fn.cssParentSelector=function(){var u=0,m,j,v={checked:"click",focus:"focus blur",active:"mousedown mouseup",selected:"change",changed:"change"},p={mousedown:"mouseout"},q={mouseup:"mouseout"},k={after:"appendTo",before:"prependTo"},b,n,o,d,r,g,s,l,e,h,i,w=/[\w\s\"\'\.\[\]\(\)\=\*\-\:#]*(?=!)[\w\s\.\,\[\]\(\)\=\*\-\:#>!]+[\w\s\"\'\.\,\[\]\=\:\-#>]*\{{1}[\.\*\/\?\:\^\+\\\=\|\w\s\'-;#%]+\}{1}/gi,t=function(f){f=f.replace(/(\/\*([\s\S]*?)\*\/)/gm,"");if(n=f.match(w)){b="";for(m=-1;n[++m],style=n[m];)if(o=style.split("{")[0].split(","),e="{"+style.split(/\{|\}/)[1].replace(/^\s+|\s+$[\t\n\r]*/g,"")+"}","{}"!==e){e=e.replace(/;/g," !important;");for(j=-1;o[++j],d=a.trim(o[j]);)j&&(b+=","),/!/.test(d)?(r=a.trim(d.split("!")[0].split(":")[0]),g=a.trim(d.split("!")[1].split(">")[0].split(":")[0])||[]._,h=a.trim(d.split(">")[0].split("!")[0].split(":")[1])||[]._,i=g?a.trim(d.split(">")[0].split("!")[1].split(":")[1])||[]._:[]._,s=a(a.trim(d.split(">")[1]).split(":")[0]),l=(d.split(">")[1].split(/:+/)[1]||"").split(" ")[0]||[]._,s.each(function(d){var c=a(this).parent(r);h&&(c=k[h]?a("<div></div>")[k[h]](c):c.filter(":"+h));g&&(c=c.find(g));g&&i&&(c=k[i]?a("<div></div>")[k[i]](c):c.filter(":"+i));var e="CPS"+u++,f=function(b){b&&p[b.type]&&a(c).one(p[b.type],function(){a(c).toggleClass(e)});b&&q[b.type]&&a(c).off(q[b.type]);a(c).toggleClass(e)};d&&(b+=",");b+="."+e;!l?f():a(this).on(v[l]||l,f)})):b+=d;b+=e}a('<style type="text/css">'+b+"</style>").appendTo("head")}};a("link[rel=stylesheet], style").each(function(){a(this).is("link")?a.get(this.href).success(function(a){t(a)}):t(a(this).text())})};a().cssParentSelector()})(jQuery);