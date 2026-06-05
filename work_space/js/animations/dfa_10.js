const dfa = {
  q0: { 1: "q0", 0: "q1", finalState: false },
  q1: { 1: "q2", 0: "q2", finalState: true },
  q2: { 1: "q2", 0: "q2", finalState: false },
};

const stateMachine = (string) => {
  let final = dfa["q0"]["1"];

  const result = [...string].reduce((final, num) => dfa[final][num], final);
  return dfa[result]["finalState"];
};
