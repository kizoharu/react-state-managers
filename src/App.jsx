import './App.css';
import { Provider } from "react-redux";
import CounterFc from './vanilla/functional/CounterFc';
import TodoFc from './vanilla/functional/TodoFc';
// import { CounterLeg } from './vanilla/legacy/CounterLeg';
// import { TodoLeg } from './vanilla/legacy/TodoLeg';
import CounterFcMob from './mobx/functional/CounterFcMob';
import TodoFcMob from './mobx/functional/TodoFcMob';
import CounterFcRdx from './redux/functional/CounterFcRdx';
import TodoFcRdx from './redux/functional/TodoFcRdx';
import { store } from './redux/store';
import TodoFcRdxSaga from './redux-saga/functional/TodoFcRdxSaga';
import {storeSaga} from './redux-saga/store';
import CounterFcRdxSaga from './redux-saga/functional/CounterFcRdxSaga';
import CounterFcRTK from './redux-toolkit/functional/CounterFcRTK';
import TodoFcRTK from './redux-toolkit/functional/TodoFcRTK';
import { storeRTK } from './redux-toolkit/store';

function App() {


  // ᐁ 🠗 ᐁ
  return (
    <div className="App">
      <section>
        <h3>ᐁ Functional components ᐁ</h3>
        <CounterFc/>
        <TodoFc/>
      </section>
      <hr />
      {/* <section>
        <h3>ᐁ Class components ᐁ</h3>
        <CounterLeg/>
        <TodoLeg/>
      </section>
      <hr /> */}
      <section>
        <h3>ᐁ Functional components with MobX ᐁ</h3>
        <CounterFcMob/>
        <TodoFcMob/>
      </section>
      <section>
        <h3>ᐁ Functional components with Redux + Thunk ᐁ</h3>
        <Provider store={store}>
          <CounterFcRdx/>
          <TodoFcRdx/>
        </Provider>
      </section>
      <section>
        <h3>ᐁ Functional components with Redux + Saga ᐁ</h3>
        <Provider store={storeSaga}>
          <CounterFcRdxSaga/>
          <TodoFcRdxSaga/>
        </Provider>
      </section>
      <section>
        <h3>ᐁ Functional components with Redux Toolkit ᐁ</h3>
        <Provider store={storeRTK}>
          <CounterFcRTK/>
          <TodoFcRTK/>
        </Provider>
      </section>
      <hr />
    </div>
  );
}

export default App;