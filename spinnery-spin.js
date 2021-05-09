let angle = 0
setInterval(rotation, 5)
function rotation(){
        angle = (angle != 360) ? angle+=0.5 : angle = 0
        document.querySelector("#spinner_itself").style.transform = `rotate(${angle}deg)`
}
