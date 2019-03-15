# ArchitectNow.ReactStarter

That project utilizes [Create React App](https://github.com/facebookincubator/create-react-app) for it's core setup with **TypeScript** support.

## Base Technologies
1. TypeScript
2. SCSS Modules

## React Components with TypeScript Typings
**1. Class-based Component**
- Provide two `interfaces` for: *internal State* (State) and *external State* (Props)
- Naming convention will be up to your team coding guide/convention. General convention for `Interfaces` in React Typescript would be: `I{ComponentName}{PropsOrState}`
- Extends `React.Component<IProps, IState>` (or `Component` depending on how your import is).
- Provide `{}` for `IProps` or `IState` if one is empty or does not have `State` or `Props`.
- If the component does not have either Props or State, `React.Component` can be left like this without `Type Parameters` 
- Note: If a component does not manage its own State, consider making it a `Functional Component`

```typescript jsx
import React, {Component} from 'react';

interface ICounterProps {
  someProps: string;
}

interface ICounterState {
  someState: string;
}

export class Counter extends Component<ICounterProps, ICounterState> {
  
  /**
   * this.state will have all properties that ICounterState provides
   * this.props will have all properties that ICounterProps provides + "this.props.children"
   */
  
  render() {
    return (
      <> 
        {/*Your component code*/}
      </>
    );
  }
}
```

**2. Functional Component**
- Provide one `interface` for: **external State** (Props) as `I{ComponentName}Props` (Naming Convention is team dependent)
- Type the component with `React.FunctionalComponent<IProps>` or `React.FC<IProps>` (Import dependent)
- Same as `Class-based Components`, if a Component does not have Props, `React.FunctionalComponent` can be left like this without `Type Paremeter`

```typescript jsx
import React, {FunctionalComponent} from 'react';

interface ICounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const Counter: FunctionalComponent<ICounterProps> = props => {
  
  /**
   * props will have all properties that ICounterProps provides + "props.children"
   */
  return (
    <> {/*Your component code*/} </>
  );
}

```

## Styling with SCSS Modules
- From `Create React App 2.0`, Facebook team has supported SCSS and CSS Module by default out of the box.
- To utilize SCSS, `node-sass` has to be installed
```
npm install node-sass
```
or
```
yarn add node-sass
```
- Naming convention must be followed to enable `CSS Module` for your application: `*.module.scss`
- SCSS Modules are scoped to specific SCSS files. For example: Consider two SCSS files: `component-one.module.scss` and `component-two.module.scss`, these two files can have some same class names with different CSS, the CSS will be scoped to the appropriate SCSS file that the class is in. Much like `ViewEncapsulation` in `Angular`

```scss
// Counter.module.scss

.Section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
```

```typescript jsx
// Counter.tsx

import React, {FC} from 'react';
import styles from './Counter.module.scss'; // styles can be named anything

export const Counter: FC = props => {
  return (
    <section className={styles.Section}>
      {/*Your component code*/}
    </section>
  );
}
```

## React Hooks
- `React Hooks` are new features that were added in `react 16.8`. 
- `React Hooks` provides state-managing capabilities to `Functional Components`. With `React Hooks`, the whole React application can be written with `Functional Component`.
- With `TypeScript`, `Hooks` are also type-safe, making it very easy to write a Component that can manage its states.

```typescript jsx
// CounterWithHooks component from src/components/CounterWithHooks

import React, { FC, useState } from 'react';
import appStyles from '../../App.module.scss';

export const CounterWithHooks: FC = () => {
  // useState() takes in an initial value and will always return an array with two values:
  // 1. The state with the same type as the initial value. Eg: Here, count will be of type "number"
  // 2. The function used to change the state, usually named: set{StateNameInTitleCase} and will expect an argument with the initial vaue type. Eg: Here, setCount(arg: number)
  const [count, setCount] = useState(0);

  return (
    <div className={appStyles.Counter}>
      <h4>Counter with Hooks</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

```

## To be added
---
# Create React App Readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
