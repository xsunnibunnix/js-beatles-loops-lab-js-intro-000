function theBeatlesPlay (musicians, instruments) {
  var empty = []
  for (let i=0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts (facts) {
  let newArray = []
  while (facts.length>=0) {
    newArray.push(`${facts[i]}!!!`);
  }
  return newArray;
}
