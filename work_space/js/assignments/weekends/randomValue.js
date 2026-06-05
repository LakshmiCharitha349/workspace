function random(start, end) {
  let randomValue = 0;

  for(let begin = start; begin <= end; begin++) {
    randomValue = Math.random() * begin;
    console.log(randomValue);
  }

  return Math.floor(randomValue);
}