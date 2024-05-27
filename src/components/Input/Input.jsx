import React from "react";

function Input(props) {
  return (
    <>
      <input
        {...props.register}
        type={props.type}
        id={props.id}
        className="border w-full py-1.5 px-4 focus:outline-none"
      />
      {props.validations}
    </>
  );
}

export default Input;
