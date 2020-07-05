// Гороскоп на JavaScript
// Сейчас мы с вами реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
//
// Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день. Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.
//
// Продумайте, как вы будете хранить гороскопы в соответствии с поставленной задачей.
// Реализуйте показ гороскопа за текущий день.
// А теперь реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.

(function () {

    const horoDict = {
        "aries": {
            "symbol": "♈",
            "dateMin": "2000-03-21",
            "dateMax": "2000-04-20",
            "element": "fire",
            "stone": "bloodstone",
            "image": "&#9800;",
            "chapter": "РАГУЛЬ",
            "el": "Кастрик",
            "rock": "Кирпич",
            "today": "Ой как вам повезло, вы сегодня найдете деньги. Если вы вышлите эти деньги мне, то завтра найдете еще больше!",
            "tomorrow": "Вы не выслали мне деньги :( занчит нифига вам не светит, все пропало",
            "aftertomorrow": "Вас ждет вообще капец, если вы не пришлете мне хотябы 1000 €"
        },
        "taurus": {
            "symbol": "♉",
            "dateMin": "2000-04-21",
            "dateMax": "2000-05-21",
            "element": "earth",
            "stone": "sapphire",
            "image": "&#9801;",
            "chapter": "КОЛЬЦО НА ВЕРЕВОЧКЕ",
            "el": "Почва",
            "rock": "Земляной ком",
            "today": "У вас не пруха на целую неделю. Хотя если вы поможете кому-то материально, например мне, то все возможно и наладиться",
            "tomorrow": "Вы не помогли никому, в особенности мне, то вам типа вообще ничего не светит. Работатайте лучше и может быть удача вам усмехнется",
            "aftertomorrow": "Ну я же сказал не пруха целую неделю. Ну что может за пару дней измениться? Ну вы, блин, странный"
        },
        "gemini": {
            "symbol": "♊",
            "dateMin": "2000-05-22",
            "dateMax": "2000-06-21",
            "element": "air",
            "stone": "agate",
            "image": "&#9802;",
            "chapter": "НОСИЛКИ",
            "el": "Сквозняк",
            "rock": "Песок",
            "today": "У вас удачная неделя, ваша вторая половинка обязательно вас порадует и возможно сегодня вечером вас ждет настоящий сюрприз",
            "tomorrow": "Ну, блин, чего тебе еще нужно? Наслаждайся настоящим днем - сюрпризы кругом",
            "aftertomorrow": "Все обязательно будет хорошо, если ты будешь помнить о том, что все люди браться, все должны помогать друг-другу"
        },
        "cancer": {
            "symbol": "♋",
            "dateMin": "2000-06-22",
            "dateMax": "2000-07-22",
            "element": "water",
            "stone": "emerald",
            "image": "&#9803;",
            "chapter": "ГОЛОВАСТИКИ",
            "el": "Океан",
            "rock": "Изумруд",
            "today": "Вообще все будет окей! Всегда и на все года вперед. Везение прет из всех щелей. На работе ожидается повышение и в личных делах полное везение. Вечером дома вас будет ждать приятный сюрприз",
            "tomorrow": "С каждым днем все лучше и лучше. Друзья радуют. Любимый человек приготовил для вас приятную неожиданность.",
            "aftertomorrow": "Вас ожидает повышение на работе, Начальник обязательно отметит ваши старания и объявит благодарность. В конце недели готовтесь к путешествию"
        },
        "leo": {
            "symbol": "♌",
            "dateMin": "2000-07-23",
            "dateMax": "2000-08-22",
            "element": "fire",
            "stone": "onyx",
            "image": "&#9804;",
            "chapter": "ИГРУШКА ЙО-ЙО",
            "el": "Лапух",
            "rock": "Кирамзит",
            "today": "Братан сегодня просто не твой день, прости",
            "tomorrow": "Ну может конечно как-то все наладиться... хотя нет, сорри",
            "aftertomorrow": "Да - Да! наконец-то... Ан... нет ошибочка вышла у тебя все хреново"
        },
        "virgo": {
            "symbol": "♍",
            "dateMin": "2000-08-23",
            "dateMax": "2000-09-23",
            "element": "earth",
            "stone": "carnelian",
            "image": "&#9805;",
            "chapter": "МаК ДОНАЛЬДС",
            "el": "Болото",
            "rock": "Кусок стекла",
            "today": "Если ты это читаешь, то уже все хорошо. Значит у тебя все еще есть глаза и компьютер, а так же подключение к интернету, чё тебе еще нужно?",
            "tomorrow": "Я бы на твоем месте так далеко не загадывал...",
            "aftertomorrow": "Ну ты реально оптимист"
        },
        "libra": {
            "symbol": "♎",
            "dateMin": "2000-09-24",
            "dateMax": "2000-10-23",
            "element": "air",
            "stone": "chrysolite",
            "image": "&#9806;",
            "chapter": "ПУПЫРЫШЕК",
            "el": "Смерч",
            "rock": "Силикатный кирпич",
            "today": "Все классно! Кругом хорошие люди и доброжелательные соседи. Жизнь прекрасна и удивительна",
            "tomorrow": "Вам обязательно повезет и это везение будет исходить из кого-то в вашем ближайшем окружении",
            "aftertomorrow": "Готовьтесь к дальнему путешествию, вас ожидает интересная компания и много общения"
        },
        "scorpio": {
            "symbol": "♏",
            "dateMin": "2000-10-24",
            "dateMax": "2000-11-22",
            "element": "water",
            "stone": "beryl",
            "image": "&#9807;",
            "chapter": "МАНАМБА",
            "el": "Лужа",
            "rock": "Бетон",
            "today": "Утро будет не очень удачным - суета отнимет много времени, не рекомендую пить кофе, так как предстоит много побегать",
            "tomorrow": "Все начнет приходить в норму, домашние порадуют, родственники позвонят и предложат интересное времяпрепровождение",
            "aftertomorrow": "Советую не бухать! Лучше провести время на природе, в гамаке с хорошей книгой и бутылочкой минералки"
        },
        "sagittarius": {
            "symbol": "♐",
            "dateMin": "2000-11-23",
            "dateMax": "2000-12-21",
            "element": "fire",
            "stone": "topaz",
            "image": "&#9808;",
            "chapter": "УКАЗАТЕЛЬ",
            "el": "Спики",
            "rock": "Силикон",
            "today": "Ваще лафа! Все прет со всех сторон. Ожидается приятный вечер в уютном ресторане, не пожалейте денег на подарок любимому человеку",
            "tomorrow": "Ваши усилия будут вознаграждены но не сегодня, сегодня нужно выложиться по полной, но за то завра, все будет идти как по маслу",
            "aftertomorrow": "Следите за своей машиной, велика вероятность подхватить не приятный вирус. Автомобиль лучше оставить на платной стоянке, есть вероятность угона"
        },
        "capricorn": {
            "symbol": "♑",
            "dateMin": "2000-12-22",
            "dateMax": "2000-01-20",
            "element": "earth",
            "stone": "ruby",
            "image": "&#9809;",
            "chapter": "ВЕРЁВКА",
            "el": "Огород",
            "rock": "Рубероид",
            "today": "Ваше здоровье вас искренне порадует. С самого утра будете чувствоаать себя на 10 лет моложе. И это ощущение продлиться на целый день",
            "tomorrow": "Здоровье в порядке. Финансы - звезды улыбаются вам!",
            "aftertomorrow": "Здоровье так себе. Финансы - звезды просто ржут над вами"
        },
        "aquarius": {
            "symbol": "♒",
            "dateMin": "2000-01-21",
            "dateMax": "2000-02-19",
            "element": "air",
            "stone": "garnet",
            "image": "&#9810;",
            "chapter": "ЧЕРВЯЧКИ",
            "el": "Смерчь",
            "rock": "Гранит",
            "today": "Ваше эмоционально состояние будет целый день на высоте, если это сейчас не так, то брасай курить ставай на лыжи",
            "tomorrow": "Родители вас откровенно порадуют, приятная встреча на работе сулит долгую дружбу и возможные серьезные отношения - не упусти свой шанс придурок",
            "aftertomorrow": "Все нормалек, не расстраивайся из-за маленькой потери денег - это кто-то из тех у кого занк зодиака РАГУЛЬ найдут вои деньги и пробухают их"
        },
        "pisces": {
            "symbol": "♓",
            "dateMin": "2000-02-20",
            "dateMax": "2000-03-20",
            "element": "water",
            "stone": "amethyst",
            "image": "&#9811;",
            "chapter": "СПУТНИКОВЫЕ АНТЕНЫ",
            "el": "Речка",
            "rock": "Кремний",
            "today": "Вас ждут великие дела и пусть вас не смущает сопротивление обстоятельств из вне, к вечеру вы почувствуете себя лучше. Даже если сейчас съедите печенюшку уже почувствуете себя лучше",
            "tomorrow": "Выход из Матрицы там где и вход. Основа контроля над людьми может в ближайшее время попасть вам в руки - не упустите свой шанс",
            "aftertomorrow": "Шеф все пропало - клиен уезжает, гипс снимают, ваши усилия могут пойти прахом если не бросите бухать и курить"
        }
    }

    function animationHeader() {
        const header = document.querySelector('.durascop');
        const arrHead = ['D', 'U', 'R', 'A', 'S', 'C', 'O', 'P'];
        for (let i = 1; i <= arrHead.length; i++) {
            setTimeout(function () {
                header.innerHTML += `<span>${arrHead[i - 1]}&nbsp;</span>`
            }, 400 * i)
            if (i === arrHead.length) {
                setTimeout(function () {
                    header.innerHTML = '<span>' + header.innerText.replace(/\s/g, '') + '</span>'
                }, 450 * i)
            }
        }
    }

    animationHeader();


    document.querySelector('.goAway').onclick = () => {

        function chooseDay() {
            const dataChoose = document.querySelector('#dataChoose').value
            const dataZodiac = dataChoose.split('-');
            let zodiac = '';

            if (dataZodiac[1] === '03') {
                zodiac = +dataZodiac[2] >= 21 ? "aries" : "pisces";
            } else if (dataZodiac[1] === '04') {
                zodiac = +dataZodiac[2] >= 21 ? "taurus" : "aries";
            } else if (dataZodiac[1] === '05') {
                zodiac = +dataZodiac[2] >= 22 ? "gemini" : "taurus";
            } else if (dataZodiac[1] === '06') {
                zodiac = +dataZodiac[2] >= 22 ? "cancer" : "gemini";
            } else if (dataZodiac[1] === '07') {
                zodiac = +dataZodiac[2] >= 23 ? "leo" : "cancer";
            } else if (dataZodiac[1] === '08') {
                zodiac = +dataZodiac[2] >= 23 ? "virgo" : "leo";
            } else if (dataZodiac[1] === '09') {
                zodiac = +dataZodiac[2] >= 24 ? "libra" : "virgo";
            } else if (dataZodiac[1] === '10') {
                zodiac = +dataZodiac[2] >= 24 ? "scorpio" : "libra";
            } else if (dataZodiac[1] === '11') {
                zodiac = +dataZodiac[2] >= 23 ? "sagittarius" : "scorpio";
            } else if (dataZodiac[1] === '12') {
                zodiac = +dataZodiac[2] >= 22 ? "capricorn" : "sagittarius";
            } else if (dataZodiac[1] === '01') {
                zodiac = +dataZodiac[2] >= 21 ? "aquarius" : "capricorn";
            } else if (dataZodiac[1] === '02') {
                zodiac = +dataZodiac[2] >= 20 ? "pisces" : "aquarius";
            } else {
                zodiac = false;
            }
            return zodiac;
        }

        const zodiac = chooseDay();
        const currnt = document.querySelector('.curr');
        const selecting = document.querySelector('.output').innerHTML;


        if (!zodiac) {
            currnt.innerText = 'ВАМ БЫЛО ВЕЛЕНО ВЫБРАТЬ ДАТУ\n НУ ЧЕГО В ЭТОМ НЕПОНЯТНОГО ?'
        } else {
            currnt.innerHTML = `<div> Ваш знак ЗОДИАКА <br>${horoDict[zodiac].chapter}  ${horoDict[zodiac].image}</div><div class="elements">Ваша стихия : ${horoDict[zodiac].el}<br>Ваш камень : ${horoDict[zodiac].rock}</div>`;
            currnt.innerHTML += selecting + `<br><div class="days"></div>`;
        }

        const days = document.querySelector('.days');
        const dataPrediction = document.querySelectorAll('[name="day"]')
        const arrMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        const currentData = new Date();
        console.log(currentData.getDate())
        let temp = new Date().getDate();


        for (let i of dataPrediction) {
            currentData.setDate(temp)
            i.nextSibling.data = currentData.getDate() + '.' + arrMonth[currentData.getMonth()]
            temp++
        }

        document.querySelectorAll('[name="day"]').forEach(function (element) {
            if (element.checked) {
                days.innerHTML = horoDict[zodiac][element.value]
            }
            element.onclick = () => days.innerHTML = horoDict[zodiac][element.value]
        })


    }
})();
