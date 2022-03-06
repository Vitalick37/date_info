function getDayInfo(date) {
    let arrayString = date.split('.');
    let dataDate = new Date(`${arrayString[2]}-${arrayString[1]}-${arrayString[0]}`);
    let number = dataDate.getDate();
    let day = dataDate.getDay();
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let month = dataDate.getMonth();
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let year = dataDate.getFullYear();

    function getWeek() {
        let numberWeek;
        let numberDay;

        if (day == 0) {
            numberDay = 7;
        } else {
            numberDay = day;
        };

        let count = number - numberDay;

        if (count <= 0) {
            numberWeek = 1;
        } else {
            numberWeek = Math.ceil(count / 7) + 1;
        };

        return numberWeek
    };

    let week = getWeek();

    return `${days[day]}, ${week} неделя ${months[month]} ${year} года`
};
let dateInfo = getDayInfo('26.03.2022');

document.body.insertAdjacentHTML('afterbegin', `<di>${dateInfo}</div>`);
console.log(dateInfo);