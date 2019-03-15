import React, { Component } from 'react';
import appStyles from '../../App.module.scss';

interface ICounterWithStateState { // bad naming
  count: number;
}

export class CounterWithState extends Component<{}, ICounterWithStateState> {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className={appStyles.Counter}>
        <h5>Counter <br/>(Class-based with State)</h5>
        <p>{count}</p>
        <button onClick={this.increment}>Increment</button>
        <button disabled={count === 0} onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
