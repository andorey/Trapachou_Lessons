// Гороскоп на JavaScript
// Сейчас мы с вами реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
//
// Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день. Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.
//
// Продумайте, как вы будете хранить гороскопы в соответствии с поставленной задачей.
// Реализуйте показ гороскопа за текущий день.
// А теперь реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.

const horoArr = {
    "aries": {
        "symbol": "♈",
        "dateMin": "2000-03-21",
        "dateMax": "2000-04-20"
    },
    "taurus": {
        "symbol": "♉",
        "dateMin": "2000-04-21",
        "dateMax": "2000-05-21"
    },
    "gemini": {
        "symbol": "♊",
        "dateMin": "2000-05-22",
        "dateMax": "2000-06-21"
    },
    "cancer": {
        "symbol": "♋",
        "dateMin": "2000-06-22",
        "dateMax": "2000-07-22"
    },
    "leo": {
        "symbol": "♌",
        "dateMin": "2000-07-23",
        "dateMax": "2000-08-22"
    },
    "virgo": {
        "symbol": "♍",
        "dateMin": "2000-08-23",
        "dateMax": "2000-09-23"
    },
    "libra": {
        "symbol": "♎",
        "dateMin": "2000-09-24",
        "dateMax": "2000-10-23"
    },
    "scorpio": {
        "symbol": "♏",
        "dateMin": "2000-10-24",
        "dateMax": "2000-11-22"
    },
    "sagittarius": {
        "symbol": "♐",
        "dateMin": "2000-11-23",
        "dateMax": "2000-12-21"
    },
    "capricorn": {
        "symbol": "♑",
        "dateMin": "2000-12-22",
        "dateMax": "2000-01-20"
    },
    "aquarius": {
        "symbol": "♒",
        "dateMin": "2000-01-21",
        "dateMax": "2000-02-19"
    },
    "pisces": {
        "symbol": "♓",
        "dateMin": "2000-02-20",
        "dateMax": "2000-03-20"
    }
}

const stouns = {
    "aries": {
        "name": "Aries",
        "element": "fire",
        "stone": "bloodstone"
    },
    "taurus": {
        "name": "Taurus",
        "element": "earth",
        "stone": "sapphire"
    },
    "gemini": {
        "name": "Gemini",
        "element": "air",
        "stone": "agate"
    },
    "cancer": {
        "name": "Cancer",
        "element": "water",
        "stone": "emerald"
    },
    "leo": {
        "name": "Leo",
        "element": "fire",
        "stone": "onyx"
    },
    "virgo": {
        "name": "Virgo",
        "element": "earth",
        "stone": "carnelian"
    },
    "libra": {
        "name": "Libra",
        "element": "air",
        "stone": "chrysolite"
    },
    "scorpio": {
        "name": "Scorpio",
        "element": "water",
        "stone": "beryl"
    },
    "sagittarius": {
        "name": "Sagittarius",
        "element": "fire",
        "stone": "topaz"
    },
    "capricorn": {
        "name": "Capricorn",
        "element": "earth",
        "stone": "ruby"
    },
    "aquarius": {
        "name": "Aquarius",
        "element": "air",
        "stone": "garnet"
    },
    "pisces": {
        "name": "Pisces",
        "element": "water",
        "stone": "amethyst"
    }
}

const signs = [{
    number: 1,
    name: "Aries",
    symbol: "♈",
    imageUrl: this.svgImagePath + "aries.svg",
    element: "fire"
}, {
    number: 2,
    name: "Taurus",
    symbol: "♉",
    imageUrl: this.svgImagePath + "taurus.svg",
    element: "earth"
}, {
    number: 3,
    name: "Gemini",
    symbol: "♊",
    imageUrl: this.svgImagePath + "gemini.svg",
    element: "wind"
}, {
    number: 4,
    name: "Cancer",
    symbol: "♋",
    imageUrl: this.svgImagePath + "cancer.svg",
    element: "water"
}, {
    number: 5,
    name: "Leo",
    symbol: "♌",
    imageUrl: this.svgImagePath + "leo.svg",
    element: "fire"
}, {
    number: 6,
    name: "Virgo",
    symbol: "♍",
    imageUrl: this.svgImagePath + "virgo.svg",
    element: "earth"
}, {
    number: 7,
    name: "Libra",
    symbol: "♎",
    imageUrl: this.svgImagePath + "libra.svg",
    element: "wind"
}, {
    number: 8,
    name: "Scorpio",
    symbol: "♏",
    imageUrl: this.svgImagePath + "scorpio.svg",
    element: "water"
}, {
    number: 9,
    name: "Sagittarius",
    symbol: "♐",
    imageUrl: this.svgImagePath + "sagittarius.svg",
    element: "fire"
}, {
    number: 10,
    name: "Capricorn",
    symbol: "♑",
    imageUrl: this.svgImagePath + "capricorn.svg",
    element: "earth"
}, {
    number: 11,
    name: "Aquarius",
    symbol: "♒",
    imageUrl: this.svgImagePath + "aquarius.svg",
    element: "wind"
}, {
    number: 12,
    name: "Pisces",
    symbol: "♓",
    imageUrl: this.svgImagePath + "pisces.svg",
    element: "water"
}];