function roll(){
    var fRandom = Math.floor(Math.random() * 6 ) + 1;
    var sRandom = Math.floor(Math.random() * 6 ) + 1;

    document.querySelector(".img1").src = "./images/dice" + fRandom + ".png";
    document.querySelector(".img2").src = "./images/dice" +sRandom + ".png";
}
roll();
