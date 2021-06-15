import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPokemon, setAllPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=5`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 299) {
          return res.json();
        } else {
          setIsLoading(false);
        }
      })
      .then((pokemon) => {
        pokemon = pokemon.results;
        setIsLoading(false);
        setAllPokemon(pokemon);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const loadMore = () => {
    setOffset((prevState) => {
      return prevState + 6;
    });
  };

  return (
    <div className="container">
      {allPokemon.map((pokemon) => {
        const { name } = pokemon;

        return (
          <Link key={name} to={`/pokemon/${name}`}>
            <Card {...pokemon} />
          </Link>
        );
      })}
      <button className="btn" onClick={loadMore}>
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default List;
