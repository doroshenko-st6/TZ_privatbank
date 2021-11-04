'use srtict'

const clock = document.querySelector('#clock');
const day = document.querySelector('#day');
const week = document.querySelector('#week');

setInterval(function() {

    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let mounth = date.getDay();

    if (hour < 10) {
        hour = '0'+ hour;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (mounth < 10) {
        mounth = '0' + mounth;
    }

    function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

    clock.innerHTML = `${hour}:${min}`;
    day.innerHTML = `${mounth}`;
    week.innerHTML = `${getWeekDay(date)}`;

}, 100);