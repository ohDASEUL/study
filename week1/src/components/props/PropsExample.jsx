import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function PropsExample() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default PropsExample;
