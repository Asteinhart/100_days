// For API and chart documentation please look here:
// https://www.highcharts.com/demo

const data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3,
    4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4,
    3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5,
    3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9,
    2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9,
    3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6,
    3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9,
    2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7,
    3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1,
    3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];

var chart = Highcharts.chart('chart-div1', {
    // Setting default colors
    colors: [
        '#800000',
    ],

    // All code for your chart goes here
    title: {
        text: 'Sample user input',
        align: 'left'
    },
  
    legend: { 
    },
    
    tooltip: {
    },
    
    xAxis: [ {
        title: { text: 'Histogram' },
        alignTicks: false,
        plotLines: [{
            value: 0,
            color: 'red',
            width: 2,
            zIndex: 10
          }],
        
    }],

    yAxis: [ {
        title: { text: 'Histogram' },
    }],

   

    series: [{
        type: 'histogram',
        binWidth: .25,
        baseSeries: 's1',
        color: 'blue'
      }, {
        type: 'scatter',
        data: data,
        id: 's1',
        visible: false
      }]
    
});

const input = document.querySelector('#input');

input.addEventListener('input', function(e) {
    //console.log(e.target.value)
    chart.xAxis[0].options.plotLines[0].value = e.target.value;
    chart.xAxis[0].update();
    })