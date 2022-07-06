import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Counter.module.scss'
import { addCount, decCount, decrement, increment, reset } from '../store/actions/counter-action';
import { getCount } from '../store/selectors/counter-selector';



const CounterFcRTK = () => {
  const dispatch = useDispatch()
  const count = useSelector(getCount)

  // console.log(count);
  return (
    <div className={styles.counter}>
      Count: {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addCount(Number(prompt())))}>+n</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(decCount(Number(prompt())))}>-n</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default CounterFcRTK;