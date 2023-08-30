import "./Pokemans.css";

function Pokemans() {
  const randNum = Math.floor(Math.random() * 151) + 1;
  return (
    <div className="pokeDiv">
      <h1 className="pokeh1">Pokemon #{randNum}</h1>
      <img
        className="pokeImg"
        alt="random pokemon"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`}
      ></img>
    </div>
  );
}

export  { Pokemans };
