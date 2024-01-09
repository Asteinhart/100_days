Highcharts.chart('chart-div', {
    chart: {
        type: 'packedbubble',
        height: '50%'
    },
    title: {
        text: 'Genres and Subgenres',
        align: 'left'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} albums',
        parentNodeFormat: '<b>Total:</b> {point.series.name} albums'
    },
    plotOptions: {
        packedbubble: {
            minSize: '50%',
            maxSize: '100%',
            zMin: 0,
            zMax: 100,
            layoutAlgorithm: {
                gravitationalConstant: .1,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: false,
                parentNodeLimit: false,
                initialPositionRadius: 10,
                friction: -.93,
                enableSimulation: true

            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                parentNodeFormat: '{point.series.name}',
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal',
                    fontSize: '14px'
                }
            },
        }},
    series: [{
        name: 'Pop',
        data: [{
            name: 'Alternative',
            value: 75
        }, {
            name: 'Mainstream',
            value: 23
        },
        {
            name: 'Global',
            value: 5
        },
        {
            name: 'Classic',
            value: 1
        }]
    }, {
        name: 'Rock',
        data: [{
            name: 'Alternative',
            value: 47
        }, {
            name: 'Mainstream',
            value: 10
        },
        {
            name: 'Global',
            value: 1
        },
        {
            name: 'Classic',
            value: 16
        },
        {
            name: 'Experimental',
            value: 2
        }]
    }, {
        name: 'Folk',
        data: [{
            name: 'Alternative',
            value: 52
        }, {
            name: 'Mainstream',
            value: 4
        },
        {
            name: 'Global',
            value: 1
        },
        {
            name: 'Classic',
            value: 2
        },
        {
            name: 'Experimental',
            value: 3
        },
        {
            name: 'Traditional',
            value: 10
        }]
    } , {
        name: 'R&B',
        data: [{
            name: 'Alternative',
            value: 21
        }, {
            name: 'Mainstream',
            value: 11
        },
        {
            name: 'Classic',
            value: 1
        }]
    }, {
        name: 'Soundtrack',
        data: [{
            name: 'Theatre',
            value: 20
        }, {
            name: 'Film',
            value: 2
        }]
    }, {
        name: 'Hip Hop',
        data: [{
            name: 'Alternative',
            value: 10
        }, {
            name: 'Mainstream',
            value: 3
        },
        {
            name: 'Global',
            value: 1
        },
        {
            name: 'Classic',
            value: 1
        }]
    }
]
    
});
