document.addEventListener("DOMContentLoaded", () => {
    // Variable declarations
    let background = document.getElementById("colorContainer")
    let grayBtn = document.getElementById("grayBtn");
    let pinkBtn = document.getElementById("pinkBtn");

    // Gray button click event
    grayBtn.addEventListener("click", () => {
        background.style.backgroundColor = "#CCDAD1";
    })

    // Pink button click event
    pinkBtn.addEventListener("click", () => {
        background.style.backgroundColor = "#FF88DC";
    })
})