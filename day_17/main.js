// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

var map = L.map('map').setView([41.79139,-87.60000], 15.5);

 L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	//maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(map);

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");
    map.invalidateSize()

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    console.log(response);
    // response = { element, direction, index }

    // add color to current step only
    step.classed("is-active", function (d, i) {
        return i === response.index;
    });

    var stepData = response.index
    console.log(stepData);
    if (stepData == 0) {
        map.flyTo([41.79139,-87.60000], 15.8)
    }
    if (stepData == 1) {
        map.flyTo([41.79139,-87.60000], 17)
        map.removeLayer(campus)
    }
    if (stepData == 2) {
        map.flyTo([41.79139,-87.60000], 15.5)

        campus = polygon = L.polygon([
            [41.78776,-87.60606],
            [41.79496,-87.60606],
            [41.79498,-87.59815],
            [41.78789,-87.59012],
            [41.78776,-87.60606]
        ])
        map.addLayer(campus);

    }
    
    // update graphic based on step
    figure.select("p").text(response.index + 1);
}

function init() {

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: .33,
            debug: false
        })
        .onStepEnter(handleStepEnter);
}

// kick things off
init();
