const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.createElement("h1");

function chooseName(namesArray, paraElement) {
  if (namesArray.length === 0) {
    paraElement.textContent = "The names array is empty.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * namesArray.length);
  const randomName = namesArray[randomIndex];

  paraElement.textContent = `Randomly chosen name: ${randomName}`;
}
chooseName(names, para);

// Don't edit the code below here!

const section = document.querySelector("section");

section.appendChild(para);
