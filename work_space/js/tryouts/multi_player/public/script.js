let game = {
    players: [1, 2],
    activePlayer: 1,
    subState: null, // WAITING_FOR_DEFENDER
    attacker: null,
    defender: null
  };

  const myPlayerId = 1; // change to 2 to simulate other player

  function render() {
    const status = document.getElementById("status");

    status.innerHTML = `
      Active Player: <span class="active">Player ${game.activePlayer}</span><br/>
      State: ${game.subState || "IDLE"}
    `;

    // Attack button visibility
    document.getElementById("attackBtn").style.display =
      game.activePlayer === myPlayerId && !game.subState
        ? "inline-block"
        : "none";

    // Defender dialog
    if (game.subState === "WAITING_FOR_DEFENDER" && game.defender === myPlayerId) {
      document.getElementById("dialog").style.display = "block";
    } else {
      document.getElementById("dialog").style.display = "none";
    }
  }

  function attack() {
    if (game.activePlayer !== myPlayerId) return;

    game.attacker = game.activePlayer;
    game.defender = game.activePlayer === 1 ? 2 : 1;

    game.subState = "WAITING_FOR_DEFENDER";

    console.log("Attack initiated");
    render();
  }

  function defend(troops) {
    console.log("Defender chose:", troops);

    resolveCombat();

    game.subState = null;
    render();
  }

  function resolveCombat() {
    console.log("Combat resolved between Player", game.attacker, "and", game.defender);
  }

  function endTurn() {
    if (game.activePlayer !== myPlayerId) return;

    game.activePlayer = game.activePlayer === 1 ? 2 : 1;
    game.subState = null;

    render();
  }

  document.getElementById("attackBtn").onclick = attack;
  document.getElementById("endTurnBtn").onclick = endTurn;

  render();