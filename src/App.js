import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  console.log('Render App');
  const [theme, setTheme] = useState('redto change */');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === 'red' ? 'blue' : 'red';
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;

/* rendering html inside of div is fairly complex using normal JS, but here's the trick, 
we have something called JSX in React which essentially let's us write HTML inside of JavaScript */

/* () allows to indent our code onto multiple line to make it more readable.
() also allows us to return mutiple different sets of code deeply nested inside each other */

/* <> </> these empty elements essentially allows us to return multiple things
and not actually have them wrapped in anything at all */

/* React allows us to pass information to a Component using something called props (stands for properties).
Props are basically kind of global variable or object.  
The way you set props on the react component is the exact same way you set an attribute in an HTML */

/* If you want to make our site reactive and actually change to the changes that are happening to our site we need to use whats called 'state'.
'state' is really magical because every single time you change the state inside of your component it's going to re-render that entire component to make it work with the state that you just changed. */

/* Context API allows us to deeply pass our props into a bunch of different components at once without having to manually pass it through every single time
It is really useful for deeply nested components that all need to access a specific variable or prop thats from a top level component.
It kind of works like a global variable that is only global to everything inside of app, 
because global variable aren't really possible when using modules inside of react, 
so context is really a great way to do that without to create an actual global variable or manually pass down the prop to every single child that needs it */

/* Context essentially has two portions to it ->
- Provider : providing the value to everything inside of it
- Consumer : it's just consuming that value */

/* When you change your context it doesn't actually re-render your application,
you need to use state in order to re-render your application in order to change your context */
