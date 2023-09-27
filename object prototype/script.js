const s = document.querySelector("h1");

let profile = {
    name: "Shubham",
    age: 23,
    greet: function() {
        s.textContent = `Hi everyone. I am ${profile.name}. I am ${profile.age} Years old.`;

    }
}
profile.greet();