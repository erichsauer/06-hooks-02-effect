import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, gender, eye, hair, weapon, photoUrl }) => {
  return (
    <article>
      {photoUrl ? (
        <img src={photoUrl} alt={name} />
      ) : (
        <img src="http://placekitten.com/300" alt="kittens" />
      )}
      <p>
        {name} ({gender})
      </p>
      {eye && <p>Eye color: {eye}</p>}
      {hair && <p>Hair color: {hair}</p>}
      {weapon && <p>Weapon: {weapon}</p>}
      <Link to="/">Back to list</Link>
    </article>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  eye: PropTypes.string.isRequired,
  hair: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
};

export default CharacterDetail;
