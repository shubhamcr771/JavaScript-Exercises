const buttonBar = document.querySelector(".button-bar");

buttonBar.addEventListener("click", function (event) {
  // Check if the clicked element is a button with a data-color attribute
  if (
    event.target.tagName === "BUTTON" &&
    event.target.hasAttribute("data-color")
  ) {
    const color = event.target.getAttribute("data-color");
    buttonBar.style.backgroundColor = color;
  }
});
