async function pollGame() {
  const res = await fetch("/game-state");
  const game = await res.json();
  console.log(game);
  
  render(game);

  setTimeout(pollGame, 1000);
}