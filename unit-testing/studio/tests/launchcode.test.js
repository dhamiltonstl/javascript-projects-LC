// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('should have key called organization with value of nonprofit', function() {
    expect(launchcode.organization).toBe('nonprofit')
  })
  test('should have key called executiveDirector with the value of Jeff', function() {
    expect(launchcode.executiveDirector).toBe('Jeff')
  })
  test('should have key called percentageCoolEmployees with value of 100', function() {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  })
  test('should have key called programsOffered with value of an array with a length of 3 containing ["Web Development", "Data Analysis", "Liftoff"]', function() {
    expect(launchcode.programsOffered).toHaveLength(3)
    expect(launchcode.programsOffered).toStrictEqual(["Web Development", "Data Analysis", "Liftoff"])
  })
  test('should have a method called launchOutput that returns a string', function() {
    expect(typeof launchcode.launchOutput()).toBe('string')
  })
  test('should return the correct string', function() {
    let output1 = launchcode.launchOutput(4)
    let output2 = launchcode.launchOutput(9)
    let output3 = launchcode.launchOutput(25)
    let output4 = launchcode.launchOutput(6)
    let output5 = launchcode.launchOutput(15)
    let output6 = launchcode.launchOutput(10)
    let output7 = launchcode.launchOutput(30)
    let output8 = launchcode.launchOutput(7)

    expect(output1).toBe('Launch!')
    expect(output2).toBe('Code!')
    expect(output3).toBe('Rocks!')
    expect(output4).toBe('LaunchCode!')
    expect(output5).toBe('Code Rocks!')
    expect(output6).toBe('Launch Rocks! (CRASH!!!!)')
    expect(output7).toBe('LaunchCode Rocks!')
    expect(output8).toBe("Rutabagas! That doesn't work.")

  })
});
