Draggable.create("#dragme",{
    type: 'x',
    bounds: '.container',
})

function checkOverlaop(){
    var div1 = document.querySelector('.onOff');
    var div2 = document.getElementById('dragme');
    var arrow = document.querySelector('.arrow');
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();

    if(rect1.left < rect2.right){
    document.getElementById('video1').style.opacity = 0;
    div1.style.backgroundColor = "orange";
    div2.style.color = "transparent";

    arrow.style.transform = "scaleX(0)"; 
}
else{
    document.getElementById('video1').style.opacity = 1;
    div1.style.backgroundColor = "chartreuse";
    div2.style.color = "white";

    arrow.style.transform = "scaleX(1)";
}
}

window.addEventListener('mousemove', checkOverlaop)