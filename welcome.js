//set DOM elements
let time, greeting, name, goal;
time = document.getElementById('time');
greeting = document.getElementById('greeting');
name = document.getElementById('name');
goal = document.getElementById('goal');

//display time
function showTime(){
    let today, hr, min, sec, amOrPm;
    today = new Date();
    hr = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();

    let amOrPm = hr >= 12 ? 'PM' : 'AM';

    hr = hr % 12 || 12;

    time.innerHTML = `${hr}<span>:</span>${min}<span>:</span>${sec}`;
    setTimeout(showTime, 1000);
}

//adding Zeros for seconds timer
// function addZero(n) {
//     return (parseInt(n, 10) < 10 ? '0' : '') + n;
// }

//Execute
showTime();