import React, { useState } from 'react';
import styles from '../../styles/Counter.module.scss'

const CounterFc = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      Count: {count}
      <button onClick={() => setCount(prev => prev+1)}>+</button>
      <button onClick={() => setCount(prev => prev-1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default CounterFc;