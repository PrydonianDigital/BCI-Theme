/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function($) {

	var config = $('html').data('config') || {};

	// Adblock detect
	if(window.areAdsDisplayed === undefined) {
		console.log('You\'re using an Ad Blocker.')
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

	$('.accordion-item .element:first-child h3').addClass('open');
	$('.accordion-item .tab-pane:first-child h2').addClass('open');

	$('.tab-content').each(function(){
		var tabId = $(this).data('id'),
			tabOrig = $('.tab-pane').attr('id', tabId).html();
		console.log(tabOrig);
		$(this).data('id', tabId).html(tabOrig)
	});

	$('.accordion-item .element').on('click', 'h3', function() {
		$('.accordion-item .element div').slideUp();
		$(this).next().slideToggle();
		$('.accordion-item .element h3').removeClass('open');
		$(this).addClass('open');
	});

	$('.accordion-item .tab-pane').on('click', 'h2', function() {
		$('.accordion-item .tab-pane div').slideUp();
		$(this).next().slideToggle();
		$('.accordion-item .tab-pane h2').removeClass('open');
		$(this).addClass('open');
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

});

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