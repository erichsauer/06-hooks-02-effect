import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ _id, name, affiliation, photoUrl, onImageError }) => {
  return (
    <Link to={_id}>
      <figure>
        {photoUrl ? (
          <img src={photoUrl} alt={name} onError={() => onImageError(_id)} />
        ) : (
          <img src="http://placekitten.com/300" alt="kittens" />
        )}
        <figcaption>
          <h1>{name}</h1>
          <h3>{affiliation}</h3>
        </figcaption>
      </figure>
    </Link>
  );
};

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  onImageError: PropTypes.func.isRequired,
};

export default Character;
