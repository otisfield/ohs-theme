<?php
  get_header();
?>
      <header class="header" id="header" data-source="/wp-json/ohs/v1/menu"></header>
      <main class="content" id="content" data-mediamore="/explore" data-media="/wp-json/wp/v2/media?parent=0">
          <section class="events col-md-4 grid-item grid-sizer" id="events" data-source="/wp-json/ohs/v1/events/"></section>
          <aside class="ctaTop col-md-8 grid-item grid-item--width2" id="ctaTop"></aside>
          <aside class="updates col-md-4 grid-item" id="updates"></aside>
          <aside class="articles col-md-4 grid-item" id="articles" data-source="/wp-json/wp/v2/posts"></aside>
          <aside class="ctaMiddle col-md-4 grid-item" id="ctaMiddle"></aside>
          <aside class="ctaBottom col-md-8 grid-item grid-item--width2" id="ctaBottom"></aside>
      </main>
      <footer class="footer" id="footer"></footer>
<?php
  get_footer();
?>
