/// <reference types="react-scripts" />

interface Good {
  Title: string,
  Poster: string,
  imdbID: string,
  BoxOffice: string,
  Ratings: {
    Value: string
  }[]
}

interface State {
  goods: Good[],
  loading: boolean,
  query: string,
  isRatefull: boolean,
  isPriceLess: boolean
}