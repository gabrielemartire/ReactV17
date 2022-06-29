import Pet from './Pet';

// const Result ({pets}) => { return ( ... )} destructuring
const Results = (params) => {
  const pets = params.pets;
  return (
    <div>
      {!pets.length ? (
        //if no pets found
        <h1>No pets</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            id={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
