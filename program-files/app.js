

const alertBox = document.querySelector('.alert-display');
const xbtn = document.querySelector('.close-alert');
const bellIcon = document.querySelector('.dropdownbtn');
const notificationDot =document.querySelector('.notification-dot');
const dropdownMenue = document.querySelector('.dropdown-content');
const topNav = document.querySelector('.top-nav');
const pageWrap = document.querySelector('.main-wrap');
const input = document.querySelector('input[type="submit"]');
const message = document.querySelector('#message');
const userName = document.querySelector('#user')
const time = document.querySelector('.time');
const chartP = document.querySelector('chart-1')

const myChart1 = document.getElementById('myChart1').getContext('2d');
// chart 1
time.addEventListener('click', e => {
    if(e.target.textContent === 'Hourly'){
        const canvas = document.createElement('canvas')
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
        })
        canvas.appendChild(chart1);
        chartP.appendChild(canvas)
    }else if(e.target.textContent === 'Daily'){
        const chart2 = new Chart(myChart1, {
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
        })
    }

})



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
})
//========DISPLAY DIFFERENT CHARTS HOURLY DAILY WEEKLY AND MONTHLY ON CLICK==========

// alert box
xbtn.addEventListener('click', e => {
    alertBox.classList.add('hide')
})


// notification and drop-down
pageWrap.addEventListener('click', e => {
    e.preventDefault()
    dropdown(e.target, bellIcon, alertBox)
    // alertBox.classList.add('hide')
    
})

const dropdown = (button, bell, alert, menue) => {
    if(button === bell || button === alert){
        notificationDot.classList.add('hide');
        dropdownMenue.style.display = "block";
    }else{
        dropdownMenue.style.display = "none";
        return dropdownMenue;
    }
}

// form functionality
const form = document.querySelector('form');

form.addEventListener('click', e => {
    e.preventDefault();
    const button = e.target;
    const li = document.createElement('li');
    dropdownMenue.appendChild(li);
    if(button === input && userName.value !== '' && message.value !== ''){
        li.textContent = 'Message Was Sent'
        message.value = '';
        userName.value = '';
        notificationDot.classList.add('show');
        
    }else if(button === input && userName.value !== '' && message.value === ''){
        li.textContent = 'Error, No message was sent, please write a message!'
        userName.value = '';
        notificationDot.classList.add('show')
    }else if(button === input && userName.value === '' && message.value !== ''){
        li.textContent = 'Error, Please enter a user name';
        message.value = '';
        notificationDot.classList.add('show')
    }else{
        li.textContent = 'Please Fill in before submit'
        notificationDot.classList.add('show')
    }

    li.addEventListener('click', e => {
        li.classList.add('hide');
    })
})


