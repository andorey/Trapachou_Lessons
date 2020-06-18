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
    out5.innerHTML = out;
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

    document.querySelector('.out-6').innerHTML = out;
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
    document.querySelector('.out-7').innerHTML = `${out.join(', ')} &nbsp; - &nbsp; is dividers ${num}`
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

    document.querySelector('.out-8').innerHTML = `${out.join(', ')} &nbsp; - &nbsp; common dividers for ${num1} and ${num2}`
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

    document.querySelector('.out-9').innerHTML = `${out[0]} &nbsp; - &nbsp; the biggest divisor for  ${num1} and ${num2}`
}

document.querySelector('.b-9').onclick = dividers2;


// Задача
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.

function dividers3() {
    const num1 = document.querySelector('.i-101').value;
    const num2 = document.querySelector('.i-102').value;
    const out = [];
    for (let i = 1; i <= num1 * num2; i++){ if ( i % num1 === 0 && i % num2 === 0 ){ out.push(i) } }

    document.querySelector('.out-10').innerHTML = `${out[0]} &nbsp; - &nbsp; the least divisible for  ${num1} and ${num2}`
}

document.querySelector('.b-10').onclick = dividers3;


//




