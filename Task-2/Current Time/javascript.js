let btnShow = document.querySelector('button');
let output = document.querySelector('h1');

btnShow.addEventListener('click',() => {
let today = new Date();

    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());

    let current_time = `${hours}:${minutes}:${seconds}`;
    output.innerHTML = current_time;

});

function addZero(num){
    return num < 10 ? `0${num}`:num;
}