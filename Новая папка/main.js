function displayDateInfo() {
// eslint-disable-next-line strict
    'use strict';

    const show = document.querySelector('div');

    function getFullData() {
        const date = new Date();
        const hours = date.getHours(),
            dayOfWeek = date.getDay(),
            time = date.toLocaleTimeString('en'),
            dateNow = date.getTime(),
            dateStop = new Date('1 january 2022'),
            daysTillNewYear = Math.floor(((dateStop - dateNow) / 1000) / 60 / 60 / 24);
        return {
            dayOfWeek,
            hours,
            time,
            daysTillNewYear
        };
    }

    console.log(getFullData());

    function sayHi() {
        const data = getFullData();
        let hours;
        const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        if (data.hours > 8 && data.hours < 11) {
            hours = 'Добрoe утро';
        } else if (data.hours < 17) {
            hours = 'Добрый день';
        } else if (data.hours < 23) {
            hours = 'Добрый вечер';
        } else if (data.hours > 23 && data.hours < 9) {
            hours = 'Доброй ночи';
        }
        show.innerHTML = `<p>${hours}</p>
            <p>Сегодня: ${weekDay[data.dayOfWeek]}</p>
            <p>Текущее время: ${data.time}</p>
            <p>До нового года осталось ${data.daysTillNewYear}</p>`;
    }

    sayHi();
}
displayDateInfo();

