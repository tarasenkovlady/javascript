  function pow(a, b) {
    var powResult = a;

    for (var i = 1; i < b; i++) {
      powResult = powResult*a;
    }

    return powResult;
  }

  var a = prompt("введите число", '');
  var b = prompt("введите степень", '');

  if (b < 1 ){
    alert('введите значение степени больше 1')
    location.reload();
  } else {
    alert( pow(a, b) );
  }
