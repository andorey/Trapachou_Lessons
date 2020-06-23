// Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.
//
// Задача
// Реализуйте описанную клавиатуру. Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.
//
// Задача
// Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так, чтобы все буквы переводились в верхний регистр.

const arr11 = [["±", "§"], ["!", "1"], ["@", "2"], ["#", "3"], ["$", "4"], ["%", "5"], ["^", "6"], ["&", "7"], ["*", "8"], ["(", "9"], [")", "0"], ["_", "-"], ["+", "="], ["Backspace", "Backspace"], ["Tab", "Tab"], ["Q", "q"], ["W", "w"], ["E", "e"], ["R", "r"], ["T", "t"], ["Y", "y"], ["U", "u"], ["I", "i"], ["O", "o"], ["P", "p"], ["{", "["], ["}", "]"], ["Enter", "Enter"], ["CapsLock", "CapsLock"], ["A", "a"], ["S", "s"], ["D", "d"], ["F", "f"], ["G", "g"], ["H", "h"], ["J", "J"], ["K", "k"], ["L", "l"], [":", ";" ], ['"', "'"], ["|", "\\"], ["LShift", "LShift"], ["`", "~"], ["Z", "z"], ["X", "x"], ["C", "c"], ["V", "v"], ["B", "b"], ["N", "n"], ["M", "m"], ["<", ","], [">", "."], ["?", "/"], ["RShift", "RShift"],["Fn", "Fn"], ["Ctrl", "Ctrl"], ["Alt", "Alt"], ["Lcmd", "Lcmd"], [" ", ' '], ["Rcmd", "Rcmd"], ["Alt", "Alt"]];

let g = 0;
let sh = 0

function t11(arr11, k) {
    const arr = ["Backspace", "Enter", "LShift", "Lcmd", "Rcmd"];
    let out='';
    for (let i=0; i < arr11.length; i++){
        if(i === 14 || i === 28 || i === 41 || i === 54){
            out += '<div class="clearfix"></div>';
        }

        if (arr.includes(arr11[i][k])){
            out += `<div class="itemKey big" title="${arr11[i][k].toLowerCase()}" align="center"> ${arr11[i][k]}</div>`;
        }else if(arr11[i][k] === ' ' ){
            out += `<div class="itemKey space" title="${arr11[i][k].toLowerCase()}" align="center">${arr11[i][k]}</div>`;
        }else if(arr11[i][k] === 'Tab') {
            out += `<div class="itemKey big" title="    " align="center">${arr11[i][k]}</div>`;
        }else if(arr11[i][k] === "RShift" || arr11[i][k] === "CapsLock"){
            out += `<div class="itemKey B" title="${arr11[i][k].toLowerCase()}" align="center">${arr11[i][k]}</div>`
        }else{
            out += `<div class="itemKey" title="${arr11[i][k].toLowerCase()}" align="center">${arr11[i][k]}</div>`;
        }
    }
    document.querySelector('#keyboard').innerHTML = out;
}

function fff(k) {

    t11(arr11, k);

    if (sh > 0){
        document.querySelector('.itemKey[title="lshift"]').classList.add('active');
        document.querySelector('.itemKey[title="rshift"]').classList.add('active');
    }
    if (g) document.querySelector('.itemKey[title="capslock"]').classList.add('active')


    document.querySelector('.i-11').onkeydown = function (event) {
        if (event.code === "OSLeft"){
            document.querySelector(`#keyboard .itemKey[title="lcmd"]`).classList.add('active');
        }else if(event.code === "OSRight" ){
            document.querySelector(`#keyboard .itemKey[title="rcmd"]`).classList.add('active');
        }else if(event.code === "ShiftLeft") {
            document.querySelector(`#keyboard .itemKey[title="lshift"]`).classList.add('active');
        }else if(event.code === "ShiftRight") {
            document.querySelector(`#keyboard .itemKey[title="rshift"]`).classList.add('active');
        }else{
            document.querySelector(`#keyboard .itemKey[title="${event.key.toLowerCase()}"]`).classList.add('active');
        }
    };

    document.querySelector('.i-11').onkeyup = function (event) {
        const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        document.querySelectorAll('#keyboard .itemKey').forEach(function(element){
            element.classList.remove('active');
        });
        if (abc.includes(event.key) && event.shiftKey !== true){
            document.querySelector('.itemKey[title="capslock"]').classList = 'itemKey B active';
        }
    };

    document.querySelectorAll('#keyboard .itemKey').forEach(function(element){
        element.onclick = function () {
            document.querySelectorAll('#keyboard .itemKey').forEach(function(element){
                if (element.title !== 'capslock') element.classList.remove('active');
            });

            if (this.title === 'capslock'){
                if (g){
                    this.classList.remove('active')
                    g = 0
                    fff(1)
                }else{
                    this.classList.add('active')
                    g = 1;
                    fff(0)
                }
            }else{
                this.classList.add('active');
            }

            if(this.title === 'lshift' || this.title === 'rshift'){
                if([...element.classList].includes('active')){
                    sh = 2;
                    fff(0)
                }
            }

            const str = document.querySelector('.i-11').value;

            if(this.title === 'backspace'){
                document.querySelector('.i-11').value = str.slice(0, str.length - 1)
            }

            if(this.title === 'enter'){
                document.querySelector('.i-11').value += '\n';
            }

            if(g || sh > 0){
                document.querySelector('.i-11').value += (this.title ===  'capslock' || this.title ===  'lshift' || this.title ===  'rshift' || this.title === 'backspace' || this.title === 'lcmd' || this.title === 'rcmd' || this.title === 'alt' || this.title === 'ctrl' || this.title === 'enter') ? '' : this.title.toUpperCase();
                sh -= 1;
                if (sh === 0) fff(1)
            }else{
                document.querySelector('.i-11').value += (this.title ===  'capslock' || this.title ===  'lshift' || this.title ===  'rshift' || this.title === 'backspace' || this.title === 'lcmd' || this.title === 'rcmd' || this.title === 'alt' || this.title === 'ctrl' || this.title === 'enter') ? '' : this.title
            }
        }
    });
}

document.querySelector('.b-1').onclick = () => fff(1)