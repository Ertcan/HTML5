/*let Kilo = prompt("Kilo giriniz.");
let Boy = prompt("Boy giriniz.");

let endeks = Kilo /((Boy/100)*(Boy/100));
if(endeks<=18.5){
    alert("Çok zayıfsınız!");
}
else if ((endeks>18.5)&&(endeks<=25)){
    alert("Sağlıklısınız!!");
}
else {
    alert("Çok Kilolusunuz!");
}
*/
let x = 2+3+"5";
let y = "5"+3+2;
document.getElementById("demo").innerHTML  = x;
document.getElementById("demo1").innerHTML = y;

var txt ="JavaScript";
var txtl =txt.length;
console.log(txtl);

let str = "please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate",15);
console.log(pos);

let arr =["HTML","CSS","C++"];
let arr1 = ["JS","BOOTSTRAP"];
let arrs = arr.concat(arr1);
console.log(arrs);

let array = ["HTML","CSS","JS","C++","C#"];
document.getElementById("demo3").innerHTML = array.toString();

//alert("Javascript easy to learn!");

for(var i = 0;i<=15;i++){
 //   document.getElementById("demo4").innerHTML = i;
 document.write(i+" ");
}

function myfunction(){
    let txt1;
    if(confirm("Press a button!")){
        txt1 = "you pressed OK";
    }
    else {
        txt1 = "you pressed cancel!";
    }
    document.getElementById("demo5").innerHTML = txt1;
}
/*
for(let j = 11; j<=99; j++){
 let z=99;
 let =  palindrom = z*j;
 let tmp=0;
 tmp=palindrom;
 let bb = tmp%10;
 tmp=tmp/10;
 tmp=Math.floor(tmp);
 let ob = tmp%10;
 tmp/=10;
 tmp=Math.floor(tmp);
 let yb = tmp%10;
 let bnb = tmp/10;
 tmp=Math.floor(tmp);
 let terspalindrom = ((bb*1000)+(ob*100)+(yb*10)+bnb);
 if(palindrom==terspalindrom){
console.log(palindrom);
}
}*/
let pos1=0;
let box =document.getElementById('box');
var t =setInterval(move,10);
function move(){
    if(pos1>=150){
        clearInterval(t);
    }
    else{
        pos1+=1;
        box.style.left = pos1+'px';
    }
}
function show(){
    alert("Merhaba!");
}
function mDown(obj){
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML="Bırak artık";
}
function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Teşekkürler";
}
function validate(){
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if(n1.value!=""&&n2.value!=""){
        if(n1.value==n2.value){
            return true;
        }
    }
alert("Yanlış değer girdiniz.");
return false;

}