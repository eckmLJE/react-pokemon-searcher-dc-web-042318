import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  handleChange = data => {
    this.setState({
      [data.name]: data.value
    });
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.props.handleSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input
              onChange={(e, d) => this.handleChange(d)}
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <Form.Input
              onChange={(e, d) => this.handleChange(d)}
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
            />
            <Form.Input
              onChange={(e, d) => this.handleChange(d)}
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
            />
            <Form.Input
              onChange={(e, d) => this.handleChange(d)}
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
