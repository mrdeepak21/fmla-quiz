<?php
/**
 * @package fmla-quiz
 * @version 1.0
 * Plugin Name: Quiz by Heigh10
 * Plugin URI: https://www.linkedin.com/in/deepak01/
 * Author: Deepak Kumar
 * Author URI: https://www.linkedin.com/in/deepak01/
 * Version: 1.0
 * Description: Simple Plugin for Generating Quiz. 
 */

 if(!defined('ABSPATH')) exit;

 //to display on frontend
 add_shortcode('fmla-quiz',function(){
     require_once('frontend/index.php');
 });

 //Stylesheet
 add_action('wp_head',function(){
     echo '<link rel="stylesheet" href="'.plugin_dir_url(__FILE__).'/frontend/style.css">';
 });
 
 //Script
 add_action('wp_footer',function(){
     echo '<script src="'.plugin_dir_url(__FILE__).'/frontend/script.js"></script>';
 });

//  WP Dashicon

add_action( 'wp_enqueue_scripts', function() {

    wp_enqueue_style( 'dashicons' );
 
 } );

