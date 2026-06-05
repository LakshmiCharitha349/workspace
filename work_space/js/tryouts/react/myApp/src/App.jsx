import './App.css'
import pokemon from "./data.json"
import { useState } from 'react';
const pokeTypes = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];



const Stats = (props) => Object.entries(props.pokeStats).map(([key, value]) =>
  <tr>
    <td className='clmn1'>{key}</td>
    <td className='clmn2'>{value}</td>
  </tr>
);

const PokeStats = () => {
  const pokeStats = {
    "weight": 69,
    "base hp": 64,
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "speed": 45
  }
  return <Stats pokeStats={pokeStats} />
}

const PokemonImg = ({ poke }) => {
  console.log(poke.url);
  return <div className='img-container'><img className="pic" src={`${poke.url}`} alt={poke.name} /></div>
}


const PokeTypes = ({ pTypes }) => {

  return <th className="clmn2 types">
    {pTypes.map((pType, idx) => <div className={`poke-type-container ${pType}`} id={`${pType}idx`}>{pType}</div>)}
  </th>
}

const Pokemons = (props) => <table className='properties'>
  <thead className='heading'>
    <th className="clmn1">{props.pokemon.name}</th>
    <PokeTypes pTypes={props.pokemon.types} />
  </thead>
  <tbody>
    <PokeStats />
  </tbody>
</table>

const PokeCard = ({ pokemons, activePoke }) => {
  const filterdPokemons = pokemons.filter(p => (p.types.includes(activePoke) || activePoke === "all"));

  return filterdPokemons.map((poke, idx) =>
    <div className="card" id={idx}>
      <PokemonImg poke={poke} />
      <Pokemons pokemon={poke} />
    </div>)
}

const SearchBar = ({ pokemon, onChange, el }) => {

  const searchedPokeList = pokemon.filter(p => (p.name.startsWith(el) || p.name.slice(el.length) === el) && el);

  return <div id="search-bar">
    <input type="text" placeholder='serch pokemon' onChange={(e) => onChange(e)} />
    <ul id="search-list">
      {searchedPokeList.map(p => <li><span id="searched-letters">{el}</span>{p.name.slice(el.length, p.name.length)}</li>)}
    </ul>
  </div>


}

const SideBar = ({ pokeDetails }) => {
  const { pokeTypes, setPokeType, activePoke, pokemon, onChange, el } = pokeDetails


  const allOption = () => setPokeType("all");
  const allBackground = activePoke === "all" ? "all active" : "no-active";

  return <nav className='sidebar' id='nav'>
    <SearchBar pokemon={pokemon} onChange={onChange} el={el} />
    <a className={`poke-types ${allBackground}`} onClick={allOption}>all</a>
    {pokeTypes.map(pType => {
      const onClick = () => setPokeType((p) => `${pType}`);
      const background = (pType === activePoke) ? `${activePoke} active` : "no-active";
      return <a className={`poke-types ${background}`} onClick={onClick}>
        {pType}
      </a>
    })}
  </nav >
}

const App = (props) => {
  const [activePoke, setPokeType] = useState("all");
  const [el, setEl] = useState("");
  const onChange = (e) => setEl(e.target.value);
  const searchedPokemons = pokemon.filter(poke => poke.name.slice(0, el.length) === el);

  return (
    <div className="container">
      {/* <SideBar pokeTypes={pokeTypes} setPoke={setPokeType} activePoke={pokeType} pokemon={data} onChange={onChange} el={el} /> */}
      <SideBar pokeDetails={{pokeTypes, setPokeType, activePoke, pokemon, onChange, el}} />
      <div className="poke-cards">
        <PokeCard pokemons={searchedPokemons} activePoke={activePoke} />
      </div>
    </div>
  )
}

export default App;