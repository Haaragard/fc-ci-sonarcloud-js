class calculator {
  static sum(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static times(a, b) {
    return a * b;
  }

  static square(a) {
    return a * a;
  }

  static repeatTextTimes(text, times) {
    return text.repeat(times);
  }

  static sumSubAndSquare(a, b) {
    return this.sum(a, b) * this.sub(a, b) * this.square(a) * this.square(b);
  }
}

module.exports = calculator;
