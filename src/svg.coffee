angular.module('module.tac.svg', [])


.directive('inlineSvg', [
  ()->
    restrict: 'A'
    scope: inlineSvg: '@'
    link: (scope, element, attrs) ->
      scope.$watch('inlineSvg', () ->
        if scope.inlineSvg
          $.get scope.inlineSvg, (svgDocument) ->
            svg = $(svgDocument).find('svg')
            element.append svg
      , true)
])

.directive('inlineSvgModel', [
  '$interpolate'
  ($interpolate)->
    restrict: 'A'
    scope: inlineSvgModel: '@'
    link: (scope, element, attrs) ->
      svgvalue = null
      scope.$watch('inlineSvgModel', () ->
        if scope.inlineSvgModel and scope.inlineSvgModel isnt svgvalue
          svgvalue = $interpolate(scope.inlineSvgModel)(scope)
          $.get svgvalue, (svgDocument) ->
            svg = $(svgDocument).find('svg')
            element.append svg
      , true)
        

])