// Задача
// Сделайте калькулятор, который будет находить площадь и периметр квадрата.
const x1 = document.querySelector('.i-11').value;
const squareCalculate = function(){
    const perimeter = x1 * 4 + ' cm ';
    const area = x1 * x1 + ' cm2';
    return document.querySelector('.out-1').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PERIMETER : ${perimeter}, &nbsp;&nbsp;AREA : ${area}`;
}
document.querySelector('.b-1').onclick = () => squareCalculate()

// Задача
// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
const x2 = document.querySelector('.i-21').value;
const y2 = document.querySelector('.i-22').value;
const rectangleCalfulate = function(){
    const perimeter = Number(x2) * 2 + Number(y2) * 2 + ' cm ';
    const area = x2 * y2 + ' cm2';
    return document.querySelector('.out-2').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PERIMETER : ${perimeter}, &nbsp;&nbsp;AREA : ${area}`;
}
document.querySelector('.b-2').onclick = () => rectangleCalfulate()

// Задача
// Сделайте калькулятор, который будет находить площадь круга и длину окружности.
const x3 = document.querySelector('.i-31').value;
const circleCalfulate = function(){
    const circumFerence = (2 * x3 * Math.PI).toFixed(2) + ' cm ';
    const area = (x3 * x3 * Math.PI).toFixed(2) + ' cm2';
    return document.querySelector('.out-3').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CircumFerence : ${circumFerence}, &nbsp;&nbsp;AREA : ${area}`;
}
document.querySelector('.b-3').onclick = () => circleCalfulate()

// Задача
// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
const x4 = document.querySelector('.i-41').value;
const y4 = document.querySelector('.i-42').value;
const z4 = document.querySelector('.i-43').value;
const triangleCalfulate = function(){
    const perimeter = Number(x4) + Number(y4)  + Number(z4) + ' cm ';
    const s = (Number(x4) + Number(y4)  + Number(z4)) / 2;
    const area = Math.sqrt( s * (s - Number(x4)) * (s - Number(y4))  * (s - Number(z4))).toFixed(2) + ' cm2';
    return document.querySelector('.out-4').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PERIMETER : ${perimeter}, &nbsp;&nbsp;AREA : ${area}`;
}
document.querySelector('.b-4').onclick = () => triangleCalfulate()

