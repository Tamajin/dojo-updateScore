// write a function updateScore(scores,player,modifier) that returns an array with the modifier applied to the specified player's score.
// example : 

const scores = [
  {
    "player": "Maggie",
    "score": 762
  },
  {
    "player": "Annie",
    "score": 102
  },
  {
    "player": "Sanchez",
    "score": 882
  },
  {
    "player": "Dee",
    "score": 609
  }
];

const updateScore = (scores, player, modifier) => {

    for (let i = 0; i < scores.length; i++) {
        if (player.toLowerCase() === scores[i].player.toLowerCase()) {
            scores[i].score += modifier
        }
        else {
            return "this player doesn't exist"
        }
    }
    return scores
}


const podium = (scores) => {    
    scores.sort(function(a,b) {
       return b.score - a.score})
       return scores.slice(0,3)   
}

console.log(podium(scores))
