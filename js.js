function func1() {
    var c=0;
    while (c<=8) {
        document.getElementById("n"+c).textContent = c;
        document.getElementById("no"+c).textContent = Math.pow(c, 2);
        c += 2;
    }
}
function func2() {
    var a = -2;
    for (var i = 1; i <= 9; i++) {
        if (a+1!=0) {
            y = (-4*Math.pow(a, 2) + 3*a - 6) / (a+1);
            document.getElementById("z"+i).textContent = a;
            document.getElementById("zo"+i).textContent = y.toFixed(3);
        }
        else { 
            document.getElementById("z"+i).textContent = a;
            document.getElementById("zo"+i).textContent = "-";
        }
        a+=0.5;
    }
}
function func4() {
    var table = document.querySelector("#t1");
    var row = document.getElementById("row").value;
    var col = document.getElementById("col").value;
    for (let i = 0; i <= row; i++) {
        let tr = document.createElement("tr");
        tr.id = "tr" + (i + 1);
        for (let j = 0; j <= col; j++) {
            let td = document.createElement("td");
            td.id = "td" + (j + 1);
            if (tr.id=="tr1" && td.id!="td1") {
                td.textContent = j;
            }
            if (td.id=="td1" && tr.id!="tr1") {
                td.textContent = i;
            }
            if (tr.id!="tr1" && td.id!="td1") {
                td.textContent = i*j;
            }
            tr.appendChild(td);     
        }
        table.appendChild(tr);
    }
}