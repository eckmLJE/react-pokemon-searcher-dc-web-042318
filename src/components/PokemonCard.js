import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      spriteClicked: false
    };
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img
              onClick={() =>
                this.setState({ spriteClicked: !this.state.spriteClicked })
              }
              src={
                this.state.spriteClicked
                  ? this.props.pokemon.sprites.back
                  : this.props.pokemon.sprites.front
              }
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
