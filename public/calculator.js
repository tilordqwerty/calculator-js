// logica de la calculadora

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate (){
    try{
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error"
    }
}

function clearDisplay(){
    display.value = ""
}

function sqrt(){
    display.value = Math.sqrt(display.value)
}

