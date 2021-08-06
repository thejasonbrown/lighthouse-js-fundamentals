const chooseStations = function (stations) {
  let goodStations = [];
  for (stations of stations){
    if (stations[1] >= 20 && (stations[2] === "school" || stations[2] === "community centre")){
      goodStations.push(stations[0]);
    }
  }
  return goodStations;
}

const stationOptions = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stationOptions));