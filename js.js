function func1(){
    var n = document.getElementById("z1").value;
    if(n>1){
        document.getElementById("z1otvet").textContent = Math.round((Math.sqrt(Math.pow(n,3))-Math.exp(n))*100000)/100000;
    }
    if(-1<n && n <=1){
        document.getElementById("z1otvet").textContent = Math.round((Math.pow(n,2)+2*Math.pow(n,3))*100000)/100000;
    }
    if(n<=1){
        document.getElementById("z1otvet").textContent = Math.round((Math.sin(n)+Math.tan(n))*100000)/100000;
    }
}
function func2(){
    var x = document.getElementById("z2x").value;
    var y = document.getElementById("z2y").value;
    if(-1<=x && x<=1 && -1<=y && y<=1 ){
        if((Math.pow(y,2)<Math.abs(x) && Math.pow(x,2)<Math.abs(y)) || (Math.pow(y,2)>Math.abs(x) && Math.pow(x,2)>Math.abs(y))){
            document.getElementById("z2otvet").textContent = "true";
        }else{
            document.getElementById("z2otvet").textContent = "false";    
        }
    }else{
        document.getElementById("z2otvet").textContent = "false";
    }
}
function func3(){
    var count = document.getElementById("z3").value;
    var s = "";
    var c = Math.round( count/15);
    if(c>0){
        switch(c){
            case 1:{
                s += "1 тугрик";
                break;
            }
            case 2:{
                s += "2 тугрика";
                break;
            }
            default:{
                s += Math.round(c)+" тугриков";
                break;
            }
        }
    }
    s += " ";
    if(count%15>0){
        
        switch(count%15){
            case 1:{
                s+="1 рубль";
                break;
            }
            case 2:{
                s+="2 рубля";
                break;
            }
            default:{
                s+=(count%15)+" рублей";
                break;
            }
        }
    }
    document.getElementById("z3otvet").textContent = s;
}
function func4(){
    var ball = 0;
    var z1 = document.getElementById("z4v1").checked;
    if(z1 == true){
        ball++;
    }
    var z2 = document.getElementById("z4v2v1").checked;
    if(z2 == true){
        ball++;
    }
    var z3 = document.getElementById("z4v2v2").checked;
    if(z3 == true){
        ball++;
    }
    var z4 = document.getElementById("z4v3").value;
    if(z4 == "<link>"){
        ball++;
    }
    var z5 = document.getElementById("z4v4").value;
    var z5v1 = document.getElementById("z4v4v1").value;
    if(z5 =="color в тэге <font>"){
        ball++;
    }
    if(z5v1 =="color в тэге <body>"){
        ball++;
    }
    //document.getElementById("asd").textContent = z5v1;

    var z6 = document.getElementById("z4v5").value;
    if( z6.toLowerCase() == "form"){
        ball++;
    }
    ball = ball/7;
    var b = document.getElementById("asd");
    if(ball<0.25){
        b.style.color = "#f00";
    }
    if(ball>0.25&&ball<0.50){
        b.style.color = "#800";
    }
    if(ball>0.50&&ball<0.75){
        b.style.color = "#080";
    }
    if(ball>0.75){
        b.style.color = "#0f0";
    }
    b.textContent = Math.round(ball*100)/100;
}