module.exports = function longestConsecutiveLength(array) {
  let length = array.length,
      counter = 1,
      chainsLengths = [];
  if (length === 1) {
    return 1;
  }
  if (length === 0) {
    return 0;
  }
  array.sort((a,b) => a - b);
  for (let i = 0; i < length; i++) {
    if (array[i] === array[i + 1]) {continue;}
    if (array[i] + 1 === array[i + 1] && array[i] === array[i + 1] - 1) {
      counter++;
    } else {
      chainsLengths.push(counter);
      counter = 1;
    }
  }
  return Math.max(...chainsLengths);
}
