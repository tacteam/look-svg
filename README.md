### TAC Development Guide

# tac-look-svg

This component allows to inject a DOM element within the content of an SVG file dynamically obtained.

## Install

This repo is for distribution on `bower`. The source for this module is in the
[main TacTeam repo](https://github.com/tacteam/look-svg).
Please file issues and pull requests against that repo.

### bower

You can install this package with `bower`.

```shell
bower install tac-look-svg
```

Optionally you can add --save prefix to add package to bower.js

```shell
bower install tac-look-svg --save
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/tac-look-svg/dist/svg.js"></script>
```

## Documentation

##### Angular dependency

You must add the component identifier to Angular dependencies in order to load module into the application.

```js
angular.module('main-application',[
  '...dependencies...',
  'module.tac.svg',
  '...dependencies...'
])
```
##### Initialize component

This component need not be initialized

##### Using


Url dinamica.
```html
<div class="shift-icon" inline-svg-model="{{assets}}/qwerty/shift.svg"></div>
```

Url estatica.
```html
<div class="shift-icon" inline-svg-model="site/assets/qwerty/shift.svg"></div>
```

This lets you edit the image style with css.

```css
.shift-icon *{
  fill: #AAA;
}
.shift-icon:hover *{
  fill: #FFF;
}
```

## License

License is not available yet
