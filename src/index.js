module.exports = function getZerosCount(number, base) {
  // your implementation
let calculate = 0;
for (let i = 5; i <= number; i += 5) {
    let number = i;
    while (number % 5 === 0) {
      number /= 5;
      calculate++;
    }
}
return calculate;
}
