// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}
// console.log(orbitCircumference(16))
// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  let time = (orbitCircumference(orbitRadius) / orbitSpeed) * numOrbits
  let roundTime = Math.round(time * 100) / 100
  console.log(`The mission will travel ${orbitCircumference(orbitRadius)} km around the planet, and it will take ${roundTime} hours to complete.`)
  return roundTime
}
// missionDuration(5, 5000)
// Copy/paste your selectRandomEntry function here:
const selectRandomEntry = (idNums) => idNums[Math.floor(Math.random() * (idNums.length))]

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius, orbitSpeed) {
  let spaceWalk = missionDuration(3, orbitRadius, orbitSpeed)
  let oxygenUsed = Math.round(candidate.o2Used(spaceWalk) * 1000) / 1000
  return console.log(`${candidate.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${oxygenUsed} kg of oxygen.`)
}


// Candidate data & crew array.
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};

let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let crew = [candidateA, candidateC, candidateE];

function crewSel() {
  let crewMemSel
  let lowestO2 = crew[0].o2Used(3)
  for (let member of crew) {
    let spaceWalk = (orbitCircumference(2000) / 28000) * 3
    let o2 = Math.round(member.o2Used(spaceWalk) * 1000) / 1000
    if (o2 < lowestO2) {
      crewMemSel = member
      lowestO2 = o2
    }
  }
  return crewMemSel
}

oxygenExpended(crewSel())