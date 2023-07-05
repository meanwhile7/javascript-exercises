function fibonacci(n) {
    if (n < 0) {
      return 'OOPS';
    }
  
    let fibPrev = 0;
    let fibCurrent = 1;
  
    for (let i = 2; i <= n; i++) {
      const temp = fibCurrent;
      fibCurrent = fibPrev + fibCurrent;
      fibPrev = temp;
    }
  
    return fibCurrent;
  }
  
  module.exports = fibonacci;
  