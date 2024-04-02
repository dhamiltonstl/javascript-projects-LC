function makeLine(size, char = "#") {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += char
    }
    return line
}

// console.log(makeLine(5))

function makeSquare(size, char = "#") {
    let square = ""
    for (i = 0; i < size; i++) {
        square += makeLine(size, char)
        if (i < size - 1) square += "\n"
    }
    return square
}

// console.log(makeSquare(5))

function makeRectangle(width, height, char = "#") {
    let rec = ""
    for (let i = 0; i < height; i++) {
        rec += makeLine(width, char)
        if (i < height - 1) rec += "\n"
    }
    return rec
}

// console.log(makeRectangle(5, 3))

function makeDownwardStairs(height, char = "#") {
    let triangle = ""
    for (let i = 1; i <= height; i++) {
        triangle += makeLine(i, char)
        if (i < height) triangle += "\n"
    }
    return triangle
}

// console.log(makeDownwardStairs(5))

function makeSpaceLine(numSpaces, numChars, char = "#") {
    let res = ""
    for (let i = 0; i < numSpaces + numChars + numSpaces; i++) {
        if (i <= numSpaces - 1) res += " "
        else if (i >= numSpaces && i <= (numSpaces + numChars) - 1) res += char
        else res += " "
    }
    return res
}

// console.log(makeSpaceLine(3, 5))

function makeIsoscelesTriangle(height, char = "#") {
    let triangle = ""
    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, 2 * i + 1, char)
        if (i < height - 1) triangle += "\n"
    }
    return triangle
}

function makeUpsidedownIsosceles(height, char = "#") {
    let triangle = ""
    for (let i = height - 1; i >= 0; i--) {
        triangle += makeSpaceLine(height - i - 1, 2 * i + 1, char)
        if (i >= 0) triangle += "\n"
    }
    return triangle
}

// console.log(makeUpsidedownIsosceles(5))

function makeDiamond(height, char = "#") {
    return makeIsoscelesTriangle(height, char) + "\n" + makeUpsidedownIsosceles(height, char)
}

console.log(makeDiamond(5, "O"))