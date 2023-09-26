let bandInfo;

// Add your code here
const myFavoriteBand = {
  name: "The Rockin' Tunes",
  nationality: "United States",
  genre: "Rock",
  members: 4,
  formed: 2005,
  split: false,
  albums: [
    {
      name: "First Harmony",
      released: 2008,
    },
    {
      name: "Rhythmic Roar",
      released: 2012,
    },
  ],
};

 bandInfo = `${myFavoriteBand.name} is a ${myFavoriteBand.nationality} rock band formed in ${myFavoriteBand.formed}. The band consists of ${myFavoriteBand.members} members and is known for their energetic rock music. They have released several albums, with their debut album "${myFavoriteBand.albums[0].name}" being released in ${myFavoriteBand.albums[0].released}.`;



// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
