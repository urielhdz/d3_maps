D3Map (English)
=======

javascript plugin that allows you to draw a SVG map in your website using d3js

** Para español ver más abajo**

Getting Started
=======
1.- Import the d3js library into your webpage
```
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.min.js"></script>
```
2.- Move the repository's folder to the root of your project
3.- Import the javascript library
```
<script src="maps/map.js"></script>
```
4.- Instiantate the map and draw it
```
var map = new Map();
map.draw();
```
5.- You can optionally pass a callback as a parameter
```
var map = new Map();
map.draw(function(){
  console.log("Im triggered when the map has already been drawn");		
});
```
Additional features
=======
You can highlight specific countries by calling the highlightCountries function
```
var map = new Map();
map.draw(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("I'm triggered when the countries have been highlighted")
	});
});
```
Both the draw and the highlightCountries accept a JSON object as the last parameter for customization.
```
var map = new Map();
map.draw(function(){
},{width:700,height:300,color:'red',scale:100});
```

```
var map = new Map();
map.draw(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("Finished")
	}
	,{color:"rgb(250,50,50)"});
});
```
D3Map (Español)
=======

Plugin de javaScript para dibujar un mapa en tu página web


Configuración
=======
1.- Importa d3js
```
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.min.js"></script>
```
2.- Coloca la carpeta maps en la carpeta de tu proyecto
3.- Importa la librería del proyecto
```
<script src="maps/map.js"></script>
```
4.- Instancía el mapa y dibújalo con el método draw()
```
var map = new Map();
map.draw();
```
5.- Opcionalmente, puedes pasar un callback.
```
var map = new Map();
map.draw(function(){
  console.log("Im triggered when the map has already been drawn");		
});
```
Características adicionales
=======
Puedes resaltar países específicos utilizando el método highlightCountries() al que pasas un arreglo con los países a resaltar.
```
var map = new Map();
map.draw(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("I'm triggered when the countries have been highlighted")
	});
});
```
Ambos métodos (draw y highlightCountries) pueden recibir un JSON con opciones para personalizar los mapas.
```
var map = new Map();
map.draw(function(){
},{width:700,height:300,color:'red',scale:100});
```

```
var map = new Map();
map.draw(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("Finished")
	}
	,{color:"rgb(250,50,50)"});
});
```


Credits (Créditos
=======
https://github.com/johan/world.geo.json

https://gist.github.com/eparreno/205900
