(function() {
  'use strict';
  angular.module('module.tac.svg', []).directive('inlineSvg', [
    function() {
      return {
        restrict: 'A',
        scope: {
          inlineSvg: '@'
        },
        link: function(scope, element, attrs) {
          var watcher;
          watcher = function() {
            if (scope.inlineSvg) {
              return $.get(scope.inlineSvg, function(svgDocument) {
                var svg;
                svg = $(svgDocument).find('svg');
                return element.append(svg);
              });
            }
          };
          return scope.$watch('inlineSvg', watcher, true);
        }
      };
    }
  ]).directive('inlineSvgModel', [
    '$interpolate', function($interpolate) {
      return {
        restrict: 'A',
        scope: {
          inlineSvgModel: '@'
        },
        link: function(scope, element, attrs) {
          var svgvalue, watcher;
          svgvalue = null;
          watcher = function() {
            if (scope.inlineSvgModel && scope.inlineSvgModel !== svgvalue) {
              svgvalue = $interpolate(scope.inlineSvgModel)(scope);
              return $.get(svgvalue, function(svgDocument) {
                var svg;
                svg = $(svgDocument).find('svg');
                return element.append(svg);
              });
            }
          };
          return scope.$watch('inlineSvgModel', watcher, true);
        }
      };
    }
  ]);

}).call(this);
