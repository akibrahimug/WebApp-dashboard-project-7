

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
const chart1Wrap = document.querySelector('chart-1');
const overlayText = document.getElementById('text');


// chart 1
const myChart1 = document.getElementById('myChart1').getContext('2d');

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

// hourly
const updateByHour = () => {
    chart1.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500];
    chart1.update()
}
// daily
const updateByDay = () => {
    chart1.data.datasets[0].data = [1000, 1250, 1000, 2000, 1500, 2750, 1250, 10000, 8050, 6000, 8000];
    chart1.update();
}
// weekly
const updateByWeek = () => {
    chart1.data.datasets[0].data = [7000, 3250, 1000, 2000, 1500, 3750, 9250, 6000, 8050, 6000, 8000];
    chart1.update();
}
// monthly
const updateByMonth = () => {
    chart1.data.datasets[0].data = [10000, 7000, 9000, 4000, 10000, 9750, 9250, 6000, 8050, 18000, 20000];
    chart1.update();
}
time.addEventListener('click', e => {
    const button = e.target;
    if(button.textContent === 'Hourly'){
        updateByHour();
    }else if(button.textContent === 'Daily'){
        updateByDay();
    }else if(button.textContent === 'Weekly'){
        updateByWeek();
    }else if(button.textContent === 'Monthly'){
        updateByMonth();}
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


// alert box
xbtn.addEventListener('click', e => {
    alertBox.classList.add('hide')
    notificationDot.classList.add('hide')
})


// notification and drop-down
pageWrap.addEventListener('click', e => {
    dropdown(e.target, alertBox)
    if(e.target === bellIcon){
        notificationDot.style.display = 'none'
        for(let i = 1; i <= 2; i++){
            on('You have unread messages');
        }
        
    }else{
        notificationDot.style.display = 'block';
    }
    if(e.target ===  document.getElementById("overlay")){
        off()
    }
    
})
for(let i = 1; i <= 2; i++){
    const li = document.createElement('li');
    li.textContent = `Hi there, what are you doing this weekend`;
    if(i === 2){
        li.textContent = `Yes i got your message. is it all good now!`;
    }
    dropdownMenue.appendChild(li);
}


const dropdown = (button, alert) => {
    if(button === alert){
        dropdownMenue.style.display = "block";
    }else{
        dropdownMenue.style.display = "none";
        return dropdownMenue;
    }
}

// form functionality
const form = document.querySelector('form');
const parah = document.createElement('p');
overlayText.appendChild(parah);
const on = (messages) => {
    document.getElementById("overlay").style.display = "block";
    parah.textContent = messages;
    message.value = '';
    userName.value = '';
  }
const off = () => {
    document.getElementById("overlay").style.display = "none";
  }
form.addEventListener('submit', e => {
    e.preventDefault();
    const button = e.target;
    if(userName.value !== '' && message.value !== ''){
       on("Message was sent")
    }else if(userName.value !== '' && message.value === ''){
        on('Error, please write a message!')
    }else if(userName.value === '' && message.value !== ''){
        on('Error, Please enter a user name')
    }else{
        on('Please Fill in the form')
    }
})
// autocomplete functionality
const userNames = ['Dan Oliver', 'Dawn Wood', 'Dale Bryd', 'Victoria Chambers'];

const autocomplete = (inp, arr) => {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
       let a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    const addActive = x => {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    const removeActive = x => {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    const closeAllLists = elmnt => {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      let x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", e => {
      closeAllLists(e.target);
  });
  }
  autocomplete(document.getElementById("user"), userNames);


// localStorage
const email = document.getElementById('email-notification');
const publicProfile = document.querySelector('.toggler-2 input');
const timezone = document.getElementById('time-zone');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel') 

save.addEventListener('click', e => {
    const key1 = email.checked;
    const key2 = publicProfile.checked
    localStorage.setItem("email", key1);
    localStorage.setItem("publicProfile", key2);
    localStorage.setItem("timezone", timezone.value)
})

cancel.addEventListener("click", () => {
    email.checked = false;
    publicProfile.checked = false;
    timezone.value = 'select';
    localStorage.clear();
    localStorage.setItem(timezone, timezone.value)
  });
  

  let emailChecked = JSON.parse(localStorage.getItem("email"));
  email.checked = emailChecked;

  
  let profileChecked = JSON.parse(localStorage.getItem("publicProfile"));
  publicProfile.checked = profileChecked;
  
  let timezoneSelected = localStorage.getItem("timezone");
  timezone.value = timezoneSelected;
  
