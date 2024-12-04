let display= document.getElementById('display');

function append (value){
    display.value +=value;
}

function calculate(){
    display.value=eval (display.value);
}

function backspace(){
    display.value = display.value.slice(0, -1)
}

function clear1(){
    display.value=''
}

function percentage(){
    display.value = parseFloat(display.value)/100;
}