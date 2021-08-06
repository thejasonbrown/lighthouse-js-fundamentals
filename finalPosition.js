const finalPosition = function (moves) {
  let finalCoord = [0,0];
  for (const move of moves){
    if (move === "north"){
      finalCoord[1] += 1;
    } else if (move === "south") {
      finalCoord[1] -= 1;
    } else if (move === "west") {
      finalCoord[0] -= 1;
    } else {
      finalCoord[0] += 1;
    }
  }
  return finalCoord;
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));