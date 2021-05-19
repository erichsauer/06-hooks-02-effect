import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = ({
  _id,
  name,
  gender,
  eye,
  hair,
  weapon,
  photoUrl,
}) => {
  return (
    <article>
      <img src={photoUrl} alt={name} />
      <p>
        {name} ({gender})
      </p>
      <p>Eye color: {eye}</p>
      <p>Hair color: {hair}</p>
      <p>Weapon: {weapon}</p>
      <Link to="/">Back to list</Link>
    </article>
  );
};

CharacterDetail.propTypes = {};

export default CharacterDetail;
