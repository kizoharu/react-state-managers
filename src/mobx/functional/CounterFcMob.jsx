import counterStore from '../store/counter';
import styles from '../../styles/Counter.module.scss'
import { observer } from 'mobx-react-lite';

const CounterFcMob = observer(() => {
  return (
    <div className={styles.counter}>
      Count: {counterStore.count}
      <button onClick={() => counterStore.increment()}>+</button>
      <button onClick={() => counterStore.decrement()}>-</button>
      <button onClick={() => counterStore.reset()}>reset</button>
    </div>
  );
});

export default CounterFcMob;