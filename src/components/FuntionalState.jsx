import { useState } from "react";

function FunctionalState() {
  let [message, setMessage] = useState("초기값으로 설정");

  const onClickEnter = () => {
    setMessage("안녕하세요!");
  };
  const onClickLeave = () => {
    setMessage("안녕히 가세요!");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default FunctionalState;
