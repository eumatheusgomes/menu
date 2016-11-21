(function($, q) {
  'use strict';

  var $el;

  q.module('Menu', {
    beforeEach: function () {
      $el = $('<div/>');
    },
    afterEach: function () {
      $el = null;
    }
  });

  q.test('should be chainable', function (a) {
    a.expect(1);

    $el.menu().addClass('chainable');

    a.ok($el.hasClass('chainable'), 'class added correctly from chaining');
  });

}(window.jQuery, window.QUnit));
