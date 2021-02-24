// Задача
// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

function squareCalculate(){
    const x1 = document.querySelector('.i-11').value;
    const perimeter = x1 * 4 + ' cm ';
    const area = x1 * x1 + ' cm<sup>2</sup>';

    document.querySelector('.out-1').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Perimeter : ${perimeter}, &nbsp;&nbsp;Area : ${area}`;
}

document.querySelector('.b-1').onclick = squareCalculate;


// Задача
// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

function rectangleCalfulate(){
    const x2 = document.querySelector('.i-21').value;
    const y2 = document.querySelector('.i-22').value;

    const perimeter = Number(x2) * 2 + Number(y2) * 2 + ' cm ';
    const area = x2 * y2 + ' cm<sup>2</sup>';

    document.querySelector('.out-2').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Perimeter : ${perimeter}, &nbsp;&nbsp;Area : ${area}`;
}
document.querySelector('.b-2').onclick = rectangleCalfulate;


// Задача
// Сделайте калькулятор, который будет находить площадь круга и длину окружности.

function circleCalfulate(){
    const x3 = document.querySelector('.i-31').value;
    const circumFerence = (2 * x3 * Math.PI).toFixed(2) + ' cm ';
    const area = (x3 * x3 * Math.PI).toFixed(2) + ' cm<sup>2</sup>';

    return document.querySelector('.out-3').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CircumFerence : ${circumFerence}, &nbsp;&nbsp;Area : ${area}`;
}

document.querySelector('.b-3').onclick = circleCalfulate;


// Задача
// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

function triangleCalfulate(){
    const x4 = document.querySelector('.i-41').value;
    const y4 = document.querySelector('.i-42').value;
    const z4 = document.querySelector('.i-43').value;

    const perimeter = Number(x4) + Number(y4)  + Number(z4) + ' cm ';
    const s = (Number(x4) + Number(y4)  + Number(z4)) / 2;
    const area = Math.sqrt( s * (s - Number(x4)) * (s - Number(y4))  * (s - Number(z4))).toFixed(2) + ' cm<sup>2</sup>';

    document.querySelector('.out-4').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Perimeter : ${perimeter}, &nbsp;&nbsp;Area : ${area}`;
}

document.querySelector('.b-4').onclick = () => triangleCalfulate()


//Задача
// Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.
const a5 = document.querySelector('.i-51');
const b5 = document.querySelector('.i-52');
const c5 = document.querySelector('.i-53');

a5.oninput = () => document.querySelector(".quadraticA").innerHTML = Number(a5.value) > 0 ?  a5.value : ' - ' + (-Number(a5.value));
b5.oninput = () => document.querySelector(".quadraticB").innerHTML = Number(b5.value) > 0 ? ' + '+ b5.value : ' - ' + (-Number(b5.value));
c5.oninput = () => document.querySelector(".quadraticC").innerHTML = Number(c5.value) > 0 ? ' + '+ c5.value : ' - ' + (-Number(c5.value));

function quadratic(){
    const a5 = document.querySelector('.i-51');
    const b5 = document.querySelector('.i-52');
    const c5 = document.querySelector('.i-53');

    const a51 = Number(a5.value), b51 = Number(b5.value), c51 = Number(c5.value);
    const out5 = document.querySelector('.out-5');

    const D = b51 * b51 - 4 * a51 * c51;
    let out = '';

    if (D > 0) {
        out = `(D > 0);&nbsp;&nbsp;&nbsp; 
              x<sub>1</sub> = ${((-b51 + Math.sqrt(D)) / (2 * a51)).toFixed(2)};&nbsp;&nbsp;
              x<sub>2</sub> = ${((-b51 - Math.sqrt(D)) / (2 * a51)).toFixed(2)}`;
    }else if(D === 0){
        out = `(D = 0);&nbsp;&nbsp;&nbsp; 
              x = ${(-b51 / (2 * a51)).toFixed(2)}`;
    }else{
        out = '(D < 0); No roots!';
    }
    out5.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + out;
}

