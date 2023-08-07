// Задача - 1
function compareArrays(arr1, arr2) {
let check = arr1.length === arr2.length && arr1.every(function(elem, index) {
	if (elem === arr2[index]) {
		return true;
	} else {
		return false;
	}
});
  return check
}

// Задача - 2
function getUsersNamesInAgeRange(users, gender) {
  	// Проверяем входящий массив на пустоту
  	if(users.length == 0) {
   		return 0;
  	}
  	// Выбираем элементы с нужным гендером
  	let selectGender = users.filter(item => item.gender == gender);

  	// Если элементов нет, то return = 0
  	if(selectGender == 0) {
    	return 0;
  	}

  	// формируем массив только их возраста
  	let selectAge = selectGender.map(item =>item.age);

  	// суммируем возраст
  	let sumAge = selectAge.reduce((sum, current) => sum + current);
  	
  	// Считаем средний возраст
  	let result = sumAge / selectAge.length;

 	return result;
}

