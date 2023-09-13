window.addEventListener('scroll', function(){
    var header = document.querySelector('.menu')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

window.sr = ScrollReveal({ reset: true});

sr.reveal('.title-1', {
    rotate: {x:36, y:0, z:0},
    duration:3000
});
sr.reveal('.sub-title1', {
    rotate:{x:0, y:36, z:0},
    duration:3000
});


var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 7000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

