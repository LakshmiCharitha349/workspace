const parsePosition = (position) => {
  const [x, y, heading] = position.split(" ");
  return { x, y, heading };
};

const deltas = {
  N: { deltaX: 0, deltaY: 1 },
  S: { deltaX: 0, deltaY: -1 },
  E: { deltaX: 1, deltaY: 0 },
  W: { deltaX: -1, deltaY: 0 },
};

const add = (x, deltaX) => parseInt(x) + deltaX;

const roverpath = ({ x, y, heading }, instruction) => {
  if (instruction === "M") {
    [x, y] = [add(x, deltas[heading].deltaX), add(y, deltas[heading].deltaY)];
    return { x, y, heading };
  }

  const dfa = {
    N: { R: "E", L: "W" },
    S: { R: "W", L: "E" },
    W: { R: "N", L: "S" },
    E: { R: "S", L: "N" },
  };

  heading = dfa[heading][instruction];
  return { x, y, heading };
};

const executeInstructions = (position, instructions) => {
  const parsedPosition = parsePosition(position);

  return [...instructions].reduce(
    (roverPosition, currIns) => roverpath(roverPosition, currIns),
    parsedPosition,
  );
};

console.log(executeInstructions("0 0 N", "MMMM"));
console.log(executeInstructions("0 0 N", "LLLL"));
console.log(executeInstructions("0 0 S", "M"));
console.log(executeInstructions("0 0 N", "RL"));
