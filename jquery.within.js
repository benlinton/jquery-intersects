/**
 * jQuery Within Plugin v1.0.0
 *
 * https://github.com/benlinton/jquery-within
 * Copyright (c) Benjamin Linton (http://benlinton.com)
 * MIT license
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory;
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  $.fn.within = function(container, toleranceMode) {

    var $container = $(container),
      $item = $(this),

      x1 = $item.offset().left,
      y1 = $item.offset().top,
      x2 = x1 + $item.outerWidth(),
      y2 = y1 + $item.outerHeight(),

      left = $container.offset().left,
      top = $container.offset().top,
      right = left + $container.outerWidth(),
      bottom = top + $container.outerHeight();

    switch (toleranceMode) {

      // Returns true if any of item is inside the bounds of container.
      case 'any':
        return (
          ( y1 >= top && y1 <= bottom ) || // top edge touching
          ( y2 >= top && y2 <= bottom ) || // bottom edge touching
          ( y1 < top && y2 > bottom ) // surrounded vertically
        ) && (
          ( x1 >= left && x1 <= right ) || // left edge touching
          ( x2 >= left && x2 <= right ) || // right edge touching
          ( x1 < left && x2 > right ) // surrounded horizontally
        );

      // Returns true if the center of item is inside the bounds of container.
      case 'mostly':
        return ( left < x1 + ( $item.outerWidth() / 2 ) && // right Half
          x2 - ( $item.outerWidth() / 2 ) < right && // left Half
          top < y1 + ( $item.outerHeight() / 2 ) && // bottom Half
          y2 - ( $item.outerHeight() / 2 ) < bottom ); // top Half

      // Returns true if all of item is inside the bounds of container.
      default:
      case 'fully':
        return ( left <= x1 &&
          x2 <= right &&
          top <= y1 &&
          y2 <= bottom );
    }
  };

}));
