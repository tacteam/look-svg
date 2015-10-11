(function() {
  angular.module('module.tac.svg', []).directive('inlineSvg', [
    function() {
      return {
        restrict: 'A',
        scope: {
          inlineSvg: '@'
        },
        link: function(scope, element, attrs) {
          return scope.$watch('inlineSvg', function() {
            if (scope.inlineSvg) {
              return $.get(scope.inlineSvg, function(svgDocument) {
                var svg;
                svg = $(svgDocument).find('svg');
                return element.append(svg);
              });
            }
          }, true);
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
          var svgvalue;
          svgvalue = null;
          return scope.$watch('inlineSvgModel', function() {
            if (scope.inlineSvgModel && scope.inlineSvgModel !== svgvalue) {
              svgvalue = $interpolate(scope.inlineSvgModel)(scope);
              return $.get(svgvalue, function(svgDocument) {
                var svg;
                svg = $(svgDocument).find('svg');
                return element.append(svg);
              });
            }
          }, true);
        }
      };
    }
  ]);

}).call(this);
