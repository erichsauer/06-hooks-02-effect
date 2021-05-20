import React, { useState, useEffect } from 'react';
import Controls from '../components/app/Controls';
import Spinner from '../components/app/Spinner';
import CharacterList from '../components/characters/CharacterList';
import fetchFromApi from '../services/avatarApi';

const AvatarList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const characters = await fetchFromApi({ perPage, pageNumber });
      // characters[0].photoUrl = 'http://broken.aol.com';
      setCharacters(characters);
      setLoading(false);
    })();
  }, [perPage, pageNumber]);

  const handlePageNumberChange = (next) => {
    setPageNumber((n) => {
      console.log(characters.length);
      if (next === 'next') return n + 1;
      return n - 1;
    });
  };

  const handlePerPageChange = ({ target: { value } }) => {
    setPerPage(value);
    setPageNumber(1);
  };

  const handleImageError = (id) => {
    const updatedCharacters = characters.map((character) => {
      if (id === character._id)
        character.photoUrl = 'http://placekitten.com/300';
      return character;
    });
    setCharacters(updatedCharacters);
  };
  return (
    <>
      <Controls
        perPage={perPage}
        pageNumber={pageNumber}
        onPerPageChange={handlePerPageChange}
        onPageNumberChange={handlePageNumberChange}
      />
      {loading ? (
        <Spinner />
      ) : (
        <CharacterList
          characters={characters}
          onImageError={handleImageError}
        />
      )}
    </>
  );
};

export default AvatarList;
