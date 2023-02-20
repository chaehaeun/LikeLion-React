import React, { useState } from "react";

export default function Counter(props) {
  const [countState, setCountState] = useState(props.count);

  // 함수 안에 이벤트 청취 함수를 작성합니다.
  const handleIncrement = () => {
    setCountState((state) => state + props.step);
  };
  const handleDecrement = () => {
    setCountState((state) => state - props.step);
  };

  return (
    <div className="Counter">
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <output>{countState}</output>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

Counter.defaultProps = {
  count: 1,
  max: 10,
  min: 1,
  step: 1,
};