document.querySelector('.b-5').onclick = quadratic;


// Задача
// Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.

function pythagoreanTriple() {
    const a6 = document.querySelector('.i-61').value;
    const b6 = document.querySelector('.i-62').value;
    const c6 = document.querySelector('.i-63').value;

    const arr = [Number(a6), Number(b6), Number(c6)].sort((a,b)=> a - b);
    const [x, y, z] = arr;
    let out = '';

    if((z * z) === (y * y) +(x * x)){
        out = `${x}<sup>2</sup> + ${y}<sup>2</sup> = ${z}<sup>2</sup> - is Pythagorean Triple`;
    }else{
        out = `${x}, ${y}, ${z} - are not Pythagorean Triple`;
    }

    document.querySelector('.out-6').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + out;
}

document.querySelector('.b-6').onclick = pythagoreanTriple;


// Задача
// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.

function divider() {
    const num = document.querySelector('.i-7').value;
    const out = [];
    for (let i = 1; i <= num; i++){
        if ( num % i === 0 ){ out.push(i) }
    }
    document.querySelector('.out-7').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${out.join(', ')} &nbsp; - &nbsp; is dividers ${num}`
}

document.querySelector('.b-7').onclick = divider;


// Задача
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.

function dividers1() {
    const num1 = document.querySelector('.i-81').value;
    const num2 = document.querySelector('.i-82').value;
    const out1 = [], out2 = [];
    for (let i = 1; i <= num1; i++){ if ( num1 % i === 0 ){ out1.push(i) } }
    for (let i = 1; i <= num2; i++){ if ( num2 % i === 0 ){ out2.push(i) } }

    const out = out1.filter(el => out2.includes(el));

    document.querySelector('.out-8').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${out.join(', ')} &nbsp; - &nbsp; common dividers for ${num1} and ${num2}`
}

document.querySelector('.b-8').onclick = dividers1;


// Задача
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.

function dividers2() {
    const num1 = document.querySelector('.i-91').value;
    const num2 = document.querySelector('.i-92').value;
    const out1 = [], out2 = [];
    for (let i = 1; i <= num1; i++){ if ( num1 % i === 0 ){ out1.push(i) } }
    for (let i = 1; i <= num2; i++){ if ( num2 % i === 0 ){ out2.push(i) } }

    const out = out1.filter(el => out2.includes(el)).sort((a,b) => b - a);

    document.querySelector('.out-9').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${out[0]} &nbsp; - &nbsp; the biggest divisor for  ${num1} and ${num2}`
}

document.querySelector('.b-9').onclick = dividers2;


// Задача
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.

function dividers3() {
    const num1 = document.querySelector('.i-101').value;
    const num2 = document.querySelector('.i-102').value;
    const out = [];
    for (let i = 1; i <= num1 * num2; i++){ if ( i % num1 === 0 && i % num2 === 0 ){ out.push(i) } }

    document.querySelector('.out-10').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${out[0]} &nbsp; - &nbsp; the least divisible for  ${num1} and ${num2}`
}

document.querySelector('.b-10').onclick = dividers3;


// Задача
// Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.

function counterOfWords() {
    const text = document.querySelector('.t-11');
    const count = text.value.trim().split(' ');
    document.querySelector('.out-11').innerText = count[0] === '' ? 0 : count.length;
}

document.querySelector('.t-11').onmouseout = counterOfWords;


// Задача
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.

function counterOfSymbols() {
    const text = document.querySelector('.t-12');
    const count = text.value.split('');
    document.querySelector('.out-12').innerText = count.length;
}

document.querySelector('.t-12').onmouseout = counterOfSymbols;


// Задача
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.

function counterOfSpace() {
    const text = document.querySelector('.t-13');
    const count = text.value.replace(/\s/g, '').split('');
    document.querySelector('.out-13').innerText = count.length;
}

