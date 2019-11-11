import React from "react";
import Text from "../UI/Text";

const DropDown = props => {
  const { label, values, id, action } = props;
  return (
    <>
      <Text text={label} />
      <select
        onChange={e =>
          action({
            value: values.filter(each => each.name == e.target.value)[0]._id,
            id
          })
        }
      >
        {values.map((each, i) => {
          return <option key={i}>{each.name}</option>;
        })}
      </select>
    </>
  );
};

export default DropDown;
