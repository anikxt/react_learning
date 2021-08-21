# What is React?

- A JavaScript library for building user interfaces.
- A component-based library. (So, the way you build things in react is by splitting them into components and then building those individual components and combining them altogether)
- Automatically re-render your application whenever you start changing the state of your application.

### React

## _JSX :_

- ReactDOM.render does is it essentially says, "Render whatever component you pass it (in our case, this is our App component) inside the document.getElementById('root')."
- Rendering HTML inside of div is fairly complex using normal JS, but here's the trick, we have something called JSX in React which essentially let's us write HTML inside of JavaScript
- () allows to indent our code onto multiple line to make it more readable.
- () also allows us to return multiple different sets of code deeply nested inside each other.
- <> <\/> these empty elements essentially allows us to return multiple things and not actually have them wrapped in anything at all.

## _Class Component :_

- React allows us to pass information to a Component using something called props (stands for properties).
- Props are basically kind of global variable or object.
- The way you set props on the react component is the exact same way you set an attribute in an HTML.
- If you want to make our site reactive and actually change to the changes that are happening to our site we need to use whats called 'state'.
- 'state' is really magical because every single time you change the state inside of your component it's going to re-render that entire component to make it work with the state that you just changed.
- super(props) makes sure your props gets set properly every single time you overrides your constructor.
- this.setState is actually an asynchronous function which means it batches up all the calls to this.setState instead of running them one after the other
- this.setState has two versions:
  -- object version
  -- pass in a variable which is a previous state and it takes a function and this function is just going to return a new state

### **Conclusion : **

       ** What is class component and how to build a class component by extending the component from react
       ** How you can set the state inside of your application by overriding the constructor as well as how we can use the props both inside of our constructor as well as using the props inside of our different render calls by calling this stop props
       ** How to pass in the props using attributes on our components and also looked at the state
       ** How this.setState works for the function version and the non-function version and how it can potentially cause problems if you don't use the function version when you should
       ** Lastly, we looked at setting up addEventListeners here on set of our button so that we can actually change our state and show that how our state re-renders our application and only re-renders the components it needs to

## _Class Component :_

- Hooks is a new feature with which we can do fancy things inside of a function component.
- For eg. before, things such as state were not be able to be used inside a functional component, but with the use of hooks we can now do that
- Functions does get the props passed into its function
- we are using object deconstruction in order to make our props easier to read and work with

### **Conclusion : **

    ** How to create a functional component by just exporting the function and everything the fucntion returns is just going to be the code that is actually rendered just the same as our Counter over here has a rendered function for a normal class components
    ** Also looked at how to use props which are just the arguments of the function as well as state by using the useState react hooks
    ** Also looked at how you need to make sure you always call your hooks in exact same order every single time
    ** Also looked at how you can actually use anything you want when setting your state instead of having to always making an object like you must do here in the class version

## _Context API :_

- Context API allows us to deeply pass our props into a bunch of different components at once without having to manually pass it through every single time.
- It is really useful for deeply nested components that all need to access a specific variable or prop that's from a top level component.
- It kind of works like a global variable that is only global to everything inside of app, because global variable aren't really possible when using modules inside of react.
- So, context is really a great way to do that without to create an actual global variable or manually pass down the prop to every single child that needs it.
- Context essentially has two portions to it -> - Provider : providing the value to everything inside of it. - Consumer : it's just consuming that value.
- When you change your context it doesn't actually re-render your application, you need to use state in order to re-render your application in order to change your context.
