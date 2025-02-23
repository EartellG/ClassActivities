export class Calculator {
  add(a, b) {
    if (a < 0 || b < 0) {
      throw new Error("No negative numbers");
    }
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Division by zero is not allowed.");
    return a / b;
  }

  square(a) {
    return a * a;
  }

  fetchData() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Data fetched successfully"), 1000);
    });
  }
}
