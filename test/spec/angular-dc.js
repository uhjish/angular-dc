'use strict';

/* globals crossfilter */

describe('Module: angularDc', function () {
  var scope, $sandbox, $compile, $timeout, $document;

  // load the controller's module
  beforeEach(module('angularDc'));

  beforeEach(inject(function ($injector, $rootScope, _$compile_, _$timeout_, _$document_) {
    scope = $rootScope;
    $compile = _$compile_;
    $timeout = _$timeout_;
    $document = _$document_;
    $sandbox = angular.element('<div id="sandbox"></div>');
    var body = angular.element($document.body);
    body.append($sandbox);
  }));

  afterEach(function() {
    $sandbox.remove();
    scope.$destroy();
  });

  var cf = crossfilter();
  var d = cf.dimension(function(){return 'test';});
  var g = d.group(function(){return 'bar';});
  var templates = {
    'default': {
      scope: {d:d, g:g},
      element: '<div width="200" config="222" dc-chart="pieChart" dc-dimension="d" dc-group="g"></div>'
    }
  };

  function compileDirective(template) {
    template = template ? templates[template] : templates['default'];
    angular.extend(scope, template.scope || templates['default'].scope);
    var $element = angular.element(template.element);
    $sandbox.append($element);
    $element = $compile($element)(scope);
    scope.$digest();
    return $element;
  }

  it('chart elements should contain a single svg element', function () {
    var elm = compileDirective();
    expect(elm.children().length).toBe(1);
  });

  it('chart elements should be 200px wide', function () {
    var elm = compileDirective();
    expect(elm[0].getAttribute('width')).toBe('200');
  });

});
