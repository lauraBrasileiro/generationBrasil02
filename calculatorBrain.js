var resultado = document.getElementById("resultado");

function onNumberClicked(numberButton){
    
    if(resultado.innerHTML == "0"){
        resultado.innerHTML = numberButton.innerHTML;
    }
    else{
        resultado.innerHTML += numberButton.innerHTML;
    }
}

function botaoapagar(){
    resultado.innerHTML = "0";
}

function onEqualsClicked(){
    //TODO implement this function
}

function onDivideClicked(){
    //TODO implement this function
}



function onAddClicked(){
    //TODO implement this function
}

function onSubtractClicked(){
    //TODO implement this function
}

function onMultiplyCliked(){
    //TODO implement this function
}