document.querySelector('.t-13').onmouseout = counterOfSpace;


// Задача
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.

function counterPercent() {
    const text = document.querySelector('.t-14');
    const character = text.value.toLowerCase()
                        .replace(/\s/g, '').split('').sort()
                        .reduce((a, i)=> ({ ...a, [i]: a[i]+1 || 1}), {});
    const percent = text.value.replace(/\s/g, '').length;
    let out = [];

    for (let i in character){
        out.push(`"${i}":${(character[i] * 100 / percent).toFixed(2)}%`)
    }

    document.querySelector('.out-14').innerText = out.join(', ');
}

document.querySelector('.t-14').onmouseout = counterPercent;


// Задача
// В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра. Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.

function counterPercent15() {
    const text = document.querySelector('.t-15');
    const character = text.value.toLowerCase()
    .replace(/\s/g, '').split('').sort()
    .reduce((a, i)=> ({ ...a, [i]: a[i]+1 || 1}), {});
    const percent = text.value.replace(/\s/g, '').length;
    let out = [];

    for (let i in character){
        out.push(`"${i}":${(character[i] * 100 / percent).toFixed(2)}%`)
    }

    document.querySelector('.out-15').innerHTML += 'Counter Percent: ' + out.join(', ');
}

function counterOfSpace15() {
    const text = document.querySelector('.t-15');
    const count = text.value.replace(/\s/g, '').split('');
    document.querySelector('.out-15').innerHTML += 'Counter of Symbols without space: ' + count.length + '<br>';
}

function counterOfSymbols15() {
    const text = document.querySelector('.t-15');
    const count = text.value.split('');
    document.querySelector('.out-15').innerHTML += 'Counter of Symbols: ' + count.length + '<br>';
}

function counterOfWords15() {
    const text = document.querySelector('.t-15');
    const count = text.value.trim().split(' ');
    document.querySelector('.out-15').innerHTML += "Counter of Words: " + (count[0] === '' ? 0 : count.length) + '<br>';
}

function allCounterText() {
    document.querySelector('.out-15').innerHTML = '';

    const all = document.querySelectorAll('.i-15');
    for (let i in all){
        if (all[i].checked){
            if(all[i].value === '1') counterOfWords15()
            if(all[i].value === '2') counterOfSymbols15()
            if(all[i].value === '3') counterOfSpace15()
            if(all[i].value === '4') counterPercent15()
        }
    }
}

document.querySelector('.t-15').onmouseout = allCounterText;


