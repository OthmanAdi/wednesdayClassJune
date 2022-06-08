function crazyGenerator(){
    document.querySelector(".ColorField").style.background = newVal();
}

function newVal(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const makeRGBloop = () => {
    let baseColor = "rgba(";
    for (let i = 0; i < 3; i++){
        baseColor+= Math.floor(Math.random() * 255) + ",";
    }
    return baseColor;
}

const paint = () => {
    let rgbLoop = makeRGBloop();
    let rgbLoop1 = makeRGBloop();
    document.documentElement.style.setProperty("--main-color", rgbLoop + "1)");
    document.documentElement.style.setProperty("--secondary-color", rgbLoop1 + "1)");
}

setInterval(paint, 2000); /*Set the FPmS*/