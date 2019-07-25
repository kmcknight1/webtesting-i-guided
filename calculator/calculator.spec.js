const { add } = require("./calculator.js");

// test away!

describe("calculator.js", () => {
  describe("add() method", () => {
    //add two numbers
    it("should add two numbers", () => {
      //arrange (setup)
      //act (execute the code under test)
      //assert (check the result)
      expect(add(2, 2)).toBe(4);
      expect(add(0, 2)).toBe(2);
      expect(add(1, -2)).toBe(-1);
    });

    it("should return null if no arguments provided", function() {
      expect(add()).toBeNull();
    });

    it("returns null if called with non numeric args", () => {
      expect(add(NaN, 1)).toBeNull();
      expect(add({ name: "katie" }, 1)).toBeNull();
      expect(add("Katie", 1)).toBeNull();
      expect(add([1, 2, 3], 1)).toBeNull();
      expect(add(null, 1)).toBeNull();
      expect(add(undefined, 1)).toBeNull();
      expect(add(false, 1)).toBeNull();
      expect(add(true, 1)).toBeNull();
    });

    it("should handle any number of arguments", () => {
      expect(add(1, 1, 1)).toBe(3);
      expect(add(-1, 1, 10, 20, -20)).toBe(10);
      expect(add(0, 0, 0)).toBe(0);
      expect(add(100, 100, 100, 100, 100, 100, 100, 100, 100, 100)).toBe(1000);
    });
  });
});

it("runs .spec.js files", () => {
  expect(true).toBe(true);
});

//can add two numbers

//Types of testing

//-unit testing
//    tests a specific unit of code

//-integration testing
//    taking a couple of units and putting them together to test them operating together

//-end to end
//    from the FE routes all the way down to the database, all the way through the app

//How does it know which tests to run?
//    anything inside __tests__ folder
