import React, { useState, useEffect } from 'react';
import Spinner from '../components/app/Spinner';
import CharacterList from '../components/characters/CharacterList';
import fetchFromApi from '../services/avatarApi';

const AvatarList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const characters = await fetchFromApi({ perPage: 5, pageNumber: 1 });
      // characters[0].photoUrl = 'broken';
      setCharacters(characters);
      setLoading(false);
    })();
  }, []);

  const handleImageError = (id) => {
    const updatedCharacters = characters.map((character) => {
      if (id === character._id)
        character.photoUrl = 'http://placekitten.com/300';
      return character;
    });
    setCharacters(updatedCharacters);
  };
  return loading ? (
    <Spinner />
  ) : (
    <CharacterList characters={characters} onImageError={handleImageError} />
  );
};

export default AvatarList;
