//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores = []) {
        this.name = name
        this.mass = mass
        this.scores = scores
    }

    addScore = (newScr) => this.scores.push(newScr)

    average = () => {
        let total = 0
        for (let i of this.scores) {
            total += i
        }
        return Math.round(total / this.scores.length * 10) / 10
    }

    status() {
        let avg = this.average()
        let status
        if (avg >= 90) {
            status = "Accepted"
        } else if (avg >= 80 && avg < 90) {
            status = "Reserve"
        } else if (avg >= 70 && avg < 80) {
            status = "Probationary"
        } else {
            status = "Rejected"
        }
        return `${this.name} earned an average test score of ${avg} and has a status of ${status}.`

    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90])
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62])

while (gladGator.average() < 90) {
    gladGator.addScore(100)
}
console.log(gladGator.status())


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.