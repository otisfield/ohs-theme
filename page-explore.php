<?php
  get_header();
  global $post;
  if (!isset($_GET['mpaged']) || $_GET['mpaged'] == '') {
	$_GET['mpaged'] = 1;
  }
  $thePage = filter_var($_GET['mpaged'],FILTER_SANITIZE_NUMBER_INT);
?>
	<header class="header" id="header" data-template="header" data-source="/wp-json/ohs/v1/menu"></header>
    <section class="contentTop" id="contentTop" data-template="contentTop" data-source="/wp-json/wp/v2/pages/<?=$post->ID?>"></section>
    <div class="content" id="content" data-media="/wp-json/wp/v2/media?parent=0&per_page=20&page=<?=$thePage?>">
		<aside class="cta col-md-4 grid-item piece grid-sizer" data-template="cta" data-source="/wp-json/wp/v2/ctas/448"></aside>
		<aside class="cta col-md-8 grid-item piece grid-item--width2" data-template="cta" data-source="/wp-json/wp/v2/ctas/447"></aside>
	</div>
	<div class="piece pagination">
	<a href="/explore?mpaged=<?=($thePage + 1)?>">Go to page: <?=($thePage + 1)?></a>
	</div>
    <footer class="footer" id="footer" data-template="footer" data-source="/wp-json/ohs/v1/options"></footer>
<?php
  get_footer();
?>
