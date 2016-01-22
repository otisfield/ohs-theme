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

add_filter('excerpt_more', 'custom_excerpt_more');

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
?>
