import React, { useRef } from "react";

function InputExample() {
  // 1. useRef로 ref 객체 생성
  const inputRef = useRef();

  const focusInput = () => {
    // 3. .current로 DOM에 접근
    inputRef.current.focus();
  };

  return (
    <div>
      {/* 2. ref 속성으로 DOM에 연결 */}
      <input ref={inputRef} />
      <button onClick={focusInput}>포커스</button>
    </div>
  );
}

export default InputExample;
