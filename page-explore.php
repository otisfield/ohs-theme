<?php
  get_header();
  global $post;
?>
	<header class="header" id="header" data-template="header" data-source="/wp-json/ohs/v1/menu"></header>
    <section class="contentTop" id="contentTop" data-template="contentTop" data-source="/wp-json/wp/v2/pages/<?=$post->ID?>"></section>
    <div class="content" id="content" data-media="/wp-json/wp/v2/media?parent=0&per_page=30">
		<aside class="cta col-md-4 grid-item piece grid-sizer" data-template="cta" data-source="/wp-json/wp/v2/ctas/448"></aside>
		<aside class="cta col-md-8 grid-item piece grid-item--width2" data-template="cta" data-source="/wp-json/wp/v2/ctas/447"></aside>
	</div>
    <footer class="footer" id="footer" data-template="footer" data-source="/wp-json/ohs/v1/options"></footer>
<?php
  get_footer();
?>
