D3Map (English)
=======

javascript plugin that allows you to draw a SVG map in your website using d3js

DEMO: http://urielhdz.github.io/population/

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
var map = new Map("selector");
map.fill(); // It can be map.stroke()
```
5.- You can optionally pass a callback as a parameter
```
var map = new Map();
map.fill(function(){
  console.log("Im triggered when the map has already been drawn");		
});
```
Additional features
=======
You can highlight specific countries by calling the highlightCountries function
```
var map = new Map();
map.fill(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("I'm triggered when the countries have been highlighted")
	});
});
```
Both the fill, stroke and the highlightCountries methods accept a JSON object as the last parameter for customization.
```
var map = new Map();
map.stroke(function(){
},{strokeWidth:"2px",color:"#222"});
```

```
var map = new Map({width:700,height:300,color:'red',scale:100});
map.fill(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("Finished")
	}
	,{color:"rgb(250,50,50)"});
});
```
You can even highlight countries depending on certain values, like in a heat map
```
var map = new Map("#map",{width:700,height:700,scale:110,mouse_over:true});
var population_json = {};
map.stroke(function(){
	var data = {"BRA":20,"MEX":30};
	map.heatCountries(data,
    	function(){
   		console.log("I finished heating the map");
    	});

},{strokeWidth: "1px",color:"#eee"});
```
Both the stroke and fill method accept a callback for when a country is clicked, this callback receives the country path as an argument.
```
var map = new Map("#map",{width:700,height:700,scale:110,mouse_over:true});
var population_json = {};
map.stroke(function(){
},{click:function(country){
   console.log(country);
}});
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
4.- Instancía el mapa y dibújalo con el método fill() o stroke()
```
var map = new Map("selector");
map.fill(); // It can be map.stroke()
```
5.- Opcionalmente, puedes pasar un callback.
```
var map = new Map();
map.fill(function(){
  console.log("Im triggered when the map has already been drawn");		
});
```
Características adicionales
=======
Puedes resaltar países específicos utilizando el método highlightCountries() al que pasas un arreglo con los países a resaltar.
```
var map = new Map();
map.fill(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("I'm triggered when the countries have been highlighted")
	});
});
```
Los métodos fill, highlightCountries y stroke pueden recibir un JSON con opciones para personalizar los mapas, así como el constructor del mapa.
```
var map = new Map();
map.stroke(function(){
},{strokeWidth:"2px",color:"#222"});
```

```
var map = new Map({width:700,height:300,color:'red',scale:100}); //Constructor con opciones
map.fill(function(){
	map.highlightCountries(["BRA","Mexico"],
	function(){
		console.log("Finished")
	}
	,{color:"rgb(250,50,50)"});
});
```
También puedes crear mapas de calor con el método applyHeatCountries
```
var map = new Map("#map",{width:700,height:700,scale:110,mouse_over:true});
var population_json = {};
map.stroke(function(){
	var data = {"BRA":20,"MEX":30};
	map.heatCountries(data,
    	function(){
   		console.log("I finished heating the map");
    	});

},{strokeWidth: "1px",color:"#eee"});
```
Los métodos stroke y fill aceptan, entre el objeto de opciones, un callback para cuando se hace clic sobre un país, este callback recibe como argumento el path del país.
```
var map = new Map("#map",{width:700,height:700,scale:110,mouse_over:true});
var population_json = {};
map.stroke(function(){
},{click:function(country){
   console.log(country);
}});
```

Credits (Créditos
=======
https://github.com/johan/world.geo.json

https://gist.github.com/eparreno/205900
