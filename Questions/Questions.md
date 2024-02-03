#### 1. What is the difference between Component and PureComponent? Give an example where it might break my app.
   - Pure components do not modify variables outside their scope hence their output is deterministic while regular React componets have access to variables or state outside their scope making the output unpredictable.
#### 2. Context + ShouldComponentUpdate might be dangerous. Why is that?
- This is because of how the ShouldComponentUpdate method runs and it updates the context. It can trigger re-renders each time components that linked to the same context when the context value changes.
#### 3. Describe 3 ways to pass information from a component to its PARENT.
 - Callback functions - Child components get functions passed as props to them. When the function is called the child component passes the data to the parent component.
 ```
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleChildData = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <ChildComponent onDataUpdate={handleChildData} />
      <p>Data from Child: {dataFromChild}</p>
    </div>
  );
};

// child component
import React, { useState } from 'react';

const Child = ({ onDataUpdate }) => {
  const [childData, setChildData] = useState('');

  const handleInputChange = (event) => {    
    const newData = event.target.value;
    setChildData(newData);

    onDataUpdate(newData);
  };

  return (
    <input
      type="text"
      value={childData}
      onChange={handleInputChange}
      placeholder="Type something..."
    />
  );
};

export default Child;

 ```
  - Lifting state - moving the state that needs to be shared between parent and child components.
  - React Context - Allows us to easily share data or state across components without having to pass props through the component tree.
#### 4. Give 2 ways to prevent components from re-rendering.
- Using `React.memo()` to memoize the result of a component
- For class components,`ShouldComponentUpdate()` is used to control when a component should re-render. It re-renders by default since it returns `true`
#### 5. What is a fragment and why do we need it? Give an example where it might break my app.
- A fragment is a React feature that allows multiple elemets to be added within it without creating a parent element or adding an extra element to the DOM.
#### 6. Give 3 examples of the HOC pattern.
- Lifecycle - adding lifecycle methods to a component via a higher order component
- Props proxy - before a component is rendered some extra props are passed to modify the alredy present ones.
- Stateful logic - involves maintaining and updating state  
#### 7. What's the difference in handling exceptions in promises, callbacks and async...await?
- Promises use `.catch()` to handle errors, callbacks handle errors via callback functions and async/await uses `try` `catch` for error handling
#### 8. How many arguments does setState take and why is it async.
- Three arguments:
    - updater(function)
    - object
    - optional callback
- When setState is executed changes are not immediately applied to the state.React sort of schedules the update as other operations run.
#### 9. List the steps needed to migrate a Class to Function Component.
- Attempt to re-write the component into a functional one:
```
  
class ClassComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

const FunctionalComponent = (props) => {
  return <div>Hello, {props.name}</div>;
};

      
```
- Remove any lifecyle method:
```
class ClassComponent extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

import { useEffect } from 'react';

const FunctionalComponent = (props) => {
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount');
    };
  }, []); 
  return <div>Hello, {props.name}</div>;
};

```
- Use react hooks and add import statement(s):
```
import React from 'react';
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

import { useState } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

```
#### 10. List a few ways styles can be used with components.
- In-line styling
- CSS modules
- Styled components
#### 11. How to render an HTML string coming from the server.
- In React we can use the `dangerouslySetInnerHTML` prop that would allow us to inject html directly to the DOM despite  the Cross-Site Scripting vulnerability it exposes the application to. 
