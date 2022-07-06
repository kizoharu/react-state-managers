import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Counter.module.scss'
import { addCount, asyncDecrement, asyncIncrement, decCount, reset } from '../store/actions/counter-action';
import { getCount } from '../store/selectors/counter-selector';


const CounterFcRdxSaga = () => {
  const dispatch = useDispatch()
  const count = useSelector(getCount)

  return (
    <div className={styles.counter}>
      Count: {count}
      <button onClick={() => dispatch(asyncIncrement())}>Promise(+)</button>
      <button onClick={() => dispatch(addCount(Number(prompt())))}>+n</button>
      <button onClick={() => dispatch(asyncDecrement())}>Promise(-)</button>
      <button onClick={() => dispatch(decCount(Number(prompt())))}>-n</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default CounterFcRdxSaga;