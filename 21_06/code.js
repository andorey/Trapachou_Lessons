// Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.
//
// Задача
// Реализуйте описанную клавиатуру. Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.
//
// Задача
// Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так, чтобы все буквы переводились в верхний регистр.

const arr11 = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "Enter", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "|", "LShift", "`", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "RShift","Fn", "Ctrl", "Alt", "Lcmd", " ", "Rcmd", "Alt"];

let k = 0;

function t11() {
    const arr = ["Backspace", "Enter", "LShift", "Lcmd", "Rcmd"];
    let out='';
    for (let i=0; i < arr11.length; i++){
        if(i === 14 || i === 28 || i === 41 || i === 54){
            out += '<div class="clearfix"></div>';
        }

        if (arr.includes(arr11[i])){
            out += `<div class="itemKey big" title="${arr11[i].toLowerCase()}" align="center"> ${arr11[i]}</div>`;
        }else if(arr11[i] === ' ' ){
            out += `<div class="itemKey space" title="${arr11[i].toLowerCase()}" align="center">${arr11[i]}</div>`;
        }else if(arr11[i] === 'Tab') {
            out += `<div class="itemKey big" title="    " align="center">${arr11[i]}</div>`;
        }else if(arr11[i] === "RShift" || arr11[i] === "CapsLock"){
            out += `<div class="itemKey B" title="${arr11[i].toLowerCase()}" align="center">${arr11[i]}</div>`
        }else{
            out += `<div class="itemKey" title="${arr11[i].toLowerCase()}" align="center">${arr11[i]}</div>`;
        }
    }
    document.querySelector('#keyboard').innerHTML = out;
}

document.querySelector('.b-1').onclick = () => {
    t11();

    document.querySelector('.i-11').onkeydown = function (event) {
        console.log(event)
        if (event.code === "OSLeft"){
            document.querySelector(`#keyboard .itemKey[title="lcmd"]`).classList.add('active');
        }else if(event.code === "OSRight" ){
            document.querySelector(`#keyboard .itemKey[title="rcmd"]`).classList.add('active');
        }else{
            document.querySelector(`#keyboard .itemKey[title="${event.key.toLowerCase()}"]`).classList.add('active');
            console.log(event)
        }
    };

    document.querySelector('.i-11').onkeyup = function (event) {
        const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        document.querySelectorAll('#keyboard .itemKey').forEach(function(element){
            element.classList.remove('active')
        });
        if (abc.includes(event.key)){
            document.querySelector('.itemKey[title="capslock"]').className = 'itemKey B active';
        }
    };

    document.querySelectorAll('#keyboard .itemKey').forEach(function(element){
        element.onclick = function (event) {

            document.querySelectorAll('#keyboard .itemKey').forEach(function(element){
                if (element.title !== 'capslock') element.classList.remove('active')

                if(element.title === "lshift" || element.title === "rshift"){
                    if([...element.classList].includes('active')){
                        document.querySelector('.i-11').value += (element.title ===  'capslock' || element.title ===  'lshift' || element.title ===  'rshift') ? '' : element.title.toUpperCase();
                        element.classList.remove('active')
                    }
                }

            });
            if (this.title === 'capslock'){
                if ([...this.classList].includes('active')){
                    element.classList.remove('active')
                    k = 0
                }else{
                    element.classList.add('active')
                    k = 1
                }
            }else{
                this.classList.add('active');
            }

            if(k){
                document.querySelector('.i-11').value += (this.title ===  'capslock' || this.title ===  'lshift' || this.title ===  'rshift') ? '' : this.title.toUpperCase()
            }else{
                document.querySelector('.i-11').value += (this.title ===  'capslock' || this.title ===  'lshift' || this.title ===  'rshift') ? '' : this.title
            }
        }
    });
}



