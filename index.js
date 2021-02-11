function theBeatlesPlay (musicians, instruments) {
  var empty = []
  for (let i=0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts (facts) {
  while (i < facts.length) {
    facts.push(`${facts[i]}!!!`);
    facts.shift(i);
  }
  return facts;
}
