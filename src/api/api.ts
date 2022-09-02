const API_KEY = 'c30817f2';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&t=`;

const avalaibleTitles: string[] = [
  'dd',
  'x',
  'dx',
  'sx',
  'the lord',
  'candy',
  'dallas',
  'wolf',
  'wall st'
];

const request = async (title: string) => {
  return await fetch(`${BASE_URL}${title}`);
}

export const getGoods = async (): Promise<Good[]> => {
  try {
    const respArr: Promise<Good[]> = Promise.all(avalaibleTitles.map(async (titile: string) => await ((await request(titile)).json())));
    return respArr;
  } catch (error) {
    console.log(error);
  }

  return [];
}
