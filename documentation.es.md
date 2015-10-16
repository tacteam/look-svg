### guia de desarrollo TAC

# tac-look-svg

Este componente permite inyectar dentro de un elemento DOM el contenido de un archivo svg obtenido dinámicamente.

## Install

Este repositorio de distribuye a travez del administrador `bower`. Los fuentes de este módulo se pueden encontrar en el
[repositorio general TacTeam](https://github.com/tacteam/look-svg).
Sientase a gusto de reportar problemas o proponer nuevas *features* en este repositorio

### bower

Este módulo puede ser instalado con `bower`.

```shell
bower install tac-look-svg
```

Opcionalmente puede agregar el prefijo --save para agregar la dependencia al archivo bower.js

```shell
bower install tac-look-svg --save
```

Luego agregue el correpondiente tag `<script>` a su `index.html`:

```html
<script src="/bower_components/tac-look-svg/dist/svg.js"></script>
```

## Documentación

##### Dependencia Angular

```js
angular.module('main-application',[
  '...dependencies...'
  'module.tac.svg'
  '...dependencies...'
])
```

##### Inicialización del componente

Este componente no necesita ser inicializado.

##### Uso

Url dinámica.
```html
<div class="shift-icon" inline-svg-model="{{assets}}/qwerty/shift.svg"></div>
```

Url estatica.
```html
<div class="shift-icon" inline-svg-model="site/assets/qwerty/shift.svg"></div>
```

Esto permite editar el estilo de la imagen con css.

```css
.shift-icon *{
  fill: #AAA;
}
.shift-icon:hover *{
  fill: #FFF;
}
```

## Licencia

No disponible aún.
