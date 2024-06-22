let a = document.getElementById('num1').value;
let b = document.getElementById('num2').value;
let c = document.getElementById('res').innerHTML;
c = "The Result Is:<br>"
function mult(a, b){
    c = c + a*b;
}
function divd(){
    if(b!=0){
        c = c + a/b;
    }
    else{
        return "Division by 0 is not possible";
    }
}