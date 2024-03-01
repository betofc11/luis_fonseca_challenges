import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import loader from "./assets/loader.gif";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [isFetching, data, nextPage, page] = useFetch(
    "https://pokeapi.co/api/v2/pokemon/",
    []
  );

  console.log({ data });

  return (
    <>
      {!isFetching ? (
        <ul className="pokemon-list">
          {data.map((item) => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <img width="70px" src={loader} />
      )}
      <h5>Page: {page}</h5>
      <button onClick={() => nextPage()}>Next</button>
    </>
  );
}

export default App;
