$(function() {
  $(".fancybox").fancybox();

  $('.prev').on('click', function(e) {
    e.preventDefault();
    positionGallery(true);
  });
  $('.next').on('click', function(e) {
    e.preventDefault();
    positionGallery(false);
  });
});

function positionGallery(is_prev) {
  var gallery = $('.gallery'),
      slider  = gallery.find('ul');

  // These are the core variables
  var full_width, viewport_width, left_pos, li_width;

  // Calculating the full width
  var lis, li_margin_left, li_margin_right;

  lis = gallery.find('ul li');

  li_width = lis.width();

  li_margin_left = getNum( lis.css('margin-left') );
  li_margin_right = getNum( lis.css('margin-right') );

  // Setting Core Values..
  li_width += li_margin_left + li_margin_right;

  full_width = lis.length * li_width;

  viewport_width = gallery.find('.viewport').width();

  left_pos = getNum( slider.css('left') );

  // Set new position
  left_pos += is_prev ? li_width : (-1*li_width);

  // If the left_pos goes out of bounds, cycle it back to normal...
  var max_width = (full_width - viewport_width) * -1;

  if(left_pos < max_width) {
    left_pos = 0;
  } else if(left_pos > 0) {
    left_pos = max_width;
  }

  slider.css('left', left_pos);
}

function getNum(px_string) {
  return parseInt(px_string.replace('px', ''));
}
