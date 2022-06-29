import { Component } from 'react';
import { useParams } from 'react-router-dom';

//const Details = () => {
//  const { id } = useParams();
//  return <h2>{id}</h2>;
//};

class Details extends Component {
  // non si possono usare gli 'use*' (useState, useFunction..)
  constructor(props) {
    super(props);

    this.state = { loading: true }; // this è l'istanza di Details
  }

  async componentDidMount() {
    const res = await fetch(`httpp://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    if (this.state.loading) {
      <h1>loading..</h1>;
    }

    const { name, animal, breed, city, state, description } = this.state;

    return (
      <div className="details">
        <div>
          <h2>{name}</h2>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
        </div>
        <button>Adopt {name}</button>
      </div>
    );
  }
}

export default Details;
