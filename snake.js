const cvs = document.getElementById("snake");
const ctx = cvs.getContext('2d');


const box = 25
;

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/assets/assets/enemy.png";


let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}


let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}


let score = 0;
let d;

document.addEventListener("keydown", direction)

function direction(event) {
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") {
        d = "LEFT";
    } else if (key == 38 && d != "DOWN") {
        d = "UP";
    } else if (key == 39 && d != "LEFT") {
        d = "RIGHT";
    } else if (key == 40 && d != "UP") {
        d = "DOWN";
    }


}


let snakeX = snake[0].x;
let snakeY = snake[0].y;

var head = new Image();
head.src = 'img/assets/assets/upmouth.png';

function draw() {


    ctx.drawImage(ground, 0, 0);



    var body = new Image();
    body.src = 'img/assets/assets/snakeimage.png';
    for (let i = 0; i < snake.length; i++) {
        var headPattern = ctx.createPattern(head, "repeat")
        var bodyPattern = ctx.createPattern(body, "repeat")
        ctx.fillStyle = (i == 0) ? headPattern : bodyPattern;
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "rgba(1, 1, 1, 0)";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.drawImage(foodImg, food.x, food.y);


    if (d == "LEFT") {
        snakeX -= box;
        head.src = 'img/assets/assets/leftmouth.png';
    }
    ;
    if (d == "UP") {
        snakeY -= box;
        head.src = 'img/assets/assets/upmouth.png';
    }
    if (d == "RIGHT") {
        snakeX += box;
        head.src = 'img/assets/assets/rightmouth.png';
    }
    if (d == "DOWN") {
        snakeY += box;
        head.src = 'img/assets/assets/downmouth.png';
    }

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        }
    } else {
        snake.pop();

    }

    if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box) {
        clearInterval(game);
    }

    for (i = 0; i < snake.length; i++) {
        if (snakeX === snake[i].x && snakeY === snake[i].y) {
            clearInterval(game);
        }
    }


    let newHead = {
        x: snakeX,
        y: snakeY

    };

    snake.unshift(newHead);
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box)

}


function play() {
    location.reload();
}

var time = 100;
let game = setInterval(draw, time);

































