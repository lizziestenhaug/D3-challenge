//chart set up
var svgwidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left:100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.

var svg = d3
  .select(".scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  // Append an SVG group
var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

//Data Import
d3.csv("assets/data/data.csv").then(function(CensusData) {
    CensusData.forEach(function(data) {
        data.age = +data.age;
        data.smokes = +data.smokes;
        console.log(data);
    });

    //function used for updating x-scale
    const xScale = d3.scaleLinear()
        .domain(d3.extent(CensusData, d => d.age))
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([6,d3.max(CensusData, d => d.smokes)])
        .range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
        
    
});



