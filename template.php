<?php
/**
* @package   yoo_master
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// get template configuration
include($this['path']->path('layouts:template.config.php'));
	
?>
<!DOCTYPE HTML>
<html lang="<?php echo $this['config']->get('language'); ?>" dir="<?php echo $this['config']->get('direction'); ?>">

<head>
<?php echo $this['template']->render('head'); ?>
</head>

<body id="page" class="page <?php echo $this['config']->get('body_classes'); ?>" data-config='<?php echo $this['config']->get('body_config','{}'); ?>'>

	<?php if ($this['modules']->count('absolute')) : ?>
	<div id="absolute">
		<?php echo $this['modules']->render('absolute'); ?>
	</div>
	<?php endif; ?>
	
	<div id="page-header">
		<div class="page-header-1">
			
			<div class="wrapper">
				
				<div id="header">
	
					<div id="toolbar">
						
						<?php if ($this['modules']->count('toolbarleft')) : ?>
						<div class="left">
							<?php echo $this['modules']->render('toolbarleft'); ?>
						</div>
						<?php endif; ?>
						
						<?php if ($this['modules']->count('toolbarright')) : ?>
						<div class="right">
							<?php echo $this['modules']->render('toolbarright'); ?>
						</div>
						<?php endif; ?>

						
						<?php if($this->warp->config->get('date')) : ?>
						<div id="date">
							<?php echo $this->warp->config->get('actual_date'); ?>
						</div>
						<?php endif; ?>
						
					</div>
					
					<div id="headermid">
						<?php if ($this['modules']->count('logo')) : ?>		
						<div id="logo">
							<?php echo $this['modules']->render('logo'); ?>
						</div>
						<?php endif; ?>
					
						<?php if ($this['modules']->count('search')) : ?>
						<div id="search">
							<?php echo $this['modules']->render('search'); ?>
						</div>
						<?php endif; ?>
					</div>
						
					<?php  if ($this['modules']->count('menu')) : ?>
					<div id="menu-bg">
					<div id="menu">						
						<?php echo $this['modules']->render('menu'); ?>					
					</div>
					</div>
					<?php endif; ?>
					
					<?php if ($this['modules']->count('banner')) : ?>
					<div id="banner">
						<?php echo $this['modules']->render('banner'); ?>
					</div>
					<?php endif;  ?>

				</div>
				<!-- header end -->				
				
			</div>
			
		</div>
	</div>
	<?php if ($this['modules']->count('slideshow + homenews')) : ?>
	<div id="page-top">
		<div class="page-top-1">
			<div class="page-top-2">
			
				<div class="wrapper">
	
					
					<div id="top">
						<?php if ($this['modules']->count('slideshow')) : ?>
						<div id="home-slideshow">
							<?php echo $this['modules']->render('slideshow'); ?>
						</div>
						<?php endif; ?>
						<?php if ($this['modules']->count('homenews')) : ?>
						<div id="home-news">
							<?php echo $this['modules']->render('homenews'); ?>
						</div>
						<?php endif; ?>
		
						<?php if ($this['modules']->count('top')) : ?>
							<?php echo $this['modules']->render('top', array('wrapper'=>"horizontal float-left", 'layout'=>$this->warp->config->get('top'))); ?>
						<?php endif; ?>
					</div>
					<!-- top end -->
	
				</div>
		
			</div>	
		</div>
	</div>
	<?php endif; ?>


<?php
$menu = &JSite::getMenu();
if ($menu->getActive() != $menu->getDefault()) {
?>

	
	<div id="page-body">
		<div class="page-body-1">
			<div class="page-body-2">

				<div class="wrapper">

					<div class="middle-wrapper">
						<div id="middle">
							<div id="middle-expand">
			
								<div id="main">
									<div id="main-shift">
			
										<?php if ($this['modules']->count('maintop')) : ?>
										<div id="maintop">
											<?php echo $this['modules']->render('maintop', array('wrapper'=>"horizontal float-left", 'layout'=>$this->warp->config->get('maintop'))); ?>
										</div>
										<!-- maintop end -->
										<?php endif; ?>
			
										<div id="mainmiddle">
											<div id="mainmiddle-expand">
											
												<div id="content">
													<div id="content-shift">
			
														<?php if ($this['modules']->count('contenttop')) : ?>
														<div id="contenttop">
															<?php echo $this['modules']->render('contenttop', array('wrapper'=>"horizontal float-left", 'layout'=>$this->warp->config->get('contenttop'))); ?>
														</div>
														<!-- contenttop end -->
														<?php endif; ?>
														
														<div id="component" class="floatbox">
															
															<?php if ($this['modules']->count('breadcrumbs')) : ?>
																<?php echo $this['modules']->render('breadcrumbs'); ?>
															<?php endif; ?>
															
															<?php if ($this['modules']->count('contenttopimage')) : ?>
															<div id="contenttopimage">
																<?php echo $this['modules']->render('contenttopimage'); ?>
															</div>
															<?php endif; ?>
																													
															<?php echo $this->warp->template->render('content'); ?>

																									
														</div>
							
														<?php if ($this['modules']->count('contentbottom')) : ?>
														<div id="contentbottom">
															<?php echo $this['modules']->render('contentbottom', array('wrapper'=>"horizontal float-left", 'layout'=>$this->warp->config->get('contentbottom'))); ?>
														</div>
														<!-- mainbottom end -->
														<?php endif; ?>
													
													</div>
												</div>
												<!-- content end -->
												
												<?php if ($this['modules']->count('contentleft')) : ?>
												<div id="contentleft" class="vertical">
													<div class="contentleft-1"></div>
													<?php echo $this['modules']->render('contentleft'); ?>
												</div>
												<?php endif; ?>
												
												<?php if ($this['modules']->count('contentright')) : ?>
												<div id="contentright" class="vertical">
													<div class="contentright-1"></div>
													<?php echo $this['modules']->render('contentright'); ?>
												</div>
												<?php endif; ?>
												
											</div>
										</div>
										<!-- mainmiddle end -->
			
										<?php if ($this['modules']->count('mainbottom')) : ?>
										<div id="mainbottom">
											<?php echo $this['modules']->render('mainbottom', array('wrapper'=>"horizontal float-left", 'layout'=>$this->warp->config->get('mainbottom'))); ?>
										</div>
										<!-- mainbottom end -->
										<?php endif; ?>
									
									</div>
								</div>
			
								<?php if ($this['modules']->count('left')) : ?>
								<div id="left" class="vertical">
									<?php echo $this['modules']->render('left'); ?>
								</div>
								<?php endif; ?>
								
								<?php if ($this['modules']->count('right')) : ?>
								<div id="right" class="vertical">
									<?php echo $this['modules']->render('right'); ?>
								</div>
								<?php endif; ?>
			
							</div>
						</div>
					</div>
	
				</div>
				
			</div>
		</div>
	</div>

<?php } ?>

	
	<?php if ($this['modules']->count('bottom + bottomblock')) : ?>
	<div id="page-bottom">
		<div class="page-bottom-1">
			<div class="page-bottom-2">
			
				<div class="wrapper">

					
					<div id="bottom">
						<?php if ($this['modules']->count('bottom')) : ?>
							<?php echo $this['modules']->render('bottom', array('wrapper'=>"horizontal float-left", 'layout'=>$this->warp->config->get('bottom'))); ?>
						<?php endif; ?>
	
						<?php if ($this['modules']->count('bottomblock')) : ?>
						<div class="vertical width100">
							<?php echo $this['modules']->render('bottomblock'); ?>
						</div>
						<?php endif; ?>
					</div>
					<!-- bottom end -->

				</div>
			
			</div>
		</div>
	</div>
	<?php endif; ?>
	
	<div id="page-footer">
		<div class="wrapper">
			
			<div id="footer">
			
				<?php if ($this['modules']->count('footer + debug + snicons')) : ?>
				<a class="anchor" href="#page"></a>
				<div id="snicons"><?php echo $this['modules']->render('snicons'); ?></div>
				<div id="addthis"><?php echo $this['modules']->render('addthis'); ?></div>
				<?php echo $this['modules']->render('footer'); ?>
				<?php echo $this['modules']->render('debug'); ?>
				<?php endif; ?>
				
			</div>
			<!-- footer end -->

		</div>
	</div>
	
	<?php echo $this->render('footer'); ?>
	
</body>
</html>