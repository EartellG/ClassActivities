import { Calculator } from "../calculator.js";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    // Reset any changes after each test
  });

  // Basic operations
  it("should add two numbers correctly", () => {
    const result = calculator.add(2, 5);
    expect(result).toEqual(7);
  });
  it("should subtract two numbers correctly", () => {});

  it("should multiply two numbers correctly", () => {});

  it("should divide two numbers correctly", () => {});

  it("should throw an error when dividing by zero", () => {});

  it("should calculate the square of a number correctly", () => {});

  it("should spy on the add method", () => {
    spyOn(calculator, "add").and.callThrough();
    calculator.add(2, 3);
    calculator.add(2, 3);
    expect(calculator.add).toHaveBeenCalledTimes(2);
    expect(calculator.add).toHaveBeenCalledWith(2, 3);
  });

  it("should stub the multiply method", () => {
    spyOn(calculator, "multiply").and.returnValue(55);
    const result = calculator.multiply(10, 10);
    expect(result).toEqual(55);
  });

  // it("should fetch data asynchronously (using done callback)", (done) => {

  // });

  it("should fetch data asynchronously (using async/await)", async () => {});
});
