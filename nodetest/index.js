var arr = [3, 9];
let array = arr.reduce(function (prev, cur, index, arr) {
  console.log(prev)
  console.log(cur)
  return prev + cur;
});
console.log(array)