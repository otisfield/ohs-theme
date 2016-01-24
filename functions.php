<?php

/**
 * Remove Default Actions
 */

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);

/**
 * Modify jQuery
 */
 
function modify_jquery() {
	if (!is_admin()) {
		wp_deregister_script('jquery');
	}
}

add_action('init', 'modify_jquery');

/**
 * Add features
 */
 
add_image_size( 'display', 600, 900 );

function disable_wp_emojicons() {

  // all actions related to emojis
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
}
add_action( 'init', 'disable_wp_emojicons' );

/**
 * Theme Supports
 */

function ohs_theme_setup() {

    add_theme_support( 'post-thumbnails');
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption'
    ) );
    add_theme_support( 'title-tag' );
    add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'menus' );
	register_nav_menus(	array( 
		'main-menu' => __( 'Main Menu', 'ohs-theme' ) 
	) );
	
	remove_action('wp_head', 'wp_print_scripts');
	remove_action('wp_head', 'wp_print_head_scripts', 9);
	remove_action('wp_head', 'wp_enqueue_scripts', 1);
	add_action('wp_footer', 'wp_print_scripts', 1);
	add_action('wp_footer', 'wp_enqueue_scripts', 1);
	add_action('wp_footer', 'wp_print_head_scripts', 1);
	
	wp_register_script('jqueryCDN', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', null);
	wp_enqueue_script('jqueryCDN');
	
	wp_register_script('npo', get_bloginfo('template_url') . '/js/lib/npo.min.js', null);
	wp_register_script('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', null);
	wp_register_script('handlebars', get_bloginfo('template_url') . '/js/lib/handlebars.runtime.min.js', null);
	wp_register_script('masonry', get_bloginfo('template_url') . '/js/lib/jquery.masonry.min.js', null);
	wp_register_script('imagesLoaded', get_bloginfo('template_url') . '/js/lib/imagesloaded.pkgd.min.js', null);
	wp_register_script('ohsTemplates', get_bloginfo('template_url') . '/js/templates.min.js', '0.1.1');
	wp_register_script('renderTemplates', get_bloginfo('template_url') . '/js/dev/jquery.renderTemplate.js', '0.1');
	wp_register_script('ohsMain', get_bloginfo('template_url') . '/js/dev/main.js', '0.1');
	wp_register_script('ohsMedia', get_bloginfo('template_url') . '/js/dev/media.js', '0.1');
	
	wp_enqueue_script('npo', false, array(), false, true);
	wp_enqueue_script('bootstrap', false, array(), false, true);
	wp_enqueue_script('handlebars', false, array(), false, true);
	wp_enqueue_script('masonry', false, array(), false, true);
	wp_enqueue_script('imagesLoaded', false, array(), false, true);
	wp_enqueue_script('ohsTemplates', false, array(), false, true);
	wp_enqueue_script('renderTemplates', false, array(), false, true);
	wp_enqueue_script('ohsMain', false, array(), false, true);
	wp_enqueue_script('ohsMedia', false, array(), false, true);
	
}

add_action( 'after_setup_theme', 'ohs_theme_setup');

/**
 * Wordpress Core Filters
 */

function ohs_excerpt_length($length) {
    return 50;
}

add_filter('excerpt_length', 'ohs_excerpt_length');

function ohs_excerpt_more($more) {
    return '...';
}

add_filter('excerpt_more', 'ohs_excerpt_more');

/**
 * Theme-Specific Template Tags
 */

function get_data_source($id, $type = '') {
    if ($id === 0) {
       return site_url('/wp-json/ohs/v1/home');
    } else {
        $postType = get_post_type($id);
        if ($postType === false) {
            return site_url('/wp-json/ohs/v1/not-found');
        } elseif ($postType === 'post') {
            return site_url('/wp-json/wp/v2/posts/'.$id);
        } elseif ($post_type === 'page') {
            return site_url('/wp-json/wp/v2/pages/'.$id);
        } elseif ($post_type === 'attachment') {
            return site_url('/wp-json/wp/v2/media/'.$id);
        }
    }
}

function the_data_source() {
    if (is_front_page()) {
        $id = 0;
        $type = '';
    } else {
        $id = get_the_ID();
        $type = '';
    }
    $source = 'data-source="';
    $source .= get_data_source($id);
    $source .= '"';

    return $source;
}

add_action( 'admin_menu', 'ohs_theme_options_menu' );

function ohs_theme_options_menu() {
	add_theme_page( 'OHS Theme Options', 'OHS Theme Options', 'manage_options', 'ohs-theme-options', 'ohs_theme_options_admin_page'  );
}

function ohs_theme_options_admin_page() {
	
	if (!current_user_can('manage_options')) {
		wp_die( __('You do not have sufficient permissions to access this page.') );
	}
	
	$opt_name = 'ohs_theme_options';
	$hidden_field_name = 'ohs_submit_hidden';
	$data_field_name = 'ohs_theme_options';
	
	$opt_val = get_option( $opt_name );
	
	if (!isset($opt_val) || $opt_val == '') {
		$opt_val = array();
	}
	
	if ( isset($_POST[ $hidden_field_name ]) && $_POST[ $hidden_field_name ] === 'Y') {
		
		$opt_val = $_POST[ $data_field_name ];
		
		foreach ($opt_val as $key => $value) {
			if ($value == '') {
				unset($opt_val[$key]);
			} else {
				$opt_val[$key] = filter_var(str_replace(array('<','>'),'',$value), FILTER_SANITIZE_MAGIC_QUOTES);
			}
		}
		
		update_option( $opt_name, $opt_val );
		
		echo '<div class="updated"><p><strong>' . __( 'Settings saved.', 'ohs-theme' ) . '</strong></p></div>';
		
	}
	
	$theme_option_array = array(
		'Name' => 'organizationName',
		'Address Line 1' => 'addressLine1',
		'Address Line 2' => 'addressLine2',
		'City' => 'city',
		'State' => 'state',
		'Zip' => 'zip',
		'Default Hero Image' => 'defaultHero',
		'Logo' => 'logo'
	);
	
	echo '<div class="wrap">';
	echo '<h2>' . __( 'OHS Theme Options', 'ohs-theme') . '</h2>';
	echo '<form name="ohs_social_media_form" method="post" action="">';
	echo '<input type="hidden" name="' . $hidden_field_name . '" value="Y">';
	foreach ($theme_option_array as $key=>$option) {
		echo '<p><span style="display:inline-block;width:100px;">' . __($key, 'ohs-theme') . ':</span> <input type="text" name="ohs_theme_options[' . $option . ']" value="' . (isset($opt_val[$option]) ? $opt_val[$option] : '') . '" placeholder="Enter URL"></p>';
	}
	echo '<p class="submit">';
	echo '<input type="submit" name="Submit" class="button-primary" value="' . __('Save Changes') . '">';
	echo '</p>';
	echo '</form>';
	echo '</div>';
}

function get_ohs_option($name) {
	$theme_options = get_option('ohs_theme_options');
	
	if(isset($theme_options[$name])) {
		return $theme_options[$name];
	} else {
		return false;
	}
}

function get_nth_post($n, $postType = 'post') {
	$args = array(
		'posts_per_page' => $n,
		'post_status' => 'publish',
		'order' => 'DESC',
		'post_type' => $postType
	);
	
	if ($postType === 'attachment') {
		$args['post_parent'] = 0;
		unset($args['post_status']);
	}
	
	$posts = get_posts( $args );
	
	return $posts[$n-1]->ID;
}
?>