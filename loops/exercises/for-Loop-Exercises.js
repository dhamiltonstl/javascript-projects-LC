/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// for (let i = 0; i <= 20; i++) console.log(i)
let l = 0

let countNums = () => {
  if (l === 21) return
  console.log(l)
  l++
  countNums()
}

countNums()

// for (let i = 1; i <= 29; i = i + 2) console.log(i)
let k = 3

let oddCount = () => {
  if (k === 30) return
  if (k % 2 !== 0) console.log(k)
  k++
  oddCount()
}

oddCount()

// for (let i = 12; i >= -14; i = i - 2) console.log(i)
let m = 12

let countEvenDown = () => {
  if (m === -15) return
  if (m % 2 === 0) console.log(m)
  m--
  countEvenDown()
}

countEvenDown()

// for (let i = 50; i >= 20; i--) {
//   if (i % 3 === 0) {
//     console.log(i)
//   }
// }
let h = 50

let challenge = () => {
  if (h === 19) return
  if (h % 3 === 0) console.log(h)
  h--
  challenge()
}

challenge()

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
a. Print each element of the array to a new line.
b. Print each character of the string - in reverse order - to a new line. */
let str = "LaunchCode"
let arr = [1, 5, "LC101", "blue", 42]

// for (let i = 0; i <= arr.length - 1; i++) console.log(arr[i])
let j = 0

let printArr = () => {
  if (j === arr.length) return
  console.log(arr[j])
  j++
  printArr()
}

printArr()

// for (let i = str.length - 1; i >= 0; i--) console.log(str[i])
let r = arr.length - 1

let printRev = () => {
  if (r === -1) return
  console.log(arr[r])
  r--
  printRev()
}

printRev()

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let newArrEven = []
let newArrOdd = []

// for (let i = 0; i <= arr2.length - 1; i++) {
//   if (i % 2 === 0) {
//     newArrEven.push(i)
//   } else {
//     newArrOdd.push(i)
//   }
// }
let n = 0

let oddEvenArrs = () => {
  if (n === arr2.length) return
  if (arr2[n] % 2 === 0) newArrEven.push(arr2[n])
  else newArrOdd.push(arr2[n])
  n++
  oddEvenArrs()
}

oddEvenArrs()

console.log(newArrEven)
console.log(newArrOdd)