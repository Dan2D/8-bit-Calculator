
var num = 0;
var num1 = 0;
var num2 = 0;
var opCount = 1;
var usrInput = document.querySelector('#userInput');


var clear = document.querySelector('.clear');
clear.addEventListener('click', () =>{
    num = 0;
    num1 = 0;
    num2 = 0;
    op1 = "";
    op2 = "";
usrInput.value = "";})


var op1 = "";
var op2 = "";


//need to make op into new symbol when hit op button for effects to happen

//Takes multiple numbers as input while removing initial 0
var buttVal = document.getElementsByClassName('num');
console.log(buttVal[0].innerHTML);
for(i=0; i < buttVal.length; i++){
    buttVal[i].addEventListener('click', (e) => { 
        if(usrInput.value.indexOf('.') > -1){
        num = num + e.target.innerHTML;
            if (num.slice(-1) == '.'){num = num.slice(0, -1);}
                usrInput.value = num.slice(1);}
        else{
        num = num + e.target.innerHTML;
        usrInput.value = num.slice(1);}
        opCount -= 1;
   })}
   

var buttOp = document.getElementsByClassName("op");
for(n=0; n < buttOp.length; n++){
buttOp[n].addEventListener('click', (e) =>{
    opCount += 1;
    if (num1 == 0){
        //record 2nd operation and 2nd number
        num1 = parseFloat(usrInput.value);
        op1 = e.target.innerHTML;
        op2 = "?";
        num = 0;}
    
    //If two operation buttons pressed in a row?
    else{
        if (opCount > 1){
            opCount -= 1;
            num1 = 0;
            num2 = 0;
            op1 = "";
            usrInput.value = "";
            return;
        }
    op2 = e.target.innerHTML;   
    num2 = parseFloat(usrInput.value);
    num = 0;
        
        //Need a special case for "=" sign that resets vars
        
        switch (op1){
    case "+":
            num1 = num1 + num2;
            usrInput.value = num1;
        break;
    case "-":
        num1 = num1 - num2;
        usrInput.value = num1;
        break;
    case "x":
        num1 = num1 * num2;
        usrInput.value = num1;
        break;
    case "/":
        if(num2 == 0){
            window.alert('You can\'t divide by 0!')
            break;}
        num1 = num1 / num2;
        usrInput.value = num1; 
        break;
}
        opCount -= 1;
        num2 = 0;
        op1 = op2;
        op2 = "";
        console.log(op1, op2);
    console.log(num1, num2);}
})}

//Pressing ops multiple times can cause opCount to go into negative, put stop @ 0

var equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    op1 = "";
    op2 = "";
    num = 0;
})
