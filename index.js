// add solution here
function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

let i = 0;
let newFacts = [];

function johnLennonFacts(facts) {
  while (i < facts.length) {
    newFacts[i] = `${facts[i]}!!!`
    i++
  }
  return newFacts;
}
