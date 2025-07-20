const display = document.getElementById("display");
const input = document.getElementById("input");

function appendToDisplay(input){
    display.value += input;
    
}
function clearDisplay(){
    display.value = "";
    input.innerHTML = "Input:";
}
function clearOne(){
    display.value = display.value.slice(0, -1);
}
function calculate(){
    if(display.value ==""){
        display.value="";
    }
    else{
    try{
    input.innerHTML = "Input: " + display.value;
    display.value = eval(display.value);
}
catch(error){
    display.value = "Error"
    }
    }
 }