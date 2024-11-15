import React from "react";
import PropsExample from "./components/props/PropsExample";
import StateExample from "./components/state/StateExample";
import RefExample from "./components/ref/RefExample";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ borderBottom: "2px solid #333", paddingBottom: "10px" }}>
        React 핵심 개념 예제
      </h1>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#666" }}>1. Props 예제</h2>
        <PropsExample />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#666" }}>2. State 예제</h2>
        <StateExample />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#666" }}>3. Ref 예제</h2>
        <RefExample />
      </section>
    </div>
  );
}

export default App;
