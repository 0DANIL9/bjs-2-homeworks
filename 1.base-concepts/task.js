"use strict"
// Задача - 1
function solveEquation(a, b, c) {
  let arr = []; //Массив
  let d; //Дискриминант
  let k1; //Корень №1
  let k2; //Корень №2
    
  d = (b**2)-4*a*c;
  
  // Если дискриминант равен нулю
  if(d == 0){
    k1 = -b/(2*a);
    arr[0] = k1;
  } 

  // Если дискриминант больше нуля
  if(d > 0){
    k1 = (-b + Math.sqrt(d) ) / (2*a);
    k2 = (-b - Math.sqrt(d) )/(2*a);
    arr[0] = k1;
    arr[1] = k2;
  }

  return arr;
}

solveEquation(1,5,3);

// Задача - 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let percentMonths = (percent / 100) / 12; // Преобразование процентной ставки из диапазона от 0 до 100 в диапазон 0 до 1 и из годовой ставки в месячную
  
  let loanBody = amount - contribution; // Тело кредита

  let monthlyPayment = loanBody * (percentMonths + (percentMonths / (((1 + percentMonths)**countMonths) - 1))); // Ежемесячная опата 
  
  let totalAmount = Number((monthlyPayment * countMonths).toFixed(2)) //Общая сумма выплат
  
  return totalAmount;
}
calculateTotalMortgage(10, 0, 50000, 12);