function theBeatlesPlay (musicians, instruments) {
  var empty = []
  for (let i=0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts (facts) {
  let newArray = []
  let i=0
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`);
    i++
  }
  return newArray;
}

function iLoveTheBeatles (num) {
  let emptyArray = []
  num = num + 1;
  do {
    emptyArray.push("I love the Beatles!");
  } while (num < 15)
}
