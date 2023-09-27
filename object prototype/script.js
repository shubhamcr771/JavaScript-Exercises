const s = document.querySelector("h1");


let profile = {
    name: "Shubham",
    age: 23,
    greet: function() {
        s.textContent = `Hi everyone, I am ${this.name}. I am ${this.age} Years old.`;

    },
    meet: function() {
        a.textContent = `Hi this is funny, I am ${this.name}`;
    }
};


let profile1 = Object.create(profile);
profile1.name = "Ankit";
profile1.age = 20;
profile1.greet(s);
profile.meet(a);


