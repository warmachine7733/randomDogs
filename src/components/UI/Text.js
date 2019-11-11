import React from "react";

const Text = props => {
  return (
    <div className={props.className} style={{ color: props.color }}>
      <b>{props.text}</b>
    </div>
  );
};

export default Text;
