Highcharts.chart('chart-div1', {

    title: {
      text: 'Donations by Month'
    },
  
    subtitle: {
      text: 'Data input from CSV in folder'
    },
  
    data: {
        csvURL: './export_by_month.csv',
    },
  
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },
    legend: {
        enabled: false
    },
  
    series: [{
      lineWidth: 3,
      label: {
        enabled: false
      }
    }, {
      type: 'areaspline',
      color: '#c4392d',
      negativeColor: '#5679c4',
      fillOpacity: 0.5,
      
    }]
  });