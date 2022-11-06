var AcrylicNight = document.querySelector('.acrelyc');
var body = document.querySelector('body');
var main = document.querySelector('main');
var night = document.querySelectorAll('.selectNight');
var light = document.querySelectorAll('.cls-1');
var lustre = document.querySelectorAll('.cls-2');

function darkMode(){
    night.forEach(element => {
        if (element != null){
            element.classList.add('dark-mode');
        };
    });
    main.style.backgroundColor = "$text-color";

    if (AcrylicNight != null){
        AcrylicNight.style.backgroundImage = "url('img/samaritaineAcrelycDetourNight.png')";
    };

    changeLight("#e5989b");

    localStorage.setItem("mode", "dark");
};


function lightMode(){
    night.forEach(element => {
        if (element != null){
            element.classList.remove('dark-mode');
        };
    });

    main.style.backgroundColor = "$backgrund-color";

    if (AcrylicNight != null){
        AcrylicNight.style.backgroundImage = "url('img/samaritaineAcrelycDetour.png')";
    };

    changeLight("#54505e")

    localStorage.setItem("mode", "light");
};


if(localStorage.getItem("mode")=="dark")
    darkMode();
else
    lightMode();


function change(){   
    if (body.classList.contains("dark-mode"))
        lightMode();
    else
        darkMode();
};


function changeLight(color){
    light.forEach(trait => {
        trait.style.stroke = color;
    });
    lustre.forEach(lumiere => {
        lumiere.style.stroke = color;
    });
}

// Light Animation

var laLight = document.querySelector(".light");

laLight.addEventListener("mouseover", function() {
    laLight.classList.add('animlight');
    setTimeout(function() {
        laLight.classList.remove('animlight');
    }, 1200);
}, false);