let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautId: 1,
   move: () => Math.floor(Math.random() * 11)
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautId: 2,
   move: () => Math.floor(Math.random() * 11)
};
// After you have created the other object literals, add the astronautID property to each one.

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautId: 3,
   move: () => Math.floor(Math.random() * 11)
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautId: 4,
   move: () => Math.floor(Math.random() * 11)
};

let mossPiglet = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautId: 5,
   move: () => Math.floor(Math.random() * 11)
};

// Create an array to hold the animal objects.
let crew = [
   superChimpOne,
   superChimpTwo,
   salamander,
   beagle,
   mossPiglet
];
const crewReports = (astronaut) => console.log(`${astronaut.name} is a ${astronaut.species}. They are ${astronaut.age} years old and ${astronaut.mass} kilograms. Their ID is ${astronaut.astronautId}.`);
const printReports = (crewArr) => crewArr.map((member) => crewReports(member));

const fitnessTest = (crewArr) => {
   let res = [], numSteps, turns;
   for (let member of crewArr) {
      numSteps = 0;
      turns = 0;
      while (numSteps < 20) {
         numSteps += member.move();
         turns++;
      };
      res.push(`${member.name} took ${turns} turns to take 20 steps.`)
   };
   return res;
};

// Print out the relevant information about each animal.
printReports(crew);
// Start an animal race!
console.log(fitnessTest(crew));
