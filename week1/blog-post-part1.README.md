# React Hooks 완벽 가이드: Props, useState, useRef

안녕하세요! 오늘은 React의 핵심 개념인 Props와 자주 사용하는 Hooks(useState, useRef)에 대해 자세히 알아보려고 합니다. 각각의 개념을 예제 코드와 함께 살펴보면서, 실제 개발할 때 어떻게 활용하는지, 그리고 주의해야 할 점은 무엇인지 정리해보았습니다.

## 1. Props: 컴포넌트 간 데이터 전달하기

### 1.1 Props란?

- 'properties'의 줄임말
- React 컴포넌트 간 데이터 전달 방법
- 부모 → 자식 컴포넌트로 데이터 전달
- React의 단방향 데이터 흐름 구현하는 핵심 메커니즘

### 1.2 기본 사용법

```jsx
// Hello.jsx
function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
  name: "이름없음",
};

// PropsExample.jsx
function PropsExample() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}
```

위 코드에서 볼 수 있는 주요 특징들:

- 구조 분해 할당으로 props를 깔끔하게 받기
- defaultProps로 기본값 설정
- 여러 개의 props 한번에 전달하기

### 1.3 특별한 Props: children

```jsx
// Wrapper.jsx
function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}
```

children props의 특징:

- 컴포넌트 태그 사이의 내용을 받아올 수 있음
- 레이아웃 컴포넌트 만들 때 유용
- 컴포넌트 합성을 가능하게 함

### 1.4 Props 사용 시 주의사항

1. **불변성 유지**

   ```jsx
   // ❌ 잘못된 예
   function Bad({ name }) {
     name = "새이름"; // Props 직접 수정
     return <div>{name}</div>;
   }
   ```

2. **객체 props 전달 시 주의**

   ```jsx
   // ❌ 안티패턴
   <User info={{ name: "김철수" }} />; // 매 렌더링마다 새로운 객체

   // ✅ 좋은 방법
   const userInfo = { name: "김철수" };
   <User info={userInfo} />; // 동일한 객체 참조
   ```

### 1.5 Props 관련 심화 개념

1. **Props Drilling 문제**

   - 여러 컴포넌트를 거쳐 props를 전달할 때 발생
   - 해결 방법:
     - Context API 사용
     - 상태 관리 라이브러리 (Redux, Recoil 등) 활용
     - 컴포넌트 구조 재설계

2. **Props 타입 체크**

   ```jsx
   import PropTypes from "prop-types";

   function User({ name, age }) {
     return (
       <div>
         {name} ({age}세)
       </div>
     );
   }

   User.propTypes = {
     name: PropTypes.string.isRequired,
     age: PropTypes.number,
   };
   ```

3. **Props로 컴포넌트 전달**
   ```jsx
   function Layout({ header, content, footer }) {
     return (
       <div>
         <header>{header}</header>
         <main>{content}</main>
         <footer>{footer}</footer>
       </div>
     );
   }
   ```

### 1.6 Props 활용 베스트 프랙티스

1. **적절한 네이밍**

   ```jsx
   // ❌ 모호한 이름
   <Button p="20px" c="blue" />

   // ✅ 명확한 이름
   <Button padding="20px" color="blue" />
   ```

2. **필요한 props만 전달**

   ```jsx
   // ❌ 불필요한 props 전달
   <UserProfile {...user} extra={something} />

   // ✅ 필요한 props만 명시적으로 전달
   <UserProfile name={user.name} age={user.age} />
   ```

3. **기본값 활용**
   ```jsx
   function Button({ type = "button", children }) {
     return <button type={type}>{children}</button>;
   }
   ```
