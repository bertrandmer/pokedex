import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { customFetch } from "./utils/customFetch";
import Home from "./views/Home";
import PokemonProfile from "./views/PokemonProfile";
import PokemonGame from "./views/PokemonGame";
import "./index.css";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const asyncFetch = async () => {
    const { pokemon } = await customFetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
  
    setPokemonList(pokemon);
    setFilteredList(pokemon);
  };
  useEffect(() => {
    asyncFetch();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:name">
          <PokemonProfile />
        </Route>
        <Route path="/play">
          <PokemonGame />
        </Route>
        <Route exact path="/">
          <Home
            pokemonList={pokemonList}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
        </Route>
      </Switch>
    </Router>
  );
};


export default App;
