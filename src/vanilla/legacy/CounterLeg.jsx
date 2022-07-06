import React, { Component } from 'react';
import styles from '../../styles/Counter.module.scss'

export default class CounterLeg extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(prevVal => ({count: prevVal.count + 1}))
  }

  decrement() {
    this.setState(prevVal => ({count: prevVal.count - 1}))
  }

  reset() {
    this.setState(() => ({count: 0}))
  }

  render() {
    return (
      <div className={styles.counter}>
        Count: {this.state.count}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}