<?php
/**
* @package   com_zoo
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

?>

<?php if ($this->checkPosition('top')) : ?>
<div class="pos-top">

	<div class="box-1">
		<?php echo $this->renderPosition('top', array('style' => 'block')); ?>
	</div>

</div>
<?php endif; ?>

<div class="floatbox">

	<div class="box-1">

		<?php if ($this->checkPosition('media')) : ?>
		<div class="pos-media <?php echo 'media-'.$view->params->get('template.item_media_alignment'); ?>">
			<?php echo $this->renderPosition('media', array('style' => 'block')); ?>

		<?php if ($this->checkPosition('announcements')) : ?>
		<div class="pos-announcements"><?php echo $this->renderPosition('announcements'); ?></div>
		<?php endif; ?>

		</div>
		<?php endif; ?>

		<?php if ($this->checkPosition('title')) : ?>
		<h1 class="pos-title"><?php echo $this->renderPosition('title'); ?></h1>
		<?php endif; ?>

		<?php if ($this->checkPosition('qualifications')) : ?>
		<div class="pos-qualifications"><?php echo $this->renderPosition('qualifications'); ?></div>
		<?php endif; ?>

		<?php if ($this->checkPosition('centre')) : ?>
		<div class="pos-centre"><?php echo $this->renderPosition('centre'); ?></div>
		<?php endif; ?>

		<?php if ($this->checkPosition('fellowships')) : ?>
		<div class="pos-fellowships"><?php echo $this->renderPosition('fellowships'); ?></div>
		<?php endif; ?>

		<?php if ($this->checkPosition('jobtitle')) : ?>
		<div class="pos-jobtitle"><?php echo $this->renderPosition('jobtitle'); ?></div>
		<?php endif; ?>
		<?php if ($this->checkPosition('telephone')) : ?>
		<div class="pos-telephone"><?php echo $this->renderPosition('telephone'); ?></div>
		<?php endif; ?>
		<?php if ($this->checkPosition('email')) : ?>
		<div class="pos-email"><?php echo $this->renderPosition('email'); ?></div>
		<?php endif; ?>

		<?php if ($this->checkPosition('research')) : ?>
		<div class="pos-description">
			<?php echo $this->renderPosition('research', array('style' => 'block')); ?>
		</div>
		<?php endif; ?>

		<?php if ($this->checkPosition('specification')) : ?>
		<div class="pos-specification">
			<h3><?php echo JText::_('Specifications'); ?></h3>
			<ul>
				<?php echo $this->renderPosition('specification', array('style' => 'list')); ?>
			</ul>
		</div>
		<?php endif; ?>

		<?php if ($this->checkPosition('accordion')) : ?>
		<div class="accordion-item">
			<?php echo $this->renderPosition('accordion', array('style' => 'block')); ?>
		</div>
		<?php endif; ?>

		<?php if ($this->checkPosition('bottom')) : ?>
		<div class="pos-bottom">
			<?php echo $this->renderPosition('bottom', array('style' => 'block')); ?>
		</div>
		<?php endif; ?>

		<?php if ($this->checkPosition('related')) : ?>
		<div class="pos-related">
			<?php echo $this->renderPosition('related', array('style' => 'block')); ?>
		</div>
		<?php endif; ?>


	</div>

</div>