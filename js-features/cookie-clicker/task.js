function cookieCliker() {
    let cookieCounter = document.getElementById("clicker__counter");
    let cookieImage = document.getElementById("cookie");
    cookieCounter.textContent++;
    if (cookieCounter.textContent % 2) {
        cookieImage.width = 200;
        cookieImage.heigth = 200;
    } else {
        cookieImage.width = 250;
        cookieImage.heigth = 250;
    }

}
let   
cookieImage.onclick = cookieCliker;