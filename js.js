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
    document.getElementById("z11").textContent +=d.getHours()+":"+d.getMinutes()+"."+d.getSeconds()+"."+d.getMilliseconds();
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
    document.getElementById("z2otvet").textContent = (year1+mouth1+date1) - (year+mouth+date)+"+-4дня";
}

function func3() {
    var n =document.getElementById("z3").value;
    var marquee = document.createElement("marquee");
    
    //marquee.scrollDelay = 2000;
    
    var d = document.getElementById("new");
    
    marquee.textContent =n;
    document.getElementById("zz").disabled = true;
    
    setTimeout(() => { document.getElementById("zz").disabled = false;  setTimeout(() => { d.appendChild(marquee); }, 3000);}, 2000);
    
    //document.getElementById("z3o").textContent =n ;
}