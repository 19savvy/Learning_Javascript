/*
A function that takes a range of numbers
and returns the sum of all the numbers within the
range, including the start and finish
*/

function range(a, n, s){
  let base = [];
  let st = s;
  if (st == null){
    st = 1;
  }
  if (st < 0){
    for (let i = a; i >= n; i -= Math.abs(st)){
      base.push(i);
    }
  }
  else{
    for (let i = a; i <= n; i += st){
      base.push(i);
    }
  }
  return base;
}
function sum(a){
  let result = 0;
  for (let element of a){
    result += element;
  }
  return result;
}
console.log(sum(range(1, 10, 2)));
