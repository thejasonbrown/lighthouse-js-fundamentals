var num = 99;
while (num >= 3) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    num--;
}

if (num === 2){
  console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!");
  num--;
}

if (num === 1){
  console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
  num--;
}