//Задача
// Пусть даны два textarea. Пусть в первый текстареа вводится текст на русском языке. Сделайте так, чтобы этот текст преобразовался в транслит и вывелся во втором textarea.
const absCyr = {"а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "jo", "ж": "zh", "з": "z", "и": "i", "й": "j", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "h", "ц": "c", "ч": "ch", "ш": "sh", "щ": "sch", "ъ": "", "ы": "y", "ь": "'", "э": "e", "ю": "ju", "я": "ja", "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ё": "Jo", "Ж": "Zh", "З": "Z", "И": "I", "Й": "J", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "S", "Т": "T", "У": "U", "Ф": "F", "Х": "H", "Ц": "C", "Ч": "Ch", "Ш": "Sh", "Щ": "Sch", "Ъ": "", "Ы": "Y", "Ь": "'", "Э": "E", "Ю": "Ju", "Я": "Ja"};

function cryABC(){
    const inText = document.querySelector('.t-16').value;
    const transl = inText.trim().split('').map(el => absCyr[el] ? absCyr[el] : el);
    document.querySelector('.out-16').innerHTML = transl.join('')
}

document.querySelector('.t-16').onmouseout = cryABC;


// Задача
// Сделайте так, чтобы при вводе во второй текстареа транслита текста, этот текст преобразовывался в русский и выводился в первом текстареа.

const abcLat = { "'": "ь", "A": "А", "B": "Б", "C": "Ц", "Ch": "Ч", "E": "Е" ,"D": "Д", "F": "Ф", "G": "Г", "H": "Х", "I": "И", "J": "Й", "Ja": "Я", "Jo": "Ё", "Ju": "Ю", "K": "К", "L": "Л", "M": "М", "N": "Н", "O": "О", "P": "П", "R": "Р", "S": "С", "Sch": "Щ", "Sh": "Ш", "T": "Т", "U": "У", "V": "В", "Y": "Ы", "Z": "З", "Zh": "Ж", "a": "а", "b": "б", "c": "ц", "ch": "ч", "d": "д", "e": "е", "f": "ф", "g": "г", "h": "х", "i": "и", "j": "й", "ja": "я", "jo": "ё", "ju": "ю", "k": "к", "l": "л", "m": "м", "n": "н", "o": "о", "p": "п", "r": "р", "s": "с", "sch": "щ", "sh": "ш", "t": "т", "u": "у", "v": "в", "w": "в", "W": "В", "y": "ы", "z": "з", "zh": "ж"};

function latABC(){
    let inText = document.querySelector('.t-17').value;
    inText = inText.replace(/Sch/g, "Щ").replace(/Ja/g, "Я").replace(/Jo/g, "Ё")
    .replace(/Ju/g, "Ю").replace(/Ch/g, "Ч").replace(/Sh/g, "Ш")
    .replace(/Zh/g, "Ж").replace(/sch/g, "щ").replace(/ja/g, "я")
    .replace(/jo/g, "ё").replace(/ju/g, "ю").replace(/ch/g, "ч")
    .replace(/sh/g, "ш").replace(/zh/g, "ж");
    const transl = inText.trim().split('').map(el => abcLat[el] ? abcLat[el] : el);
    document.querySelector('.out-17').innerHTML = transl.join('')
}

document.querySelector('.t-17').onmouseout = latABC;



// Задача
// Модифицируйте вашу задачу так, чтобы был один текстареа, чекбокс и див. Если чекбокс отмечен, то пусть в див по потери фокуса выводится транслит текста, а если не отмечен - то текст текстареа пусть преобразуется из транслита в русский текст.
// Модифицируйте предыдущую задачу так, чтобы текст в диве появлялся не по потери фокуса, а по мере ввода текста в текстареа.
document.querySelector('.i-18').checked = true;

document.querySelector('.i-18').onclick = () =>{
    if (document.querySelector('.i-18').checked){
        document.querySelector('.sp18').innerText = 'Trancelit';
        document.querySelector('.t-18').value = '';
    }else{
        document.querySelector('.sp18').innerText = 'Literal';
        document.querySelector('.t-18').value = '';
    }
}

function chooseABC() {
    if(document.querySelector('.i-18').checked){
        let inText = document.querySelector('.t-18').value;
        inText = inText.replace(/Sch/g, "Щ").replace(/Ja/g, "Я").replace(/Jo/g, "Ё")
        .replace(/Ju/g, "Ю").replace(/Ch/g, "Ч").replace(/Sh/g, "Ш")
        .replace(/Zh/g, "Ж").replace(/sch/g, "щ").replace(/ja/g, "я")
        .replace(/jo/g, "ё").replace(/ju/g, "ю").replace(/ch/g, "ч")
        .replace(/sh/g, "ш").replace(/zh/g, "ж");
        const transl = inText.trim().split('').map(el => abcLat[el] ? abcLat[el] : el);
        document.querySelector('.out-18').innerHTML = transl.join('')
    }else{
        const inText = document.querySelector('.t-18').value;
        const transl = inText.trim().split('').map(el => absCyr[el] ? absCyr[el] : el);
        document.querySelector('.out-18').innerHTML = transl.join('')
    }
}

document.querySelector('.t-18').oninput = chooseABC;


// Игра угадай число на JavaScript
// Сейчас мы с вами реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
//
// Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.

const start19 = document.querySelector('.start19');
const play19 = document.querySelector('.play19');
const out19 = document.querySelector('.out-19');

start19.hidden = false;
play19.hidden = true;

start19.onclick = () =>{
    document.querySelector('.counter19').innerHTML = '60';
    document.querySelector('.out-19').innerHTML = '';
    document.querySelector('.in-19').value = '';
    start19.hidden = true;
    play19.hidden = false;
    counter19();
    playGame19();
}

const counter19 = function(){
    let numCount = document.querySelector('.counter19').innerText;
    if (Number(numCount) === 0){
        document.querySelector('.out-19').innerHTML = 'Вы проиграли... ';
        setTimeout(() => {
            location.reload();
        }, 3000)
    }else{
        document.querySelector('.counter19').innerText = Number(numCount) - 1;
    }
    setTimeout('counter19()', 1000);
}

function playGame19(){
    let num = Math.floor((Math.random() * 100)) + 1;

    function game( num ) {
        let in19 = document.querySelector('.in-19').value;
        if ( Number(in19) === num ){
            out19.innerHTML = 'Вы угадали!!!';
            document.querySelector('.counter19').innerHTML = "YOU WIN!!!";
            setTimeout(()=>{
                location.reload();
            }, 3000);
        } else if ( Number(in19) > num ){
            out19.innerHTML = 'введите число поменьше';
        } else {
            out19.innerHTML = "введите число побольше";
        }
    }
    document.querySelector('.b-19').onclick = () => game(num);
}


// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.
// Задача
// Реализуйте описанную игру.
//
// Задача
// Модифицируйте предыдущую задачу, добавив таймер обратного отсчета. Если игрок не успеет угадать числа за отведенное время - он проиграл.

let game20 = document.querySelector('.task20');
let table20 = document.createElement('table');
table20.id = 'tbl20';
let error = true;

document.querySelector('.b-20').onclick = () => {
    if( error ){
        counter20();
        findGame20();
        error = false;
    }
}

const random20 = () => Math.floor(Math.random() * 99) + 1;

function tableGame20() {
    for (let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j++){
            let td = document.createElement('td');
            //td.innerText = '~~';
            tr.appendChild(td);
        }
        table20.appendChild(tr);
    }
}
game20.appendChild(table20);

