function judgeVegetable(vegetables, criteria){
  let winner = vegetables[0].submitter;
  let winningValue = vegetables[0][criteria];
  for (let i = 1; i < vegetables.length; i++){
    //console.log(vegetables[i][criteria]);
    if (vegetables[i][criteria] > winningValue){
      winner = vegetables[i].submitter;
      winningValue = vegetables[i][criteria];
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 12,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));