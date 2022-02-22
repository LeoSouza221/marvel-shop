const initialState = {
  comics: []
};

export const addComic = (state = initialState, action) => {
  console.log('aqui')
  return {
    ...state,
    comics: [...state.comics, action.newComics],
  }
};