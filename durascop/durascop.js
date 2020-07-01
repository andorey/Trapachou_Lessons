// Гороскоп на JavaScript
// Сейчас мы с вами реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
//
// Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день. Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.
//
// Продумайте, как вы будете хранить гороскопы в соответствии с поставленной задачей.
// Реализуйте показ гороскопа за текущий день.
// А теперь реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.

const horoDict = {
    "aries": {
        "symbol": "♈",
        "dateMin": "2000-03-21",
        "dateMax": "2000-04-20",
        "element": "fire",
        "stone": "bloodstone"
    },
    "taurus": {
        "symbol": "♉",
        "dateMin": "2000-04-21",
        "dateMax": "2000-05-21",
        "element": "earth",
        "stone": "sapphire"
    },
    "gemini": {
        "symbol": "♊",
        "dateMin": "2000-05-22",
        "dateMax": "2000-06-21",
        "element": "air",
        "stone": "agate"
    },
    "cancer": {
        "symbol": "♋",
        "dateMin": "2000-06-22",
        "dateMax": "2000-07-22",
        "element": "water",
        "stone": "emerald"
    },
    "leo": {
        "symbol": "♌",
        "dateMin": "2000-07-23",
        "dateMax": "2000-08-22",
        "element": "fire",
        "stone": "onyx"
    },
    "virgo": {
        "symbol": "♍",
        "dateMin": "2000-08-23",
        "dateMax": "2000-09-23",
        "element": "earth",
        "stone": "carnelian"
    },
    "libra": {
        "symbol": "♎",
        "dateMin": "2000-09-24",
        "dateMax": "2000-10-23",
        "element": "air",
        "stone": "chrysolite"
    },
    "scorpio": {
        "symbol": "♏",
        "dateMin": "2000-10-24",
        "dateMax": "2000-11-22",
        "element": "water",
        "stone": "beryl"
    },
    "sagittarius": {
        "symbol": "♐",
        "dateMin": "2000-11-23",
        "dateMax": "2000-12-21",
        "element": "fire",
        "stone": "topaz"
    },
    "capricorn": {
        "symbol": "♑",
        "dateMin": "2000-12-22",
        "dateMax": "2000-01-20",
        "element": "earth",
        "stone": "ruby"
    },
    "aquarius": {
        "symbol": "♒",
        "dateMin": "2000-01-21",
        "dateMax": "2000-02-19",
        "element": "air",
        "stone": "garnet"
    },
    "pisces": {
        "symbol": "♓",
        "dateMin": "2000-02-20",
        "dateMax": "2000-03-20",
        "element": "water",
        "stone": "amethyst"
    }
}


function loose(x){
    const dur = document.querySelector('.durascop');
    dur.innerHTML += `<span>${x}&nbsp;</span>`;
}

function looseClean(){
    const dur = document.querySelector('.durascop').innerText;
    document.querySelector('.durascop').innerHTML = '<span>' + dur.replace(/\s/g, '') + '</span>';
}

setTimeout('loose("DU")', 500);
setTimeout('loose("RA")', 1700);
setTimeout('loose("S")', 2200);
setTimeout('loose("COP")', 2800);
setTimeout('looseClean()', 3000);

document.querySelector('.goAway').onclick = () => {
    const dataChoose = document.querySelector('#dataChoose').value
    const dCh = dataChoose.split('-');
    let zodiac = '';
    if (dCh[1] === '03'){
        zodiac = +dCh[2] >= 21 ? "aries" : "pisces";
    } else if (dCh[1] === '04'){
        zodiac = +dCh[2] >= 21 ? "taurus" : "aries";
    } else if (dCh[1] === '05'){
        zodiac = +dCh[2] >= 22 ? "gemini" : "taurus";
    } else if (dCh[1] === '06'){
        zodiac = +dCh[2] >= 22 ? "cancer" : "gemini";
    } else if (dCh[1] === '07'){
        zodiac = +dCh[2] >= 23 ? "leo" : "cancer";
    } else if (dCh[1] === '08'){
        zodiac = +dCh[2] >= 23 ? "virgo" : "leo";
    } else if (dCh[1] === '09'){
        zodiac = +dCh[2] >= 24 ? "libra" : "virgo";
    } else if (dCh[1] === '10'){
        zodiac = +dCh[2] >= 24 ? "scorpio" : "libra";
    } else if (dCh[1] === '11'){
        zodiac = +dCh[2] >= 23 ? "sagittarius" : "scorpio";
    } else if (dCh[1] === '12'){
        zodiac = +dCh[2] >= 22 ? "capricorn" : "sagittarius";
    } else if (dCh[1] === '01'){
        zodiac = +dCh[2] >= 21 ? "aquarius" : "capricorn";
    }else if (dCh[1] === '02'){
        zodiac = +dCh[2] >= 20 ? "pisces" : "aquarius";
    }else{
        document.querySelector('.curr').innerText = 'ВАМ БЫЛО ВЕЛЕНО ВЫБРАТЬ ДАТУ\n ЧТО ЧТО В ЭТОМ НЕПОНЯТНОГО???'
    }
    document.querySelector('.curr').innerText = zodiac;
}