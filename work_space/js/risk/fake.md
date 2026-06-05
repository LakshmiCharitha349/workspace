## Stories 

# login 
As a user,
I want to login,
So that I can play the game

- validate username if valid go to home page.
- validate username if empty show message that required field.

---


# Home Page 

As a user,
I want to choose between differnt options
So that I can play a game in different modes.

- able to select quickplay mode.
- able to select host a game mode.
- able to select join a game mode.
- know game details in about section.
- able to logout.

---
            
# logout 

- ask for validation that he wants to loggout 
- if yes take to login page 
- if no take to home page 
- if logged out player session should be deleted 

# create lobby
As a player,
I want to view the list of players currently in lobby 
So that I can track who has joined before the game.

- able to see other players.
- create and display lobby.
- added first player as host.
- should update when new player joins/leaves
---

# Host Game 

As a user,
I want to host a room,
So that other players can join my room and start playing.

- new room is created and displayed.
- provide unique roomid.
- show other players who joined the room.
- remove the players from lobby who left from the room.
- max of 6 players is allowed in room.
- if room is filled new players should not able to add.
- host gets access to start the game when min of 3 players are in lobby.
- able to leave room and go back to home.
---

# Join Game 
As a user,
I want to join an existing room using a room ID,
So that I can play with my peers.

- able to join the room by entering roomid.
- have to be notified about invalid/empty roomid.
- able to leave the room.
- other players should be visible in lobby.
- when leave room option is chosen should go to home page

---

# Quick Play 

As a player who wants to play quickly,
I want to be instantly matched with a random available player and start a game,
so that I can begin playing without creating a room.

- matched with a random available player.
- able to leave the room.
- see other teammates in the lobby.
- when 3 players joined game starts automatically.
---

# initial game setup 

As a player,
I want all territories to be pre-assigned to players with one troop each before the game begins,
so that I can clearly see my controlled territories.

- map should be shown.
- should show the current player's name
- territories should be divided equally among the players
- each territory is pre-assigned with player's troops 1 of each.
- able to identify my troops and territories.
- able to idententify opponent territories.
- golden cavalry is shown.
- continental bonus should be shown.
- players info  should be shown 
- leaving game should be shown
- during setup player's actions should be inhibited 
- after setup all players will get a shared game state
---

# player turn management 

- After the game setup their should be a sequence in player's turn
- when player's turn mark the player as active and player should be able to perform actions
- inactive players  should not be able to perform actions on the map 
 - should be able to
        - see their cards 
        - players info
        - messages
- should display the current player name 
- should skip the eliminated player's turn 


# placing initial troops 

- player should get 13 troops 
- players place a single troops in their territory in each turn 
- validate the player territory while placing the troops 
- show the number of remaining troops 
- update the troops count after placing


# Reinforcement


# normal card trade 
- click on the cards options to see all my cards 
- when user have 3 of a kind or 3 unique cards player should be able to trade
- user gets additional troops based on  golden cavalry's position.
- if invalid set of card show error
- after trade discard the cards from the player's hand

# forced card trade

- when user have 5 or more than 5 cards user have to trade the cards 
- card screen should automatically open when i have 5 or more cards 
- should not be able to exit or play until i have less than 5 cards
- user should trade cards 

---

# get troops 
- player gets the troops equal to  number of territories they own divided by 3 
- player should get a min of 3 troops
- if player owns the continent then player should get additional troops 
equal to continent bonus

# placing troops 
- user territories should be highlighted 
- user should be able able to select the territory and select number of troops and place them 
- validate the selected territory and placed troops 
- update the number of troops on the user territory 
- after all troops are placed user should move to attack phase
---


# Initiate Territory Attack

- attacker's territories should be highlighted  which have more than 1 troop
- attacker should be able to select the territory they want to attack from 
- attacker should be able to reselect their territory to attack from 
- after selecting their own territory neighbouring territories should be highlighted
- attacker should be able to select one of the neighbouring territory 
- attacker should be able to deselect the choosen territory by clicking on it
- validate the territories.
- select the number of troops to attack with 
- max allowed troops to attack with 3
- their should be atleast 1 troop on the territory after the troops are selected to attack 
- wait for the defender to be ready 
- when defender ready attack by rolling the dice 

---

# attack between same territory 
- validate the troops in the territories 
- player should be directly able to select the number of troops to attack with 
- no need to reselect the territories 

# multiple attacks from different territory

- if user attackes and then wants to attack new territory he should select other territory 

# Territory  Defence

- should be notified when getting attacked by opponent 
- territory getting attacked should be highlighted 
- select the number of troops to defend with 
- when ready roll the dice

---

# Resolve Attack 
 
- verify the result of the die. 
- based on the result notify the players (player won / player lost / draw)
- Apply troops losses after based on result and update the troops count.

# capturing territory 

- when defender looses all his troops on the territory the territory will be captured by attacker 
- verify the number of troops on the territory.
- attacker has to move atlest the number of troops he attacked with to the defender's territory 
- attacker can move more troops if he wants to 

# elimination of player

- when defender's all territories are captured then the player should be eliminated 
- the eliminated player should be shown losing screen 
- and should be provided with home option on losing  screen which will send player to home screen
- the attacker should get all the territory cards of defender 

# ending attack phase 
- player should have a end attack option
- when clicked user should move to fortify phase 
---

# fortification

- player have a end turn option 
- all the player territory which have more than 1 troops should be highlighted 
- user should be able to choose 2 conntected territory 
- and choose the number of troops to move 
- validate the number of troops and territory 
- update the number of troops 
- when a territory is selected end turn will be disabled

---

# Getting a territory card 
- this should happen at the end of the turn
- if the attacker has captured atleast 1 territory should get a teritory card
- notify the user about getting a card 

---

# next turn 

- when the current player chooses end turn the turn goes to other player 
- validate the next player's turn 
- update the current player's name
- and notify the players about the turn change


# player winning phase 

- validate if their is only 1 player in the game 
- and should be provided with home button on winning screen which will send player to home screen
- if only 1 player left should show the winning screen to that player 

# players info 

- when the user clicks on the player info
 user should be able to see the players details

- if the player is eliminated their info should be displayed with dim colors 

