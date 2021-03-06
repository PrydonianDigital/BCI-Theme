<?php
/**
* @package   com_zoo
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

$categoryInfo = $this->_item->getPrimaryCategory();

?>
<div class="<?php
foreach ($this->_item->getRelatedCategories(true) as $category) {
	echo $category->alias . ' ';
}
foreach ($tags as $tag) {
	echo $tag->name . ' ';
}
?> <?php echo $this->_item->getPrimaryCategory()->alias; ?>">
<?php if ($this->checkPosition('media')) : ?>
<div class="pos-media <?php echo 'media-'.$view->params->get('template.items_media_alignment'); ?>">
	<?php echo $this->renderPosition('media'); ?>
</div>
<?php endif; ?>

<?php if ($this->checkPosition('title')) : ?>
<h2 class="pos-title">
	<?php echo $this->renderPosition('title'); ?>
</h2>
<?php endif; ?>

<?php if ($this->checkPosition('description')) : ?>
<div class="pos-description">
	<?php echo $this->renderPosition('description', array('style' => 'block')); ?>
</div>
<?php endif; ?>

<?php if ($this->checkPosition('specification')) : ?>
<ul class="pos-specification">
	<?php echo $this->renderPosition('specification', array('style' => 'list')); ?>
</ul>
<?php endif; ?>
<?php if ($this->checkPosition('group_leader')) : ?>
<div class="pos-group-leader">
	<?php echo $this->renderPosition('group_leader'); ?>
</div>
<?php endif; ?>
<?php if ($this->checkPosition('links')) : ?>
<p class="pos-links">
	<?php echo $this->renderPosition('links', array('style' => 'pipe')); ?>
</p>
<?php endif; ?>
</div>
