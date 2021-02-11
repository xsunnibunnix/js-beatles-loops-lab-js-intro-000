function theBeatlesPlay (musicians, instruments) {
  var empty = []
  for (let i=0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts (facts) {
  let newArray = []
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`);
    i++
  }
  return newArray;
}
