// var y = window.scrollY;
// var element = document.querySelector("main");
// var b = element.scrollTop;

// function clickScrollDown(){
//     console.log(y);
//     console.log(b);
// }


// CURSOR 

var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})



// LOADER

var loader = document.querySelector(".loading");


window.addEventListener('load', () => {
    noLoadScreen();
})

function waitBro(time)  {
    return new Promise( resolve => {
        setTimeout(()=> {resolve('')} ,time );
    })
}

async function noLoadScreen(){
    await waitBro(4800);
    // loader.classList.add("endLoad");
}


const titreanime = document.querySelector('.txtCitation');

new Typewriter(titreanime, {
    loop : false
    
})

    .typeString('<span style="color:white">Good things take time...</span>')
    .start()



// Snap Scroll méthode 1 pas ouf 

const sections = [...document.querySelectorAll("section")]

coordSections = []
sections.forEach(section => coordSections.push(section.offsetTop ))

function sectionNear(){
    b = Infinity;
    positionNow = window.scrollY;
    for (let i = 0; i < coordSections.length; i++){
        coordSectionsI = Math.sqrt(Math.pow(coordSections[i], 2));
        a = Math.sqrt(Math.pow(positionNow - coordSectionsI, 2));
        if (a < b){
            b = a;
            bestSection = coordSectionsI;
        }
    }
    // console.log(positionNow);
    // console.log(bestSection);
    // console.log(coordSections);
    // console.log("\n\n");
    return bestSection
}

document.addEventListener("scroll", addScrollSmooth)
window.addEventListener("resize", addScrollSmooth)

async function addScrollSmooth(e){
    // document.removeEventListener("scroll", document);
    sectionToGo = sectionNear();
    //await waitBro(150); // Eviter le spam mais moyen 
    window.scrollTo({
    top: sectionToGo,
    behavior: "smooth"
    })
}



// Snap Scroll méthode 2 Marche moyen 

content = document.querySelector(".sectionAllContent");

var pageHeight = window.innerHeight;
var isAnimating = false;
content.style.transform = 'translate3d(0px,0px,0px)';

document.addEventListener('scroll', function(e){
    content.scrollTop = 0;
});
document.addEventListener('wheel', wheelListener);

function wheelListener(e) {
    if(e.deltaY > 0) {
        scrollPage(-pageHeight);
    } else {
        scrollPage(+pageHeight);
    }
}

function scrollPage(scrollSize) {
    if(isAnimating){
        return;
    }
    scrollTransition();
    isAnimating = true;
    var yPos = getNewYPos(scrollSize);
    content.style.transform = 'translate3d(0px,'+ yPos + ',0px)';
}

function getNewYPos(add){
    var oldYPos = content.style.transform.split(',')[1];
    oldYPos = parseInt(oldYPos.replace(/px/,''));
    var newYPos = oldYPos + add;
    if(newYPos > 0){
        isAnimating = false;
    }
    return Math.min(0, newYPos) + 'px';
}


content.addEventListener('transitionend', function(){
    setTimeout(function(){ isAnimating = false; }, 500);
    document.addEventListener('wheel', wheelListener);
})



// Animation NavBar

async function scrollTransition(){
    header = document.querySelector("header");
    header.style.transform = 'translate(-50%, -150px)';
    header.style.transition = ' 0.5s cubic-bezier(0.55, 0.09, 0.38, 0.94)';
    await waitBro(300);
    header.style.transform = 'translate(-50%, 0)';
    header.style.transition = ' 0.5s cubic-bezier(0.55, 0.09, 0.38, 0.94)';
}