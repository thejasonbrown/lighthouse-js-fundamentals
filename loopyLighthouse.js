for (let x = 100; x <= 200; x++){
  if (!(x % 3)){
    !(x % 4) ? console.log("LoopyLighthouse") : console.log("Loopy");
  } else if (!(x % 4)) {
    console.log("Lighthouse");
  } else {
    console.log(x);
  }
}