<?php
  get_header();
  global $post;
?>
	<header class="header" id="header" data-template="header" data-source="/wp-json/ohs/v1/menu"></header>
    <section class="contentTop" id="contentTop" data-template="contentTop" data-source="/wp-json/wp/v2/pages/<?=$post->ID?>"></section>
    <div class="content" id="content">
		<aside class="cta col-md-4 grid-item grid-sizer piece" data-template="cta" data-source="/wp-json/wp/v2/ctas/448"></aside>
		<aside class="contentTitle col-md-8 grid-item grid-item--width2 piece" data-template="contentTitle" data-source="/wp-json/wp/v2/pages/<?=$post->ID?>"></aside>
		<section class="contentBody col-md-8 grid-item grid-item--width2 piece" data-template="contentBody" data-source="/wp-json/wp/v2/pages/<?=$post->ID?>"></section>
		<aside class="cta col-md-4 grid-item piece" data-template="cta" data-source="/wp-json/wp/v2/ctas/447"></aside>
		<section class="events col-md-4 grid-item grid-sizer piece" data-template="events" data-source="/wp-json/wp/v2/events"></section>
		<section class="articles col-md-8 grid-item grid-item--width2 piece" data-template="articles" data-source="/wp-json/wp/v2/posts?posts_per_page=10"></section>
	</div>
    <footer class="footer" id="footer" data-template="footer" data-source="/wp-json/ohs/v1/options"></footer>
<?php
  get_footer();
?>
