<?php
/**
* @package   yoo_master2
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// get theme configuration
include($this['path']->path('layouts:theme.config.php'));

?>
<!DOCTYPE HTML>
<html lang="<?php echo $this['config']->get('language'); ?>" dir="<?php echo $this['config']->get('direction'); ?>"  data-config='<?php echo $this['config']->get('body_config','{}'); ?>'>

<head>
<?php echo $this['template']->render('head'); ?>
</head>

<body class="<?php echo $this['config']->get('body_classes'); ?>">

	<?php if ($this['widgets']->count('logo + headerbar')) : ?>
	<div class="tm-headerbar uk-clearfix">

		<div class="uk-container uk-container-center">

			<?php if ($this['widgets']->count('toolbar-l + toolbar-r')) : ?>
			<div class="tm-toolbar uk-clearfix  uk-hidden-small">

				<?php if ($this['widgets']->count('toolbar-l')) : ?>
				<div class="uk-float-left"><?php echo $this['widgets']->render('toolbar-l'); ?></div>
				<?php endif; ?>

				<?php if ($this['widgets']->count('toolbar-r')) : ?>
				<div class="uk-float-right"><?php echo $this['widgets']->render('toolbar-r'); ?></div>
				<?php endif; ?>

				<?php if ($this['widgets']->count('search')) : ?>
				<div class="uk-navbar-flip">
					<div class="uk-navbar-content"><?php echo $this['widgets']->render('search'); ?></div>
				</div>
				<?php endif; ?>

			</div>
			<?php endif; ?>

			<?php if ($this['widgets']->count('logo')) : ?>
			<a class="tm-logo" href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['widgets']->render('logo'); ?></a>
			<?php endif; ?>

			<?php echo $this['widgets']->render('headerbar'); ?>

			<?php if ($this['widgets']->count('menu + search')) : ?>
			<nav class="tm-navbar uk-navbar clearfix">

				<?php if ($this['widgets']->count('menu')) : ?>
				<?php echo $this['widgets']->render('menu'); ?>
				<?php endif; ?>

				<?php if ($this['widgets']->count('offcanvas')) : ?>
				<a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
				<?php endif; ?>

				<?php if ($this['widgets']->count('logo-small')) : ?>
				<div class="uk-navbar-content uk-navbar-center uk-visible-small"><a class="tm-logo-small" href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['widgets']->render('logo-small'); ?></a></div>
				<?php endif; ?>

			</nav>
			<?php endif; ?>

		</div>

	</div>
	<?php endif; ?>

	<div class="uk-container uk-container-center">


				<main id="tm-content" class="tm-content">

					<article class="uk-article center error">

						<h1 class="uk-article-title xxl"><?php echo $error; ?></h1>

						<h2 class="uk-h3 uk-text-muted"><?php echo $title; ?></h2>

						<p><?php echo $message; ?></p>

					</article>

				</main>

			</div>


	</div>

		<?php if ($this['widgets']->count('footer + debug') || $this['config']->get('warp_branding', true) || $this['config']->get('totop_scroller', true)) : ?>
		<footer id="tm-footer" class="tm-footer">

			<div class="uk-container uk-container-center">

				<?php if ($this['config']->get('totop_scroller', true)) : ?>
				<a class="tm-totop-scroller" data-uk-smooth-scroll href="#"></a>
				<?php endif; ?>

				<?php
					echo $this['widgets']->render('footer');
					$this->output('warp_branding');
					echo $this['widgets']->render('debug');
				?>
				<p>&copy; 2103-<?php echo date('Y'); ?> <?php $config = JFactory::getConfig(); ?> <?php echo $config->get( 'sitename' ); ?></p>
			</div>

		</footer>
		<?php endif; ?>

	<?php echo $this->render('footer'); ?>

	<?php if ($this['widgets']->count('offcanvas')) : ?>
	<div id="offcanvas" class="uk-offcanvas">
		<div class="uk-offcanvas-bar"><?php echo $this['widgets']->render('offcanvas'); ?></div>
	</div>
	<?php endif; ?>

</body>
</html>