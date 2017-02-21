var makeTest = {
    head: function () {
      var header = document.createElement('header');
      header.innerHTML = '<h4>Тест по программированию</h4>';

      document.body.appendChild(header);
    },
    Structure: function () {
      var content = document.createElement('section');
      content.innerHTML = '<head> <div class="questions"><ol><li class="question_item">Вопрос №1</li> <ul class="answer"> <li><label><input type="checkbox" name="Вариант ответа № 1" value="Вариант ответа № 1">Вариант ответа № 1</li></label> <li><label><input type="checkbox" name="Вариант ответа № 2" value="Вариант ответа № 1">Вариант ответа № 2</li></label> <li><label><input type="checkbox" name="Вариант ответа № 3" value="Вариант ответа № 1">Вариант ответа № 3</li></label> </ul> <li class="question_item">Вопрос №2</li> <ul class="answer"> <li><label><input type="checkbox" name="Вариант ответа № 1" value="Вариант ответа № 1">Вариант ответа № 1</li></label> <li><label><input type="checkbox" name="Вариант ответа № 2" value="Вариант ответа № 1">Вариант ответа № 2</li></label> <li><label><input type="checkbox" name="Вариант ответа № 3" value="Вариант ответа № 1">Вариант ответа № 3</li></label> </ul> <li class="question_item">Вопрос №3</li> <ul class="answer"> <li><label><input type="checkbox" name="Вариант ответа № 1" value="Вариант ответа № 1">Вариант ответа № 1</li></label> <li><label><input type="checkbox" name="Вариант ответа № 2" value="Вариант ответа № 1">Вариант ответа № 2</li></label> <li><label><input type="checkbox" name="Вариант ответа № 3" value="Вариант ответа № 1">Вариант ответа № 3</li></label> </ul> </ol></div><div class="submit"> <button type="submit" name="Проверить мои результаты">Проверить мои результаты</button></div>'

      document.body.appendChild(content);
    }

  }

makeTest.head();
makeTest.Structure();
