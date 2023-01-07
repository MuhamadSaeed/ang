window.onload = () => {
    let mainS = setInterval(() => {
        const heart = document.createElement("div")
        heart.classList.add("heart")
        heart.innerHTML = "&#129505"; 

        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`;

        document.getElementById("App").append(heart)

        const heart2 = document.createElement("div")
        heart2.classList.add("heart")
        heart2.innerHTML = "&#128156";  

        heart2.style.left = `${Math.random() * 100}%`;
        heart2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`;

        document.getElementById("App").append(heart2)
    }, 70)

    setTimeout(()=> {
        clearInterval(mainS)
    }, 20000)
}

let i = 0;
let text = "Happy Birthday Jihan";

function autoWrite() {
    if  (i < text.length) {
        document.querySelector(".main .one").innerHTML += text.charAt(i)
        i++
        setTimeout(autoWrite, 150)
    }
}
setTimeout(autoWrite, 500)

let i2 = 0;
let text2 = "Selamat ulang tahun jihan";

function autoWrite2() {
    if  (i2 < text2.length) {
        document.querySelector(".main .sec").innerHTML += text2.charAt(i2)
        i2++
        setTimeout(autoWrite2, 150)
    }
}
setTimeout(autoWrite2, 500)

let final = document.querySelector(".final")
console.log(final);

let i3 = 0;
let text3 = "I think thats enough:) nana_xct:)";

function autoWrite3() {
    if  (i3 < text3.length) {
        final.innerHTML += text3.charAt(i3)
        i3++
        setTimeout(autoWrite3, 80)
    }
}
setTimeout(autoWrite3, 21000)