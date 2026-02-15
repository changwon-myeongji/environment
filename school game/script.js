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
}
