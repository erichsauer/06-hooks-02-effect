const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

export default async function fetchFromApi({ id, perPage, pageNumber }) {
  if (id) {
    const res = await fetch(`${URL}/${id}`);
    const { _id, name, gender, eye, hair, weapon, photoUrl } = await res.json();
    return { _id, name, gender, eye, hair, weapon, photoUrl };
  } else {
    const res = await fetch(`${URL}?perPage=${perPage}&page=${pageNumber}`);

    const json = await res.json();
    return json.map(({ _id, name, affiliation, photoUrl }) => ({
      _id,
      name,
      affiliation,
      photoUrl,
    }));
  }
}
