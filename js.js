function func1() {
    var d = new Date();
    document.getElementById("z1").textContent = d.getFullYear()+" год \n";
    switch (d.getMonth()) {
        case 0:
            document.getElementById("z1").textContent +=d.getDate()+" января\n";
        break;
        case 1:
            document.getElementById("z1").textContent +=d.getDate()+" февраля\n";
        break;
        case 2:
            document.getElementById("z1").textContent +=d.getDate()+" марта\n";
        break;
        case 3:
            document.getElementById("z1").textContent +=d.getDate()+" апреля\n";
        break;
        case 4:
            document.getElementById("z1").textContent +=d.getDate()+" мая\n";
        break;
        case 5:
            document.getElementById("z1").textContent +=d.getDate()+" июня\n";
        break;
        case 6:
            document.getElementById("z1").textContent +=d.getDate()+" июля\n";
        break;
        case 7:
            document.getElementById("z1").textContent +=d.getDate()+" августа\n";
        break;
        case 8:
            document.getElementById("z1").textContent +=d.getDate()+" сентября\n";
        break;
        case 9:
            document.getElementById("z1").textContent +=d.getDate()+" октября\n";
        break;
        case 10:
            document.getElementById("z1").textContent +=d.getDate()+" ноября\n";
        break;
        case 11:
            document.getElementById("z1").textContent +=d.getDate()+" декабря\n";
        break;
    }
    switch (d.getDate()%6) {
        case 0:
            document.getElementById("z11").textContent +="воскресенье\n";
            
        break;
        case 1:
            document.getElementById("z11").textContent +="понедельник\n";
            
        break;
        case 2:
            document.getElementById("z11").textContent +="вторник\n";
            
        break;
        case 3:
            document.getElementById("z11").textContent +="среда\n";
            
        break;
        case 4:
            document.getElementById("z11").textContent +="четверг\n";
            
        break;
        case 5:
            document.getElementById("z11").textContent +="пятница\n";
            
        break;
        case 6:
            document.getElementById("z11").textContent +="суббота\n";
        break;
    }
    var min = d.getMinutes()
    if(min <10)
    min = "0"+min;
    var sec = d.getSeconds();
    if(sec <10)
    sec = "0"+sec;
    var h = d.getHours();
    if (h <10)
    h = "0"+ h;
    document.getElementById("z11").textContent +=h+":"+min+"."+sec+"."+d.getMilliseconds();
}

function func2() {
    var d = new Date();
    var n = document.getElementById("z2").value;


    var year = parseInt(n.slice(0,4))*365;
    var mouth = parseInt(n.slice(5,7))*30;
    var date = parseInt(n.slice(8));


    var year1 = d.getFullYear()*365;
    var mouth1 = (d.getMonth()+1)*30;
    var date1 = d.getDate();
    if((year+mouth+date)<(year1+mouth1+date1))
    document.getElementById("z2otvet").textContent = (year1+mouth1+date1) - (year+mouth+date)+"д.";
    else
    document.getElementById("z2otvet").textContent = "Ошибка";
    if((year+mouth+date)==(year1+mouth1+date1))
        document.getElementById("z2otvet").textContent = "C днём рождения!";

}

function func4() {
    var n =parseInt(document.getElementById("z4").value);
    var b = n;
    document.getElementById("zz").disabled = true;
    document.getElementById("z4").disabled = true;
    var clock = document.getElementById("day");
    
    var timeinterval = setInterval(function(){
        var second = n%60+" секунд";
        var minutes = Math.trunc(n/60)%60+" минут";
        var hours = Math.trunc(n/60/60)%24+" часов";
        var day = Math.trunc(n/60/60/24)%30+" дней";
        clock.innerHTML = day + ' '+ hours + ' ' + minutes + ' '+ second;
        n--;
        b--;
        if(b<0){
            clearInterval(timeinterval);
            document.getElementById("zz").disabled = false;
            document.getElementById("z4").disabled = false;
        }
       },1000);
       
}