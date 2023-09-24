const btn = document.querySelector(".off");
const bgbtn = document.querySelector(".on");
const bd = document.querySelector("#bd");
let flag = 0;
btn.addEventListener("click", () => {
    if (flag === 0) {
        btn.textContent = "Machine is on"
        flag = 1;
    } else {
        btn.textContent = "Machine is off";
        flag = 0;
    }
});
let bg = 0;
bgbtn.addEventListener("click", () => {
    if (bg === 0) {
        bd.style.backgroundColor = "blue";
        bg = 1;
    } else {
        bd.style.backgroundColor = "red";
        bg = 0;
    }
})