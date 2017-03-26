//Переменная для нулевого отображения секундомера
var timerStrDefault = '00' + ':' + '00' + ':' + '00' + ':' + '00';

//Выводим на страницу нулевое отображение секундомера
$("p").html(timerStrDefault);

//Вызов функций по событию клик
$(start).click(start_time);
$(pause).click(pause_time);
$(reset).click(reset_time);

//Переменные для секундомера
var count = 0;
var hour = 0;
var min = 0;
var sec = 0;
var milsec = 0;

//Переменные для хода секундомера и для остановки
var timer;
var go = false;

//Функция страта отсчета секундомера
function start_time(){
  if (go == false){
    timer = setInterval(function(){
        count+=1;

        //a % b - остаток от деления

        var hour = Math.floor(count/3600000)%24;
        var min = Math.floor(count/60000)%60;
        var sec = Math.floor(count/100)%60;
        var milsec = count%100;

        if (hour < 10) hour = '0' + hour;
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;
        if (milsec < 10) milsec = '0' + milsec;


        var timerStr = hour + ':' + min + ':' + sec + ':' + milsec;

        $("p").html(timerStr)
    },10);
    go = true;
  };
};


//Функция паузы, приостановка секундомера
function pause_time(){
  clearInterval(timer);
  go = false;
};

//Функция сброса показаний секундомера
function reset_time(){
  clearInterval(timer);
  go = false;
  count = 0;
  $("p").html(timerStrDefault);
};
