
var num = 0;
var num1 = 0;
var num2 = 0;
var opCount = "";
var keyTrack = 0;
var usrInput = document.querySelector('#userInput');

//resets all vars to starting values when clear hit
var clear = document.querySelector('.clear');
clear.addEventListener('click', () =>{
    num = 0;
    num1 = 0;
    num2 = 0;
    op1 = "";
    op2 = "";
usrInput.value = "";
opCount = ""})


var op1 = "";
var op2 = "";




//records button inner html and writes to input screen
//counts if numbers(a) have been entered vs operations (b)
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
        if (opCount.substr(opCount.length-1) !== "a"){
            opCount = opCount + "a";}});}
    
   
//Operation tracker, checks abab order to check if operation can be executed
var buttOp = document.getElementsByClassName("op");
for(n=0; n < buttOp.length; n++){
buttOp[n].addEventListener('click', (e) =>{   
    if (op2 == "?"){
            opCount = opCount + "b";
}
   
    if (num1 == 0 && opCount[0] == "a"){    
        if (e.target.innerHTML != "="){
            opCount = opCount + "b";
//record 2nd operation and 2nd number
            num1 = parseFloat(usrInput.value);
            op1 = e.target.innerHTML;
            op2 = "?";
        num = 0;}}
    

    else if (opCount == "aa"){
        opCount = "a"
        num = num + e.target.innerHTML;
        usrInput.value = num.slice(1);}
    
    else if (opCount == "b"){
        window.alert ("You must start with a number first!");
        opCount = "";
        num = 0;
        num1 = 0;
        num2 = 0;
        usrInput.value = "";
        return;
    }
    
    else if (opCount == "abab"){
    num2 = parseFloat(usrInput.value);
    op2 = e.target.innerHTML;   
    num = 0;
    

   
//Switch case for each operation execution     
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
        num1 = Math.round((num1 + 0.00001)*100)/100;
        usrInput.value = num1; 
        break; 
}
 
//If ends with equal, then you want to reset all vars and start with result as num 1   
    if (op2 == "="){
        num1 = 0;
        opCount = "a";
        op1 = "";
        op2 = "";
        num = 0;
    }
//If you entered in another operation, then you'll start with a number and an op. So your op2 and num2 reset.
        else{
        opCount = "ab";
        num2 = 0;
        op1 = op2;
        op2 = "?";
        console.log(op1, op2);
    console.log(num1, num2);}}
    
           else {
               opCount = opCount.slice(0, -1);              
               return;}

})}
 
//Keyboard Logger function converts char code to match inner html of buttons
window.onkeypress = function() {
    var keyInput = event.which || event.keyCode;
    keyInput = String.fromCharCode(keyInput);
    
    var nums = document.getElementsByClassName('num');
    for (i=0;i<nums.length;i++){
        if (nums[i].innerHTML == keyInput){
            nums[i].click();
        }}
    
 var clears = document.getElementsByClassName('clear');
        if (clears[0].innerHTML == keyInput){
            clears[0].click();}
    
       var ops = document.getElementsByClassName('op');
        for (n=0; n<ops.length; n++){
            if (ops[n].innerHTML == keyInput){
                ops[n].click();
            }
            else if (keyInput == '*'){
                     ops[2].click();
                     }
            else if (keyInput.charCodeAt(0) == 13 || keyInput.charCodeAt(0) == 32){
                keyInput = "?";
                ops[4].click();
            }
        }                      
}

/*window.onkeypress = function(){
    var keyInput = event.which || event.keyCode;
    window.alert(keyInput);
}*/




/*var equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if(num2 == 0){return}
    else{
    op1 = "";
    op2 = "";
    num = 0;}
})*/
