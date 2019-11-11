import axios from "axios";

export const getRandomPics = () => {
  return async dispatch => {
    dispatch(handleLoading(true));
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    // console.log("results", result.data);
    let { data } = result;
    dispatch({ type: "SAVE_LOADED_IMAGE", data });
  };
};

export const handleLoading = data => {
  return dispatch => {
    dispatch({ type: "HANDLE_LOADING", data });
  };
};
