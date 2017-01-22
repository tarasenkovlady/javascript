var namesArr = [];

for (var i = 0; namesArr.length < 5; i++) {
  var i = prompt('введите имя');
  namesArr.push(i);
}
// console.log(namesArr);

var userName = prompt('Введите имя пользователя');

var error = 'Ошибка! Пользователь с таким именем не найден';

for (var i = 0; i<namesArr.length ; i++){
  if (namesArr[i] == userName) {
    error = userName +', вы успешно вошли';
    break;
  }
}

alert(error);
