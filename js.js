function func1(){
    var str = document.getElementById("z1").value+" ";
    var j = 0;
    var b = "";
    var w1 = "";
    var w2 = "";
    var w3 = "";
    for (let index = 0; index < str.length; index++) {
        if(str[index].toUpperCase() != str[index].toLowerCase())
        b +=str[index];
        else
        switch (j) {
            case 0:
                w1 = b[0].toUpperCase()+b.slice(1);
                b="";
                j++;
                break;
            case 1:
                w2 = b[0].toUpperCase()+".";
                b="";
                j++;
                break;
            case 2:
                w3 = b[0].toUpperCase()+".";
                b="";
                j++;
                break;
        }
    }
    document.getElementById("z1otvet").textContent = w1+" "+w2+" "+w3;
}

function func2(){
    var str = document.getElementById("z2").value+" ";
    var count = 0;
    var reg = new RegExp("[a-z]");
    for (let index = 0; index < str.length; index++) {
        if(reg.test(str[index]))
            count++;
    }
    document.getElementById("z2otvet").textContent = count;
}

function check(){
    var str = document.getElementById("z3").value;
    var reg = new RegExp("[0-9+/*---]");
    var b = reg.test(str[str.length-1]);
    if(!b)
        document.getElementById("z3").value = str.slice(0,str.length-1);
    var num1 = 0;
    var num2 = 0;
    var otv = 0;
    var b = "";
    var re = new RegExp("[0-9]");
    for (let index = 0; index < str.length; index++) {
        if(re.test(str[index]))
            b+=str[index];
        else{
            num1=parseInt(b);
            num2=parseInt(str.slice(index+1,str.length));
            switch (str[index]) {
                case "*":
                    otv = num1*num2;
                    break;
                case "-":
                    otv = num1-num2;
                    break;
                case "+":
                    otv = num1+num2;
                    break;
                case "/":
                    otv = num1/num2;
                    break;
            }
        }
    }
    document.getElementById("z3otvet").textContent = otv; 
}