// дана переменная
// в ней лежит число
// от 1 до 12
// номер месяца
// определи, в какую пору года попадает этот месяц
// и выведи название поры года на экран
const season = (month) => ['wrong month','winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'][month];


// дан массив с числами
// найди его сумму
[1,2,3,4,5,6,7].reduce((acc, el)=> acc + el, 0)


// 1
// 22
// 333
// 4444
// 55555
// выведи пирамидку циклами
const pyramid = function(num){
    let out = '';
    for (let i = 1; i <= num; i++){
        for (let j = 1; j <= i; j++){
            out += i
        }
        out += '\n'
    }
    console.log(out)
}


// даны два инпута, кнопка и абзац. В инпуты вводятся числа.
// По нажатию на кнопку запишите сумму чисел в абзац.
// function f1() {
//     const inpt1 = document.querySelector('#first').value;
//     const inpt2 = document.querySelector('#second').value;
//
//     return document.querySelector('#out_1').innerText = Number(inpt1) + Number(inpt2);
// }
//
// document.querySelector('#bt_1').onclick = () => f1();


// такая задача
// дан массив с числами
// проверь, есть ли в нем число 3
// если есть - выведи есть
// если нет - то нет
const arr = [1,2,4,6,7,8,9,3,11,22,33];
const searchTree = (arr) => arr.some(el => el === 3) ? 'есть' : 'нет';


// дан абзац, в нем записано число, например, 10
// сделайте так, чтобы в абзаце начался обратный отсчет,
// каждую секунду число будет делать -1 пока не дойдет до нуля
const counter = function(){
    let num = document.querySelector('.counter').innerHTML;
    if (Number(num) === 0){
        return document.querySelector('.counter').innerHTML = 0;
    }else{
        document.querySelector('.counter').innerHTML = Number(num) - 1;
    }
    setTimeout('counter()', 1000);
}
document.querySelector('.butCount').onclick = () => counter();


// выведи на экран текущий день в формате год-месяц-день
 function data() {
			const arr = String(new Date()).split(' ');
			return document.querySelector('.data').innerText = `${arr[3]} - ${arr[1]} - ${arr[2]}`
        }


// дан инпут и кнопка
// по нажатию на кнопку выведи алертом текст из инпута
function alett() {
    const text = document.querySelector('.alert>input').value;
    alert(text);
}
document.querySelector('.alert>button').onclick = () => alett();


// дана кнопка
// по нажатию на нее выведи алертом '!!!'
document.querySelector('.three_char').onclick = () => alert('!!!');


// дан див
// 100 на 100 px
// сделай так, чтобы по клику на любое место окна браузера
// этот див перeмещался в место клика
const cont = document.querySelector('.container');

window.addEventListener('click', function (event) {
    event = event || window.event;
    cont.style.top = (event.y - 50) + 'px';
    cont.style.left = (event.x - 50) + 'px';
})
