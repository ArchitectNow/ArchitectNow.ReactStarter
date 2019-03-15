import React, { FC, useState } from 'react';
import appStyles from '../../App.module.scss';

export const CounterWithHooks: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={appStyles.Counter}>
      <h5>Counter <br/>(Functional Component with Hooks)</h5>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
