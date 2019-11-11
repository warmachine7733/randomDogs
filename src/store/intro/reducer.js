const initialState = { selectedCategory: "" };
export const category = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_CATEGORY":
      return { ...state, selectedCategory: action.data };

    default:
      return state;
  }
};
