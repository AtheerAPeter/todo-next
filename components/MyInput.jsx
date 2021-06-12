import { useState } from "react";

const MyInput = ({ value, setValue, refrence, inputToFocusTo, chnageFunc }) => {
  return (
    <>
      <input
        ref={refrence}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          inputToFocusTo && inputToFocusTo.current.focus();
        }}
        type="text"
        name=""
        id=""
      />
      <button onClick={() => chnageFunc("from input")}>Chanhge</button>
    </>
  );
};

export default MyInput;
