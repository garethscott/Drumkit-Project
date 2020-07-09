let keyAsound = new Audio('sounds/clap.wav')
let keySsound = new Audio('sounds/snare.wav')
let keyDsound = new Audio('sounds/tink.wav')
let keyFsound = new Audio('sounds/kick.wav')
let keyGsound = new Audio('sounds/tom.wav')
let keyHsound = new Audio('sounds/boom.wav')
let keyJsound = new Audio('sounds/hihat.wav')
let keyKsound = new Audio('sounds/openhat.wav')
let keyLsound = new Audio('sounds/ride.wav')

let capA = document.getElementById("cap-a")
let capS = document.getElementById("cap-s")
let capD = document.getElementById("cap-d")
let capF = document.getElementById("cap-f")
let capG = document.getElementById("cap-g")
let capH = document.getElementById("cap-h")
let capJ = document.getElementById("cap-j")
let capK = document.getElementById("cap-k")
let capL = document.getElementById("cap-l")



document.addEventListener('keydown', (e) => {
    if (e.key === "a") {
        keyAsound.play();
    }
    else if (e.key === "s") {
        keySsound.play();
    }
    else if (e.key === "d") {
        keyDsound.play();
    }
    else if (e.key === "f") {
        keyFsound.play();
    }
    else if (e.key === "g") {
        keyGsound.play();
    }
    else if (e.key === "h") {
        keyHsound.play();
    }
    else if (e.key === "j") {
        keyJsound.play();
    }
    else if (e.key === "k") {
        keyKsound.play();
    }
    else if (e.key === "l") {
        keyLsound.play();
    }
});

capA.addEventListener('click', () => {
    keyAsound.play();
    capA.style.color = 'yellow';
    capA.style.color = 'rgb(119, 250, 248);'
});
capS.addEventListener('click', () => {
    keySsound.play();
});
capD.addEventListener('click', () => {
    keyDsound.play();
});
capF.addEventListener('click', () => {
    keyFsound.play();
});
capG.addEventListener('click', () => {
    keyGsound.play();
});
capH.addEventListener('click', () => {
    keyHsound.play();
});
capJ.addEventListener('click', () => {
    keyJsound.play();
});
capK.addEventListener('click', () => {
    keyKsound.play();
});
capL.addEventListener('click', () => {
    keyLsound.play();
});

