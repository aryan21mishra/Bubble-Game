const pannelBottom = document.querySelector('.pannel-bottom')
const Scorerecord = document.querySelector('#Score')
const HitNo = document.querySelector('#hit')
const Timer = document.querySelector('#timer')
const StartBtn = document.querySelector('#start')
const EndBtn = document.querySelector('#end')



// this function make bubble
function makebubble() {
    let bubbles = ""
    for (let i = 1; i <= 167; i++) {
        let random = Math.floor(Math.random() * 10)
        bubbles += `<div class="bubble">${random}</div>`
    }
    pannelBottom.innerHTML = `${bubbles}`
}

let timer = 60
function runtimer() {
    Timer.innerHTML = `${timer}`
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer -= 1
            Timer.innerHTML = `${timer}`
        }
        else {
            clearInterval(timerint)
            pannelBottom.innerHTML = `<h1>Game Over</h1>`
            HitNo.innerHTML = ''
        }
    }, 1000)
}



let hitrn = 0
// the function hitno() generate random number and store in a hitrn variable or display on a webpage
function hitno() {
    hitrn = Math.floor(Math.random() * 10)
    HitNo.innerHTML = `${hitrn}`
}


let score = 0
// this function  increase the value of score by 10 and show on a web page
function scorecount() {
    score += 10
    Scorerecord.innerHTML = `${score}`
}



StartBtn.addEventListener('click', function () {
    makebubble()
    hitno()
    timer = 60
    runtimer()

})
EndBtn.addEventListener('click', function () {
    pannelBottom.innerHTML = `<h1>Game Over</h1>`
    timer = 0
    Timer.innerHTML = `--`
})

pannelBottom.addEventListener('click', function (dets) {
    let number = Number(dets.target.innerHTML)
    if (number === hitrn) {
        timer = 60
        scorecount()
        hitno()
        makebubble()
        runtimer()
    }
})


