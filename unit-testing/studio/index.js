
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    let message = "!"
    if (num % 5 === 0) message = " Rocks" + message
    if (num % 3 === 0) message = "Code" + message
    if (num % 2 === 0) message = "Launch" + message
    if (message === "!") message = "Rutabagas" + message + " That doesn't work."
    if (message === " Rocks!") return message.trim()
    if (message === "Launch Rocks!") return message += " (CRASH!!!!)"
    return message
  }
}

module.exports = launchcode;

