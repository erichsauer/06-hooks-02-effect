import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ _id, name, affiliation, photoUrl }) => {
  return (
    <Link to={_id}>
      <figure>
        <img src={photoUrl} alt={name} />
        <figcaption>
          <h1>{name}</h1>
          <h3>{affiliation}</h3>
        </figcaption>
      </figure>
    </Link>
  );
};

Character.propTypes = {};

export default Character;
