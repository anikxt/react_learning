/* Hooks is a new feature with which we can do fancy things inside of a function component. 
for eg. before, things such as state were not be able to be used inside a functional component, 
but with the use of hooks we can now do that */

import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

export default function CounterHooks({ initialCount }) {
  console.log('Render Counter Hooks');
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext); // theme context value
  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}

// functions does get the props passed into its function

/* we are using object deconstruction in order to make our props easier to read and work with */

/* Conclusion: 
- How to create a functional component by just exporting the function and everything the fucntion returns is just going to be the code that is actually rendered just the same as our Counter over here has a rendered function for a normal class components
- Also looked at how to use props which are just the arguments of the function as well as state by using the useState react hooks
- Also looked at how you need to make sure you always call your hooks in exact same order every single time 
- Also looked at how you can actually use anything you want when setting your state instead of having to always making an object like you must do here in the class version
*/
