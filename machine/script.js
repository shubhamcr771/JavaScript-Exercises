const btn = document.querySelector(".off");

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