document.addEventListener("DOMContentLoaded", function () {

    const images = [
        "url('download.jpeg')",
        "url('images.jpeg')"
    ];

    const wordColor = [
        "purple",
        "#ed2323"
    ];

    const BordeColor = [
        "greenyellow",
        "#fbe6e5"
    ];

    let index = 0;

    const button = document.getElementById("changeBtn");
    const header = document.querySelector(".Header"); 
    const body = document.querySelector(".Content")

    button.addEventListener("click", function () {
        document.body.style.backgroundImage = images[index];
        document.body.style.color = wordColor[index];
        header.style.color = wordColor[index];
        body.style.color = wordColor[index];
        body.style.borderColor = BordeColor[index];

        index = (index + 1) % images.length;
    });

});

function traducir() {
    document.getElementById("par1").innerHTML = `
        <p>Bienvenido al EVA cafe</p>
        <p>MENU</p>
        <p>Americano de Shinji: 45$</p>
        <p>Macchiato de Asuka: 55$</p>
        <p>Cerveza de Misato: 90$</p>
        <p>Expresso del Angel: 20$</p>
    `;
}

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("Music");

    music.volume = 0.05;   
    });