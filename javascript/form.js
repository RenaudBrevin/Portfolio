var button = document.querySelector("button");


button.addEventListener("click", go);

function go(){
    // Permet de désactiver le bouton d'envois après avoir cliqué dessus pour ne pas que l'utilisateur puisse spam
    var input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        if(input[i].value == ''){
            return;
        }
    }
    setTimeout(function(){button.disabled = true;}, 100);
    button.innerHTML = "Envoie en cours...";
    button.style.zIndex = "-1"; //z-index obligatoire pour ne pas avoir de collision avec le curseur 
};
