document.addEventListener('keypress', interactSnow);



let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext("2d");
cnv.width =  1000;
cnv.height = 700;

let xSnow = [];
let ySnow = [];
let rSnow = [];
let sSnow = [];

requestAnimationFrame(draw);

function draw() {
    ctx.strokeStyle = "white";
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    for (let i = 0; i <= xSnow.length; i++) {
        ctx.strokeCircle(xSnow[i], ySnow[i], rSnow[i]);
        if (ySnow[i] < cnv.height) {
            ySnow[i] += sSnow[i];
        } else if (ySnow[i] >= cnv.height) {
            ySnow[i] = 0;
            xSnow[i] = Math.random()* cnv.width;
        }

    }


    requestAnimationFrame(draw);
}

ctx.strokeCircle = function(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0 , 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
}

function interactSnow(event) {
    if (event.code == 'Space') {
        xSnow.push(Math.random()* cnv.width);
        ySnow.push(Math.random()* cnv.height);
        rSnow.push(Math.random()* 8);
        sSnow.push(Math.random()* 8 + 2);
    } else if (event.code == 'KeyB') {
        xSnow.pop();
        ySnow.pop();
        rSnow.pop();
        sSnow.pop();
    }
}