import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

const url = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchTerm: ""
    };
  }

  fetchPokemon = () => {
    fetch(url)
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon: pokemon }))
      .then(() => console.log(this.state));
  };

  addPokemon = pokemon => {
    console.log(this.state);
    console.log(pokemon);
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify(newPokemon)
    // })
    //   .then(res => res.json())
    //   .then(createdTask => {
    //     this.setState({
    //       tasks: [...this.state.tasks, createdTask]
    //     });
    //   });
  };

  componentDidMount = () => {
    this.fetchPokemon();
  };

  handleSearch = searchTerm => {
    console.log(searchTerm);
    this.setState({
      searchTerm: searchTerm
    });
  };

  filterPokemon = () => {
    return this.state.pokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(
            (e, data) => this.handleSearch(data.value),
            500
          )}
          showNoResults={false}
        />
        <br />
        <PokemonForm handleSubmit={this.addPokemon} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} />
      </div>
    );
  }
}

export default PokemonPage;
