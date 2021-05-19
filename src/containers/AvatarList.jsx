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
      setCharacters(characters);
      setLoading(false);
    })();
  }, []);

  return loading ? <Spinner /> : <CharacterList characters={characters} />;
};

export default AvatarList;
