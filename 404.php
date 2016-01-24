<?php
  get_header();
  global $post;
?>
	<header class="header" id="header" data-template="header" data-source="/wp-json/ohs/v1/menu"></header>
    <section class="contentTop" id="contentTop" data-template="contentTop" data-source="/wp-json/ohs/v1/home"></section>
    <div class="content" id="content" data-mediamore="/explore">
        <section class="articles col-md-4 grid-item grid-sizer piece" data-template="articles" data-source="/wp-json/wp/v2/posts?posts_per_page=5"></section>
		<aside class="contentTitle col-md-8 grid-item grid-item--width2 piece"><h1>Page Not Found</h1></aside>
		<section class="contentBody col-md-8 grid-item grid-item--width2 piece"><p>Our apologies.</p><p>We could not find the page you were looking for.</p><p>Please use the links in the navigation menu at the top of the page, or our recent posts on the side to explore our website.</p></section>
		<aside class="cta col-md-8 grid-item piece grid-item--width2" data-template="cta" data-source="/wp-json/wp/v2/ctas/447"></aside>
		<aside class="cta col-md-8 grid-item piece grid-item--width2" data-template="cta" data-source="/wp-json/wp/v2/ctas/448"></aside>
	</div>
    <footer class="footer" id="footer" data-template="footer" data-source="/wp-json/ohs/v1/options"></footer>
<?php
  get_footer();
?>
