function range(start, end, step){
  const newArray = [];
  if (start == undefined || end == undefined || step == undefined || start > end || step <= 0){
    return newArray;
  } else {
    while (start <= end){
      newArray.push(start);
      start += step;
    }
    return newArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));