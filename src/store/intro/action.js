export const handleCategory = data => {
  return dispatch => {
    dispatch({ type: "HANDLE_CHANGE_CATEGORY", data });
  };
};
