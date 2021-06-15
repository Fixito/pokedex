import React, { useEffect, useState } from "react";

const Card = ({ name }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setError(true);
          throw new Error(res.statusText);
        }
      })
      .then((pokemon) => {
        setPokemon(pokemon);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [url]);

  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="card">
          <img src={pokemon.sprites.front_default} alt={name} width="150" />
          <div className="card__body">
            <div className="card__info">
              <h5 className="card__title">{name}</h5>
              <p className="card__type">
                {pokemon.types[0].type.name}
                {pokemon.types.length > 1 && ` / ${pokemon.types[1].type.name}`}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Card;
