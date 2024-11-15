import React, { useState, useRef } from "react";

function InputSample() {
  // 여러 입력값을 객체로 관리
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  // DOM 선택을 위한 ref 생성
  const nameInput = useRef();

  // 비구조화 할당으로 값 추출
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    // 불변성을 지키면서 객체 업데이트
    setInputs({
      ...inputs, // 기존 객체 복사
      [name]: value, // 특정 값만 업데이트
    });
  };

  const onReset = () => {
    // 입력값 초기화
    setInputs({
      name: "",
      nickname: "",
    });
    // DOM 직접 제어 - 초기화 후 포커스
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput} // ref 연결
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
