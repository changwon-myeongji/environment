const player = document.getElementById("player");

let x = 100;
let y = 100;

player.style.left = x + "px";
player.style.top = y + "px";

document.addEventListener("keydown", function(event) {

    if (event.key === "w" || event.key === "W") {
        y -= 10;
    }

    if (event.key === "s" || event.key === "S") {
        y += 10;
    }

    if (event.key === "a" || event.key === "A") {
        x -= 10;
    }

    if (event.key === "d" || event.key === "D") {
        x += 10;
    }

    const maxX = game.clientWidth - player.clientWidth;
    const maxY = game.clientHeight - player.clientHeight;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY + 50) y = maxY + 50;


    player.style.left = x + "px";
    player.style.top = y + "px";
});
function move(direction) {

    if (direction === "up") {
        y -= 10;
    }

    if (direction === "down") {
        y += 10;
    }

    if (direction === "left") {
        x -= 10;
    }

    if (direction === "right") {
        x += 10;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";
    const maxX = game.clientWidth - player.clientWidth;
const maxY = game.clientHeight - player.clientHeight;

if (x < 0) x = 0;
if (y < 0) y = 0;
if (x > maxX) x = maxX;
if (y > maxY) y = maxY;


}
quizObject.addEventListener("click", function() {


    const objectX = 300;
    const objectY = 100;

    const distance = Math.abs(x - objectX) + Math.abs(y - objectY);

    if (distance < 200) {

        const answer = prompt(
            "쓰레기를 줄이기 위해 우리가 해야 할 일은?\n\n1. 일회용품 많이 쓰기\n2. 재활용하기"
        );

        if (answer === "2") {
            alert("정답입니다! 🎉");
        } else {
            alert("틀렸어요 😢 다시 생각해보세요!");
        }

    } else {
        alert("더 가까이 가세요!");
    }

});

update();