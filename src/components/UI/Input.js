import React from "react";
import Text from "./Text";

const Input = props => {
  const { action, type, id, value, file, values, name } = props;
  let inputItems = null;
  switch (type) {
    case "text":
      inputItems = (
        <input
          type={type}
          id={id}
          onChange={e => props.action({ value: e.target.value, type, id })}
        />
      );

      break;
    case "number":
      inputItems = (
        <input
          type={type}
          onChange={e => props.action({ value: e.target.value, type, id })}
        />
      );
      break;
    case "button":
      inputItems = (
        <input type={type} value={value} onClick={() => props.action(file)} />
      );
      break;
    // case "file":
    //   inputItems = (
    //     <input
    //       type={type}
    //       accept="image/*"
    //       onChange={e =>
    //         props.action({
    //           value: e.target.files[0],
    //           type,
    //           id
    //         })
    //       }
    //     />
    //   );
    //   break;
    case "radio":
      inputItems = values.map((each, i) => {
        return (
          <span key={i}>
            <input
              type={type}
              name={name}
              value={each}
              onClick={e => props.action({ value: e.target.value, id: name })}
            />
            {each}
            &nbsp;&nbsp;&nbsp;
          </span>
        );
      });
      break;
    default:
      inputItems = (
        <input
          type={type}
          id={id}
          onChange={e => props.action({ value: e.target.value, type, id })}
        />
      );
  }
  return (
    <div className="">
      {/* <div className="">{props.label}</div> */}
      <Text text={props.label} />
      {inputItems}
    </div>
  );
};

export default Input;
