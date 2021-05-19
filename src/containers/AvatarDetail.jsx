import React, { useState, useEffect } from 'react';
import Spinner from '../components/app/Spinner';
import CharacterDetail from '../components/characters/CharacterDetail';
import fetchFromApi from '../services/avatarApi';

const AvatarDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    (async () => {
      const character = await fetchFromApi({ id });
      setCharacter(character);
      setLoading(false);
    })();
  }, []);

  return loading ? <Spinner /> : <CharacterDetail {...character} />;
};

export default AvatarDetail;
