$(document).ready(function() {

// Window Height data
var w_height = $(window).height();

// Window Width data
var w_width = $(window).width();

// Height for Content
var negative_height = $(window).height() * -1.03;
var distance_to_move = negative_height / 1.3; // higher the number the lower the content goes
var search_height = negative_height / .87; // higher the number the lower the content goes

// Height for logo
var logo_height = w_height - w_height + 32;
var logo_width = w_width - w_width + 51;

// Height for the Map
var map_height = w_height - 150;
var map_width = w_width - 35;

// Dynamically set the background to the screen width and height
$('.fit').css('height', w_height - 102).css('width',w_width);

// Dynamically set the content to the correct location on the screen
$('.move').css('margin-top', distance_to_move);

// Dynamically set the content to the top of the screen
$('.top').css('margin-top', search_height);

// Dynamically set the content to the correct location on the screen
$('.logo').css('height',logo_height).css('width',logo_width).css('margin-top',-6).css('margin-left',7);

// Dynamically set the location map to the correct location on the screen
$('.map').css('height', map_height).css('width',map_width).css('margin-top',5).css('margin-left',0).css('margin-right',0).css('margin-bottom',5);

// Dynamically set the background for the search page to the correct location on the screen, but a little below the search box
$('.fit_search').css('height', w_height).css('width',w_width).css('margin-top',175).css('margin-left',0).css('margin-right',0).css('margin-bottom',5);
});