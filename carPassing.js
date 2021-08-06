function carPassing(cars, speed){
  let newPassing = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newPassing);
  return cars;
}