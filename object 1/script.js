const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

let catName = cat['name'];
cat.greeting();
cat['color'] = 'blue';

// Don't edit the code below here!

const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");

para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;

section.appendChild(para1);
section.appendChild(para2);
