import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const getStats = useCallback(async () => {
    const response = await fetch(url);
    const info = await response.json();
    setInfo(info);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getStats();
  }, [url, getStats]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="pokemon">
        <div className="info">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${info.id}.png`}
            alt={name}
            width="200"
          />
          <h2>{name}</h2>
        </div>
        <div className="stats">
          {info.stats.map((stat, index) => {
            return (
              <p key={index}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Details;
