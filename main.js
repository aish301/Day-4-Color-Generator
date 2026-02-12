let color = document.getElementById("color-code");
let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");

generateBtn.addEventListener("click", function () {
    let characters = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        randomColor += characters[randomIndex];
    }

    document.querySelector(".color-box").style.backgroundColor = randomColor;
    color.textContent = randomColor;

});

copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(color.textContent);
    alert("Color copied!");
});
