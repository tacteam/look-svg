'use strict'

angular.module('module.tac.svg', [])

.directive('inlineSvg', [
  ()->
    restrict: 'A'
    scope: inlineSvg: '@'
    link: (scope, element, attrs) ->
      watcher = ->
        if scope.inlineSvg
          $.get scope.inlineSvg, (svgDocument) ->
            svg = $(svgDocument).find('svg')
            element.append svg
      scope.$watch('inlineSvg', watcher, true)
])

.directive('inlineSvgModel', [
  '$interpolate'
  ($interpolate)->
    restrict: 'A'
    scope: inlineSvgModel: '@'
    link: (scope, element, attrs) ->
      svgvalue = null
      watcher = ->
        if scope.inlineSvgModel and scope.inlineSvgModel isnt svgvalue
          svgvalue = $interpolate(scope.inlineSvgModel)(scope)
          $.get svgvalue, (svgDocument) ->
            svg = $(svgDocument).find('svg')
            element.append svg
      scope.$watch('inlineSvgModel', watcher , true)
])

