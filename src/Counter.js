import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  render() {
    console.log('Render Counter');
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(+1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
}

// the way you render things in react component is by using render() function

/* super(props) makes sure your props gets set properly every single time you overrides your constructor */

/* this.setState is atually an asynchronous function which means it batches up all the calls to this.setState instead of running them one after the other */

/* this.setState has two versions:
- object version
- pass in a variable which is a previous state and it takes a function and this function is just going to return a new state
*/

/* Conclusion: 
- What is class component and how to build a class component by extending the component from react
- How you can set the state inside of your application by overriding the constructor as well as how we can use the props both inside of our constructor as well as using the props inside of our different render calls by calling this stop props  
- How to pass in the props using attributes on our components and also looked at the state 
- How this.setState works for the function version and the non-function version and how it can potentially cause problems if you don't use the function version when you should
- Lastly, we looked at setting up addEventListeners here on set of our button so that we can actually change our state and show that how our state re-renders our application and only re-renders the components it needs to.
*/
