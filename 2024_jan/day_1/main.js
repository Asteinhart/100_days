// For API and chart documentation please look here:
// https://www.highcharts.com/demo

const dem_chart = '#73C1E8'

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });

Highcharts.chart('chart-div1', {
    // Setting default colors
    colors: [
        '#800000',
        dem_chart,
    ],

    // All code for your chart goes here
    chart: {
        type: "bar"
    },
    
    title: {
        text: 'Since 2016, University of Chicago professors have donated...',
        align: 'left'
    },
    
    xAxis: {
        labels: {
            enabled: false
          },
        tickLength: 0,
        lineColor: 'gray',
        lineWidth: 2
    },
    yAxis: {
        visible: false
     },

    plotOptions: {
        series: {
            enableMouseTracking: false
        }
    },

    legend: { 
        enabled: false 
    },
    
    tooltip: {
            enabled: false,
            states: {
                hover: {
                    enabled: false
                }
            }

        },
    annotations: [{
        draggable: '', 
        labelOptions: {
            borderRadius: 0,
            backgroundColor: 'white',
            borderWidth: 0,
            borderColor: 'white',
            },
        labels: [{
                point: {
                    x: 145,
                    y: 230
                },
                style: {
                    fontSize: '18px',
                    color: 'black'
                },
                text: `<div style="color:#800000"> <b>$63,000</b> </div> to Republican candidates and PACs`
            }]},{ 
        labelOptions: {
            borderRadius: 0,
            backgroundColor: dem_chart,
            borderWidth: 0,
            borderColor: dem_chart,
            },
            labels: [{
                point: {
                    x: 250,
                    y: 320
                },
                style: {
                    fontSize: '25px',
                    color: 'black'
                },
                text: `<div style="color:#155F83"> <b>$2,000,000</b> </div> to Democratic candidates and PACs`
            }]
    }],
    series: [{
        name: 'Republican Donations',
        data: [63000],
        }, {
        name: 'Democratic Donations',
        data: [2000000],
        },
    ]
    
});