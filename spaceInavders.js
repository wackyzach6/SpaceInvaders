let hero = {
    top: 700,
    left: 550
};


document.onkeydown = function(e) {
console.log(e.keyCode);
    if (e.keyCode === 37){
        console.log("LEFT");
        hero.left = hero.left - 10;
        moveHero()
    }
    else if(e.keyCode === 39) {
        console.log("RIGHT");
        hero.left = hero.left + 10;
        moveHero()
    }
    else if (e.keyCode === 32) {
        console.log("FIRE");
        
    }
}
function moveHero() {
    document.getElementById("hero").style.left = hero.left + "px";

}
moveHero()