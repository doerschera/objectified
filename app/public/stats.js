$(document).ready(function() {
  var currentUrl = window.location.origin;

  $.get(currentUrl+'/api/stats', function(response) {
    console.log(response);
    var stats = [];
    for(var key in response) {
      if(response.hasOwnProperty(key)) {
        stats.push(response[key]);
      }
    }
    console.log(stats);

    var topObject;
    var objectCount = 0;

    for(var key in response) {
      if(response.hasOwnProperty(key)) {
        if(response[key] > objectCount) {
          objectCount = response[key];
          topObject = key;
        }
      }
    }

    $('#topObject').html('Most people are: '+topObject+'s.')

    var ctx = $('#pieChart');
    var data = {
      labels: [
        'lamp',
        'toaster',
        'vase',
        'umbrella',
        'chair'
      ],
      datasets: [
        {
          data: stats,
          backgroundColor: [
            '#FFFFFF',
            '#F8E8E6',
            '#F1D0CD',
            '#EAB9B3',
            '#E3A19A'
          ],
          borderColor: ['rgb(231, 214, 26)', 'rgb(231, 214, 26)', 'rgb(231, 214, 26)', 'rgb(231, 214, 26)', 'rgb(231, 214, 26)']
        }
      ]
    }
    var objPieChart = new Chart(ctx,{
      type: 'pie',
      data: data,
      options: {
        legend: {
          position: 'left',
          labels: {
            boxWidth: 20,
            fontColor: '#ffffff',
            fontFamily: "'Source Code Pro'"
          }
        }
      }
    })
  })


})
