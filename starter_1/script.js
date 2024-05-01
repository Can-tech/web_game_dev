const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();//same as adding <img> in html
playerImage.src = 'anim_1.png'
const spriteWidth = 575;//6876/12 = 575 fullwidth/# of colums
const spriteHeight = 523//5230/10 fullHeight/num of rows
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 4;


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx,dy, dw,dh)
    ctx.drawImage(playerImage,frameX*spriteWidth,frameY*spriteHeight,spriteWidth,spriteHeight, 0, 0, spriteWidth, spriteHeight)
    if(gameFrame % staggerFrames == 0){
    if (frameX < 6) frameX++
    else frameX = 0;
}
    gameFrame++
    requestAnimationFrame(animate)
}
animate();

console.log(ctx)