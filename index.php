<?php
  get_header();
?>
	<header class="header" id="header" data-template="header" data-source="/wp-json/ohs/v1/menu"></header>
    <section class="contentTop" id="contentTop" data-template="contentTop" data-source="/wp-json/ohs/v1/home"></section>
    <div class="content" id="content" data-mediamore="/explore">
        <section class="events col-md-4 grid-item grid-sizer piece" data-template="events" data-source="/wp-json/wp/v2/events?per_page=5"></section>
        <aside class="cta col-md-8 grid-item grid-item--width2 piece" data-template="cta" data-source="/wp-json/wp/v2/ctas/447"></aside>
        <aside class="articleSingle col-md-4 grid-item piece" data-template="articleSingle" data-source="/wp-json/wp/v2/posts/<?=get_nth_post(1)?>"></aside>
        <aside class="updates col-md-4 grid-item piece" data-template="updates" data-source="/wp-json/wp/v2/updates?posts_per_page=1"></aside>
        <aside class="cta col-md-4 grid-item piece" data-template="cta" data-source="/wp-json/wp/v2/ctas/448"></aside>
		<aside class="media mediaSingle col-md-4 grid-item piece" data-template="mediaSingle" data-source="/wp-json/wp/v2/media/<?=get_nth_post(1,'attachment')?>"></aside>
		<aside class="articleSingle col-md-4 grid-item piece" data-template="articleSingle" data-source="/wp-json/wp/v2/posts/<?=get_nth_post(2)?>"></aside>
        <aside class="media mediaSingle col-md-4 grid-item piece" data-template="mediaSingle" data-source="/wp-json/wp/v2/media/<?=get_nth_post(2,'attachment')?>"></aside>
		<aside class="articleSingle col-md-4 grid-item piece" data-template="articleSingle" data-source="/wp-json/wp/v2/posts/<?=get_nth_post(3)?>"></aside>
		<aside class="media mediaSingle col-md-4 grid-item piece" data-template="mediaSingle" data-source="/wp-json/wp/v2/media/<?=get_nth_post(3,'attachment')?>"></aside>
		<aside class="articleSingle col-md-4 grid-item piece" data-template="articleSingle" data-source="/wp-json/wp/v2/posts/<?=get_nth_post(4)?>"></aside>
		<aside class="media mediaSingle col-md-4 grid-item piece" data-template="mediaSingle" data-source="/wp-json/wp/v2/media/<?=get_nth_post(4,'attachment')?>"></aside>
		<aside class="articleSingle col-md-4 grid-item piece" data-template="articleSingle" data-source="/wp-json/wp/v2/posts/<?=get_nth_post(5)?>"></aside>
		<aside class="media mediaSingle col-md-4 grid-item piece" data-template="mediaSingle" data-source="/wp-json/wp/v2/media/<?=get_nth_post(5,'attachment')?>"></aside>
		<aside class="cta col-md-8 grid-item piece" data-template="cta" data-source="/wp-json/wp/v2/ctas/447"></aside>
	</div>
    <footer class="footer" id="footer" data-template="footer" data-source="/wp-json/ohs/v1/options"></footer>
	
<?php
  get_footer();
?>
