const initialState = { loadedImage: "", breedName: "", loading: false };
export const home = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_LOADED_IMAGE":
      return {
        ...state,
        loadedImage: action.data.message,
        breedName: action.data.message
          .split("/")[4]
          .split("-")
          .map(each => each[0].toUpperCase() + each.substring(1))
          .join(" "),
        status: action.data.status
      };
    case "HANDLE_LOADING":
      return {
        ...state,
        loading: action.data
      };
    default:
      return state;
  }
};
