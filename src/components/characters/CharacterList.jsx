import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  return characters.map((character) => (
    <Character key={character._id} {...character} />
  ));
};

CharacterList.propTypes = {};

export default CharacterList;
