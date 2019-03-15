import React, { FC } from 'react';
import appStyles from '../../App.module.scss';

interface ICounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const Counter: FC<ICounterProps> = props => {
  return (
    <div className={appStyles.Counter}>
      <h4>Counter with Class Component</h4>
      <p>{props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button disabled={props.count === 0} onClick={props.decrement}>Decrement</button>
    </div>
  );
};
