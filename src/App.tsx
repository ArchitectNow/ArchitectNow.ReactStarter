import React, { Component } from 'react';
import styles from './App.module.scss';
import { Counter } from './components/Counter/Counter';
import { CounterWithHooks } from './components/CounterWithHooks/CounterWithHooks';
import logo from './logo.svg';

interface IAppProps {
}

interface IAppState {
  count: number;
}

class App extends Component<IAppProps, IAppState> {
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
      <div className={styles.App}>
        <header className={styles.Header}>
          <img src={logo} className={styles.Logo} alt="logo"/>

          <section className={styles.Section}>
            <Counter count={count} increment={this.increment} decrement={this.decrement}/>
            <CounterWithHooks/>
          </section>

        </header>
      </div>
    );
  }
}

export default App;
