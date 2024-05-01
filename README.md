# web_game_dev

HTML canvas game development


#### 1

```
const playerImage = new Image();//same as adding <img> in html
playerImage.src = 'anim_1.png'
let x = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(x, 50, 100, 100);
    x++
    requestAnimationFrame(animate)
}
animate();
```

#### 2
```
const playerImage = new Image();//same as adding <img> in html
playerImage.src = 'anim_1.png'
const spriteWidth = 575;//6876/12 = 575 fullwidth/# of colums
const spriteHeight = 523//5230/10 fullHeight/num of rows
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 4;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 6) frameX++
        else frameX = 0;
    }
    gameFrame++
    requestAnimationFrame(animate)
}
animate();
```

