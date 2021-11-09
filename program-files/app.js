
const myChart1 = document.getElementById('myChart1').getContext('2d');
const alertBox = document.querySelector('.alert-display');
const xbtn = document.querySelector('.close-alert');
// chart 1
const chart1 = new Chart(myChart1, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500],
            borderWidth: 1,
            borderColor: '#CC005C',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(204,0,92,0.5)',
            pointBackgroundColor: 'rgba(204,0,92,0.9)',
            pointHoverBackgroundColor: '#19aca4',
            pointHoverBorderColor: '#19aca4'
            
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            }
          },
        responsive:true,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});
// chart 2
const myChart2 = document.getElementById('myChart2').getContext('2d');

const chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 110, 170, 130, 230, 200, 100],
            borderWidth: 1,
            borderColor: '#CC005C',
            tension: 0.4,
            fill: true,
            backgroundColor: '#CC005C',
            pointBackgroundColor: 'rgba(204,0,92,0.9)',
            pointHoverBackgroundColor: '#19aca4',
            pointHoverBorderColor: '#19aca4'
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            }
          },
        responsive:true,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});
// chart 3
const myChart3 = document.getElementById('myChart3').getContext('2d');

const chart3 = new Chart(myChart3, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            data: [300, 90, 95],
            backgroundColor: [
            'rgb(204,0,92)',
            'rgb(25,172,164)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 5
        }]
    },
    options: {
        layout: {
            padding: {
                left: 20,
                top: 0
            }
        },
        plugins: {
            legend: {
              display: true,
              position: 'right',
              labels:{
                  boxWidth: 15
              }
            }
          },
        responsive:true,
        
    }
});
// alert box

xbtn.addEventListener('click', e => {
    alertBox.classList.add('hide')
})