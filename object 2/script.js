let bandInfo = "This band is an Indian Classical and It first released his song in 2002";

// Add your code here
const band = {
    name: "Sarang",
    nationality: "Indian",
    genre: "Indian Classical",
    members: 123002,
    formed: 2002,
    split: false,
    albums: [
        {[name: "Shu", released: 4004], [name: "sdkj", released: 8787]}

    
}

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
