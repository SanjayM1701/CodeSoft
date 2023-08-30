function Clear() {
    document.getElementById("answer").value = "";
}

function display(value) {
    document.getElementById("answer").value += value;
}

function Calculate() {
    var a = document.getElementById("answer").value;
    var b = eval(a);
    document.getElementById("answer").value = b;
}

function PreClear() {
    var x = document.getElementById("answer");
    x.value = x.value.slice(0, -1);
}

function Percentage(){
    var p = document.getElementById("answer").value;
    var q = p/100;
    document.getElementById("answer").value = q;
}