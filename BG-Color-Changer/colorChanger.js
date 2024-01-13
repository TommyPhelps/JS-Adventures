document.addEventListener("DOMContentLoaded", () => {
    let background = document.getElementById("colorContainer")
    let grayBtn = document.getElementById("grayBtn");

    grayBtn.addEventListener("click", () => {
        background.style.backgroundColor = "#CCDAD1";
    })
})