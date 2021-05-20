import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters, onImageError }) => {
  return characters.map((character) => (
    <Character key={character._id} {...character} onImageError={onImageError} />
  ));
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      affiliation: PropTypes.string,
      photoUrl: PropTypes.string,
    })
  ),
};

export default CharacterList;
