export const initialState =
  JSON.parse(localStorage.getItem("favourites")) || [];

export function favouritesReducer(state, action) {

  switch (action.type) {

    case "TOGGLE_FAVOURITE":

      const exists = state.find(
        (photo) => photo.id === action.payload.id
      );

      let newState;

      if (exists) {
        newState = state.filter(
          (photo) => photo.id !== action.payload.id
        );
      } else {
        newState = [...state, action.payload];
      }

      localStorage.setItem(
        "favourites",
        JSON.stringify(newState)
      );

      return newState;

    default:
      return state;
  }
}