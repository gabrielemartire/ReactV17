import React, { useEffect, useState } from 'react';
import './style.css';

function UserData() {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (!stop) {
      setTimeout(() => {
        setCount((oldCount) => oldCount + 1);
      }, 1000);
    }
  }, [stop, count]);

  function handleClick() {
    setStop(false);
  }

  return (
    <div className="Sec">
      <p>Count is {count}</p>
      <button
        onClick={() => {
          setStop(true);
        }}
      >
        Stop
      </button>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default function Sec() {
  return <UserData />;
}
