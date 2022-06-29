import { Link } from 'react-router-dom';
//
// const Pet = ({ name, animal, breed, images, location, id }) => { DESTRUCTURING
const Pet = (props) => {
  const name = props.name;
  const animal = props.animal;
  const breed = props.breed;
  const images = props.images;
  const location = props.location;
  const id = props.id;
  let hero = 'http://pet-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  //*********************************

  // import React from 'react';

  // const Pet = (props) => {
  //   return React.createElement('div', {}, [
  //     React.createElement('h1', {}, props.name),
  //     React.createElement('h2', {}, props.animal),
  //     React.createElement('h3', {}, props.breed),
  //   ]);
  // };

  return (
    <Link to={`/details/${id}`} className="pet">
      <p>{hero}</p>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
