import React from "react";
const Image = props => {
  return (
    <>
      <img
        src={props.source}
        style={{ backgroundColor: props.backgroundColor }}
        className={props.className}
        alt="imgComp"
      />
    </>
  );
};

export default Image;
