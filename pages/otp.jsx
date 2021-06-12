import { useEffect, useRef, useState } from "react";
import MyInput from "../components/MyInput";

const Otp = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [myState, setMyState] = useState("");

  useEffect(() => {
    console.log(myState);
  }, [myState]);

  return (
    <div>
      <MyInput
        chnageFunc={(param) => setMyState(param)}
        value={value1}
        setValue={setValue1}
        refrence={input1}
        inputToFocusTo={input2}
      />
      <MyInput
        value={value2}
        setValue={setValue2}
        refrence={input2}
        inputToFocusTo={input3}
      />
      <MyInput
        value={value3}
        setValue={setValue3}
        refrence={input3}
        inputToFocusTo={input4}
      />
      <MyInput value={value4} setValue={setValue4} refrence={input4} />
    </div>
  );
};

export default Otp;
