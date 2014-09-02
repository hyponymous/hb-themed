
var $ = require('jquery');
var _ = require('lodash');
var d3 = require('d3');

console.log('packages installed:');
console.log('jquery', $);
console.log('lodash', _);
console.log('d3', d3);

$(document).ready(function() {
  var $window = $(window);
  var $topImage = $('.top-image');
  if ($topImage.length == 0) { return; }

  $window.scroll(function() {
    var top = $window.scrollTop();
    $topImage.css('transform', 'translate3d(0, ' + top / 2 + 'px, 0)');
    $topImage.css('opacity', Math.min(1, Math.max(0, 1 - top / 700)));
  });
  $window.trigger('scroll');
});

