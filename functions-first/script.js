const btn = document.querySelector("button");
btn.addEventListener("click", () =>
  displayMessage("Shubham Singh: Hi there, how are you today?", "chat")
);

function displayMessage(msgText, msgType) {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
  if (msgType === "warning") {
    msg.style.backgroundImage = "url(warning.png)";
    panel.style.backgroundColor = "blue";
    alert("Warning");
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(chat.png)";
    panel.style.backgroundColor = "grey";
  } else {
    msg.style.paddingLeft = "20px";
  }
}
