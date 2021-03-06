//Сайт предсказаний на JavaScript
// Сейчас мы с вами сделаем сайт, который будет выдавать предсказания. Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное число от 1 до некоторого максимального.
//
// Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать некоторое число в диве. Это число будет номером предсказания. После этого покажите пользователю предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно предсказание. То есть на один заход на сайт - одно предсказание.
//
// Продумайте, как удобнее хранить предсказания.
// Реализуйте описанный сайт.
// Сделайте так, чтобы предсказания были двух видов: хорошие и плохие. Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.

const arrOracle = [
    "У вас сегодня будет замечательный день",
    "Сегодня не ваш день, будьте осторожны в выборе дороги",
    "Сегодня вечером вас ждет приятная встреча",
    "Сегодня лучше не выходите из дома",
    "Сегодня вас ждет удача и успех во всех начинаниях",
    "\"Семь раз отмерь, один раз отрежь\", должно стать дивизом вашего дня сегодня",
    "Сегодня вас ждет успех в обучении",
    "Сегодня лучше проведите весь день на диване",
    "Успех, сегодня, на вашей стороне! Смело пускайтесь в авантюры!",
    "Сегодня вы рискуете что-нибудь забыть при выходе из дома",
    "Романтическое приключение ожидает вас сегодня вечером",
    "Сегодня будьте осторожны со случайными знакомыми",
    "Устройте сегодня себе выходной - пусть весь мир подождет",
    "Сегодня вы рискуете потерять крупную сумму денег, не делайте инвестиций",
    "Смело беритесь за самые сложные задачи. Сегодня вам все по плечу!"
];

const butStart = document.getElementById('start');
const butStop = document.getElementById('stop');
const outTimer = document.getElementById('timer');
const textOracle = document.getElementById('text');
let counterOracle;

const randomNumber = function(){
    return Math.floor(Math.random() * arrOracle.length)+1;
}

butStart.addEventListener('click', function () {
    this.classList.remove('active');
    butStop.classList.add('active');

    counterOracle = setInterval(function () {
        outTimer.innerText = randomNumber();
    }, 100);
})

butStop.addEventListener('click', function () {
    this.classList.remove('active');
    clearInterval(counterOracle);

    textOracle.innerText = arrOracle[outTimer.innerHTML - 1]
    if( outTimer.innerHTML % 2 ){
        textOracle.style.color = 'cyan'
    }else{
        textOracle.style.color = 'orangered'
    }
})