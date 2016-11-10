'use strict';
$.fn.ripple = function() {
  var _self = this;
  this.bind('click', function(e) {
    var width = _self.width(),
        height = _self.height(),
        pos = _self.offset(),
        posX = pos.left,
        posY = pos.top;

    // 决定扩散方向
    width >= height ? height = width : width = height;

    var x = e.pageX - posX - width / 2,
        y = e.pageY - posY - height / 2;

    _self.children('.ripple').remove();

    $('<span class="ripple"></span>')
      .appendTo(_self)
      .css({
        width: width,
        height: height,
        top: y + 'px',
        left: x + 'px'
      })
      .addClass('rippleEffect');
  });

  return this;
};