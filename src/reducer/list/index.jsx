export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUSET':
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload]
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        loading: true,
        movies: []
      };
    default:
      return state;
  }
};