tableGame20();

function bodyGame20() {
    let arr = [];
    while (arr.length < 10){
        arr.push(Math.floor(Math.random() * 99) + 1)
        arr = [...new Set(arr)]
    }

    let tableAll = document.querySelectorAll('#tbl20 td');

    for (let k = 1; k <= 100; k++){
        if(arr.includes(k)){
            tableAll[k-1].value = 1;
        }else{
            tableAll[k-1].value = 0;
        }
    }

}

bodyGame20();

function findGame20() {
    let tableAll = document.querySelectorAll('#tbl20 td');
    let cntr = 0;

    for (let k of tableAll){
        console.log(k)
        k.addEventListener('click', function () {
            if(this.value && this.style.color !== 'red'){
                this.style.color = 'red';
                this.style.backgroundColor = 'red';
                cntr += 1;
                document.querySelector('.out-20').innerText = (10 - cntr) + ' left to find'
                if (cntr === 10){
                    document.querySelector('.counter20').innerHTML = 'YOU WIN !!!';
                    setTimeout(()=>{
                        location.reload();
                    }, 5000);
                }
            }else if(this.style.color === 'red'){
                cntr += 0;
            }else{
                this.style.color = 'blue';
                this.style.backgroundColor = 'blue';
            }
        })
    }

}

const counter20 = function(){
    let num = document.querySelector('.counter20').innerText;
    if (isNaN(Number(num))) return 0;

    if (Number(num) === 0){
        document.querySelector('.counter20').innerHTML = 'YOU LOSE...';
        setTimeout(() => location.reload(), 5000);
    }else{
        document.querySelector('.counter20').innerText = Number(num) - 1;
    }
    setTimeout(()=> counter20(), 1000);
}


