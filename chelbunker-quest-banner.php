<?php

/**
 * Plugin Name:       Chelbunker Quest Banner
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       chelbunker-quest-banner
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_chelbunker_quest_banner_block_init()
{
	register_block_type(__DIR__ . '/build');
	add_image_size('mobile', 320, 9999);
	add_image_size('table', 786, 9999);
	add_image_size('desktop', 1298, 9999);
	add_image_size('wide-desktop', 1440, 9999);
}
add_action('init', 'create_block_chelbunker_quest_banner_block_init');

function chelbunker_quest_banner_image_sizes($sizes) {
	$addsizes = array(
		"mobile" => 'Mobile',
		"table" => 'Table',
		"desktop" => 'Desktop',
		"wide-desktop" => 'Wide desktop'
	);
	$newsizes = array_merge( $sizes, $addsizes );
	return $newsizes;
}
add_filter('image_size_names_choose', 'chelbunker_quest_banner_image_sizes');
