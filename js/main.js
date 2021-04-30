
window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    "use strict";

    //Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector("#timer-hours"),
            timerMinutes = document.querySelector("#timer-minutes"),
            timerSeconds = document.querySelector("#timer-seconds");

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        function updateClock() {
            const timer = getTimeRemaining();

            function addZero(value) {
                if (value < 10) {
                    value = `0${value}`;
                }
                return value;
            }

            let interval;

            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining > 0) {
                interval = setInterval(updateClock, 1000);
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent  = '00';
                timerSeconds.textContent = '00';
                clearInterval(interval);
            }
        }
        updateClock();

    }
    countTimer('31 april 2021');

});
