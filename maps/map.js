function Map(url){
	if (typeof options === 'undefined') options = {};
	var self = this;
	


	self.highlightCountries = function(countries_array,callback,options){
		d3.csv("maps/relatives.csv", function(d) {
		  return {
		    name: d.name,
		    iso_name: d.iso_name,
		    iso2: d.iso2,
		    iso3: d.iso3,
		    numcode: +d.numcode
		  };
		}, function(error, rows) {
		  self.countries_data = rows;
		  self.applyHighlightCountries(countries_array,callback,options)
		});
		
	};
	self.applyHighlightCountries = function(countries_array,callback,options){
		if (typeof options === 'undefined') options = {};
		var color = (options.hasOwnProperty("color")) ? options.color : "yellow";

		for (var i = 0; i < countries_array.length; i++) {
			var country = countries_array[i];
			if(country.length > 3){
				var iso3 = self.searchForCode(country);
				if(iso3){
					console.log(iso3);
					d3.select("#"+iso3)
						.attr("fill",color);		
				}
			}
			else{
				d3.select("#"+country)
					.attr("fill",color);
			}
		};
		callback();
	}
	self.searchForCode = function(country){
		var ctr = country.toLowerCase();
		var results = self.countries_data.filter(function (country_csv) {
			
		    return country_csv.name.toLowerCase() == ctr || country_csv.iso_name.toLowerCase() == ctr;
		});
		if(results.length > 0){
			
			return results[0].iso3;
		}
		return null;
	}
	self.draw = function(callback,options){
		var width = (options.hasOwnProperty("width")) ? options.width : 800;
		var height = (options.hasOwnProperty("height")) ? options.height : 600;
		var scale = (options.hasOwnProperty("scale")) ? options.scale : 100;
		var highlight_color = (options.hasOwnProperty("highlight_color")) ? options.highlight_color : false;

		self.projection = d3.geo.mercator().translate([width/2,height/2]).scale([scale]);
		self.path = d3.geo.path().projection(self.projection);
		
		self.color = (options.hasOwnProperty("color")) ? options.color : "#333";
		var svg = d3.select("body").append("svg").attr({width: width, height: height});

		d3.json("maps/countries.geo.json",function(json){
			svg.selectAll("path")
				.data(json.features)
				.enter()
				.append("path")
				.attr("id",function(d){return d.id;})
				.attr("d",self.path)
				.attr("fill",self.color)
				.attr("class","transitionable")
				.on("mouseover",function(){
					if(highlight_color){
						d3.select("#"+this.id).attr("fill",highlight_color);
					}
				})
				.on("mouseout",function(){
					d3.select("#"+this.id).attr("fill",self.color)
				});
			if (typeof callback != 'undefined') callback();
		});	

	}
	
}	