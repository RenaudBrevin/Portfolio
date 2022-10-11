// var y = window.scrollY;
// element = document.querySelector("main");
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
    loader.classList.add("endLoad");
}



const titreanime = document.querySelector('.txtCitation');

new Typewriter(titreanime, {
    loop : false
    
})

    .typeString('<span style="color:white">Good things take time...</span>')
    .start()

