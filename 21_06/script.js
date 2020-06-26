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
document.querySelector('.apple').hidden = true;

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

function funcClav(k) {
    document.querySelector('.apple').hidden = false;
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
                    funcClav(1)
                }else{
                    this.classList.add('active')
                    g = 1;
                    funcClav(0)
                }
            }else{
                this.classList.add('active');
            }

            if(this.title === 'lshift' || this.title === 'rshift'){
                if([...element.classList].includes('active')){
                    sh = 2;
                    funcClav(0)
                }
            }

            const str = document.querySelector('.i-11').value;

            if(this.title === 'backspace'){
                document.querySelector('.i-11').value = str.slice(0, str.length - 1)
            }

            if(this.title === 'enter'){
                document.querySelector('.i-11').value += '\n';
            }

            const condition = (this.title ===  'capslock' || this.title ===  'lshift' || this.title ===  'rshift' || this.title === 'backspace' || this.title === 'lcmd' || this.title === 'rcmd' || this.title === 'alt' || this.title === 'ctrl' || this.title === 'enter' || this.title === 'fn');

            if(g || sh > 0){
                document.querySelector('.i-11').value += condition ? '' : this.title.toUpperCase();
                sh -= 1;
                if (sh === 0 && g === 0) funcClav(1)

            }else{
                document.querySelector('.i-11').value += condition ? '' : this.title
            }
        }
    });
}

document.querySelector('.b-1').onclick = () => funcClav(1)

// Давайте реализуем калькулятор. Он будет работать как обычный классический калькулятор: у вас будет инпут, а под ним кнопочки с цифрами и знаками операций. По нажатию на цифры они должны появляться в инпуте. По нажатию на знак операции число из инпута должно исчезать. После этого при вводе следующего числа в инпут и нажатия на знак равно в инпуте должен появится результат операции.
//
// Задача
// Реализуйте описанный калькулятор.
//
// Задача
// Сделайте так, чтобы над инпутом выводились введенные числа и между ними знак операции.
//
// Задача
// Сделайте кнопку сброса, которая будет очищать инпут для ввода, а также отменять операцию, если ранее была нажата кнопка операции.
//
// Задача
// Сделайте кнопку для памяти. Пусть она запоминает результат какой-нибудь операции. Сделайте кнопку для вставки в инпут результата из памяти.

document.querySelector('#shell').hidden = true;
let mem = '';

const arr2 = ["C/Ce", "⇤", "M+/M", "±", "*", "/", "+", "-", "7", "8", "9", "(", "4", "5", "6", ")", "1", "2", "3", "=", "0", "."];

function funcCalc() {
    let out='';
    for (let i=0; i < arr2.length; i++) {
        if (arr2[i] === '⇤') {
            out += `<div class="itemKey2" onclick="del()"> ${arr2[i]}</div>`;
        } else if (arr2[i] === '='){
            out += `<div class="itemKey2 equal" onclick="equal()">${arr2[i]}</div>`;
        } else if (arr2[i] === '0'){
            out += `<div class="itemKey2 zero" onclick="insert('${arr2[i]}')">${arr2[i]}</div>`;
        } else if (arr2[i] === 'C/Ce'){
            out += `<div class="itemKey2 first" onclick="clean()">${arr2[i]}</div>`;
        } else if (arr2[i] === '±'){
            out += `<div class="itemKey2" onclick="plusMinus()">${arr2[i]}</div>`;
        } else if (arr2[i] === "M+/M"){
            out += `<div class="itemKey2" onclick="memeory()" title="memo">${arr2[i]}</div>`;
        } else {
            out += `<div class="itemKey2" onclick="insert('${arr2[i]}')">${arr2[i]}</div>`;
        }
    }
    document.querySelector('.calculator').innerHTML = out;
}


function insert(num) {
    let str = document.querySelector('.out-2').innerText;
    if (str.trim() === '0'){
        document.querySelector('.out-2').innerText = '';
    }
    document.querySelector('.out-2').innerText += num;

    if ( Number(num) || num === '0' ){
        if(document.querySelector('.i-21').value === '0'){
            document.querySelector('.i-21').value = '';
        }
        document.querySelector('.i-21').value += num;
    } else if( num === '.') {
        document.querySelector('.i-21').value = '0.';
    } else {
        document.querySelector('.i-21').value = '';
    }
}

function del(){
    let str = document.querySelector('.out-2').innerText;
    document.querySelector('.out-2').innerText = str.slice(0, str.length - 1);
    let inp = document.querySelector('.i-21').value;
    document.querySelector('.i-21').value = inp.slice(0, inp.length - 1);
}

function clean(){
    const arr = ["+", "-", "/", "*"];
    let str = document.querySelector('.out-2').innerText;
    if ( arr.includes(str.slice(str.length-1)) ){
        document.querySelector('.out-2').innerText = str.slice(0, str.length - 1)
    }else{
        document.querySelector('.out-2').innerHTML = '&nbsp;';
        document.querySelector('.i-21').value = 0;
    }
}

function equal(){
    let str = document.querySelector('.out-2').innerText;
    if(str){
        if (eval(str) === undefined){
            document.querySelector('.out-2').innerHTML = '&nbsp;';
            document.querySelector('.i-21').value = 0;
        }else{
            document.querySelector('.out-2').innerText = eval(str);
            document.querySelector('.i-21').value = eval(str)
        }
    }else{
        document.querySelector('.i-21').value = 0;
    }
}

function plusMinus(){
    let num = Number( document.querySelector('.i-21').value )
    document.querySelector('.i-21').value = num * -1;
    let str = document.querySelector('.out-2').innerText;
    let inp = (num * -1) > 0 ? ("+" + String(num * -1)) : String(num * -1)
    if(Math.abs(Number(str)) === Math.abs(Number(inp))){
        document.querySelector('.out-2').innerText = document.querySelector('.i-21').value
    }else{
        document.querySelector('.out-2').innerText = str.slice( 0, (str.length - inp.length) ) + inp;
    }
}

function memeory(){
    let inp = document.querySelector('.i-21').value;
    if ((inp !== '' || inp !== '0') && mem === ''){
        mem = inp;
        document.querySelector('.itemKey2[title="memo"]').classList.add('active');
    }else{
        if(inp === '' || inp === '0'){
            document.querySelector('.i-21').value = mem;
            document.querySelector('.out-2').innerText += mem;
            mem = '';
            document.querySelector('.itemKey2[title="memo"]').classList.remove('active');
        }else{
            document.querySelector('.i-21').value = '';
        }
    }
}

document.querySelector('.b-2').onclick = () =>{
    document.querySelector('#shell').hidden = false;
    funcCalc();
}