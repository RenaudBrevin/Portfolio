var button = document.querySelector("button");


button.addEventListener("click", go);

function go(){
    var input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        if(input[i].value == ''){
            return;
        }
    }
    setTimeout(function(){button.disabled = true;}, 100);
    button.innerHTML = "Envoie en cours...";
    button.style.zIndex = "-1";
};
