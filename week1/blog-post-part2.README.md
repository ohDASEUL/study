## 2. useState: 컴포넌트의 상태 관리하기

### 2.1 useState 기본 개념

- 함수형 컴포넌트의 상태 관리용 Hook
- 컴포넌트 리렌더링 후에도 값 유지
- 값 변경 시 컴포넌트 자동 리렌더링

### 2.2 기본 사용법

```jsx
function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
```

주요 특징:

- 배열 구조 분해를 통해 상태값과 setter 함수를 받음
- 초기값 설정 가능
- 함수형 업데이트로 이전 상태 기반 업데이트 가능

### 2.3 useState 심화 사용법

1. **객체 상태 관리**

```jsx
const [user, setUser] = useState({
  name: "",
  age: 0,
  hobby: "",
});

// 객체 상태 업데이트
const updateUser = (field, value) => {
  setUser((prev) => ({
    ...prev,
    [field]: value,
  }));
};
```

2. **지연 초기화**

```jsx
// 무거운 초기화 작업이 필요할 때
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation();
  return initialState;
});
```

3. **이전 상태 기반 업데이트**

```jsx
// 여러 번의 업데이트가 필요할 때
const updateMultipleTimes = () => {
  setNumber((prev) => prev + 1); // 첫 번째 업데이트
  setNumber((prev) => prev + 1); // 두 번째 업데이트
};
```

### 2.4 주의사항과 Best Practices

1. **상태 업데이트 시점**

```jsx
// ❌ 잘못된 방법
setCount(count + 1);
console.log(count); // 아직 업데이트 되지 않은 값

// ✅ 올바른 방법
setCount((prev) => {
  const newCount = prev + 1;
  console.log(newCount); // 업데이트된 값
  return newCount;
});
```

2. **불필요한 상태 피하기**

```jsx
// ❌ 불필요한 상태
const [fullName, setFullName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

// ✅ 최적화된 상태
const [name, setName] = useState({
  first: "",
  last: "",
  full: "",
});
```

## 3. useRef: DOM 조작과 값 보존하기

### 3.1 기본 개념

useRef는 크게 두 가지 용도로 사용:

1. DOM 요소에 직접 접근
2. 렌더링을 발생시키지 않고 값을 보존

### 3.2 DOM 조작 예제

```jsx
function InputExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>포커스</button>
    </div>
  );
}
```

### 3.3 다양한 활용 사례

1. **스크롤 위치 제어**

```jsx
function ScrollExample() {
  const divRef = useRef();

  const scrollToBottom = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

  return (
    <div ref={divRef} style={{ height: "200px", overflow: "auto" }}>
      {/* 내용 */}
    </div>
  );
}
```

2. **이전 값 기억하기**

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>
        현재: {count}, 이전: {prevCountRef.current}
      </p>
    </div>
  );
}
```

### 3.4 주의사항

1. **DOM 접근 시점**

```jsx
// ✅ 안전한 DOM 접근
useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}, []); // 마운트 된 후 실행
```

2. **불필요한 ref 사용 피하기**

```jsx
// ❌ 불필요한 ref 사용
const valueRef = useRef(0);
// 렌더링에 영향을 주어야 하는 값은 state로 관리

// ✅ 적절한 ref 사용
const intervalRef = useRef();
// 렌더링과 무관한 값은 ref로 관리
```

## 정리

세 가지 개념의 핵심을 다시 한번 정리하면:

1. **Props**

   - 컴포넌트 간 데이터 전달
   - 읽기 전용
   - 단방향 데이터 흐름

2. **useState**

   - 컴포넌트의 상태 관리
   - 리렌더링 발생
   - 비동기적 업데이트

3. **useRef**
   - DOM 직접 조작
   - 값 보존
   - 렌더링 없는 값 관리

이 세 가지를 잘 이해하고 적절히 활용하면, React로 더 효율적이고 유지보수하기 좋은 애플리케이션을 만들 수 있습니다.
