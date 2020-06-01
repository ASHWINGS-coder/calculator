function run1(){
    document. case.display.value += "1";
}

function run2(){
    document.case.display.value += "2";
}

function run3(){
    document.case.display.value +="3";
}

function runPlus(){
    document.case.display.value += "+";
}

function run4(){
    document.case.display.value += "4";
}
function run5(){
    document.case.display.value += "5";
}
function run6(){
    document.case.display.value += "6";
}

function runMinus(){
    document.case.display.value += "-";
}

function run7(){
    document.case.display.value += "7";
}
function run8(){
    document.case.display.value += "8";
}
function run9(){
    document.case.display.value += "9";
}

function runDivide(){
    document.case.display.value += "/";
}

function run0(){
    document.case.display.value += "0";
}


function runC(){

	document.case.display.value = ""
};

function runMultiply(){
    document.case.display.value += "*";
}

function runEquals(){
    var equals = eval(document.case.display.value)
   display.textContent = "";
    document.case.display.value=equals;
}




