// For API and chart documentation please look here:
// https://www.highcharts.com/demo

Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

// For API and chart documentation please look here:
// https://www.highcharts.com/demo
Highcharts.chart('chart-div', {
    // Setting default colors
    colors: [
        '#800000',
        '#FFA319',
        '#C16622',
        '#8F3931',
        '#8A9045',
        '#58593F',
        '#155F83',
        '#350E20',
        '#47B5FF',
        '#FF3399'
    ],

    // All code for your chart goes here
    title: {
        text: 'Import data from google sheet',
        align: 'center'
    },

    plotOptions: {
        series: {
            lineWidth: 5
        }
    },
    data: {
        googleAPIKey: 'AIzaSyBaX5ZxsGi1vGynhSi_Twg24A0Cr01QT9M',
        googleSpreadsheetKey: '1P7dpyIJaSDWiCY9y-xZVhtOZ0IaurT3plzjwuWhkq0U',
        error: console.error
    }
});
