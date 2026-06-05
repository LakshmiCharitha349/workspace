//input : [1,2,3,4,5] =>
//output : [[1,2],[2,3],[3,4],[4,5]]

function* flippedConsequtivePairs(input) {
  for (let index = 0; index < input.length - 1; index++) {
    yield [input[index], input[index + 1]];
  }
}

const data = [1, 2, 3, 4, 5];

const numbers = flippedConsequtivePairs(data);
