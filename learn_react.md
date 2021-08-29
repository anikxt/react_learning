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

## _Project: Recipe List_

- Spread operator (...) is going to take all of the different key value pairs of 'recipe' object and put them as an individual attribute of the 'Recipe'.
- It allows to pass down all of our properties as top levels of the prop instead of being nested inside the Recipe itself.
- The way that react uses the key is it uses the key to know what different parts of the array needs to be rendered.
- useEffect allows us to actually do some form of side effect every time we render our application.
- Second parameter of the useEffect is passed as an array and it's basically all of the different dependencies that you want to depend on.

## _Code Review and Best Practices:_

[ 1 ]

- Each one of the component files contains exactly one component.
- It's always recommended creating a separate file for every single component that you create because it'll just be so much easier to work with when you're going through the code you know exactly what is in each one of your files and every time you find a component you know exactly where to look to actually find the code for that component to figure out what's wrong with your code if you're debugging something.
- So, it is almost always recommend one component per file instead of multiple components per file.

[ 2 ]

- In all of the component files, the 'default' thing that we're exporting is the actual component that we're creating.
- So, if you do have a JavaScript file which has a component inside of it, it is highly recommended that you make the 'default' export that component itself.
- It just makes your import statements appear much easier because you can just import the component and you don't have to worry about the curly braces and stuff like that.
- You just import the component and that allows the end user that is importing that component to even rename it if they need to.
- If it's the export default, it just makes it a lot easier for  them to work with.

[ 3 ]

- When you structure your files for your components, you should try to make sure that all of your state and effect related logic is towards the very top of your functional component or class component.
- Whichever component you're using, it's a lot easier when you include all of your state  props and stuff all in one section inside your component instead of defining state randomly throughout your component all over the place.
- If you just do it all in one place you always know where to look for all of your different state assignments.
- It's highly recommended not actually doing that and making sure that all of your use effects and state and such is all grouped together.
- So, it's just easy to follow what's going on when you come back to read the code.
- "Also, That kind of lends itself to something that I like to do which is put all of the functions I am creating inside of my component at the very end of my component, right before I actually return my JSX right here at the very bottom."
- "I find that easy because then I know for a fact that all of my logic state assignment effects are all going to happen before the functions and everything after that is just going to be functions until I get down to the very bottom of my component and then  that's where I finally am rendering my HTML now" - Kyle Cook

[ 5 ]

- It's really important to break out into components as much as possible.
- With React, the ideal way to do this is to just break apart your application into as many different components as possible.
- The smaller you get your components, the better. Because it means that you can just reuse those components in other places where they make sense and also if you run into a bug, it's so much easier to debug a smaller file as opposed to debugging a larger file.

[ 6 ]

- When is it too small when should you not break it out into a component?
- When you want to think about this as one as when you would never ever ever use this thing ever again and it's kind of small. So, maybe, then it's okay to just include it into your current component or if it becomes too much work to break it out into another component.
- If it shares a lot of the same thing with the parent component and it's very tightly coupled that will require you to pass a lot of things through props or state or something like that to get to the other component.
- So, if it just becomes too hard to break out then sometimes it's good just to keep it in that original base component.
- "It's much harder to break a big component into smaller components. So, i'd always start with smaller components if I were you" - Kyle

[ 7 ]

- It's really recommended to have consistent naming.
- It's highly recommend you have some form of naming scheme around your application.

[ 8 ]

- When you start to get really long elements, it just is a ton of information. Make sure to break it up onto multiple lines and just use a consistent way of breaking things onto multiple lines.

[ 9 ]

- When do you know when it's best to use context and when it's best to use props
- Props are almost always better when you're only passing something down one level. So, you're passing it from a parent to a child.
- It's almost always better to use props instead of context because that's really what props are meant for. They're meant for passing information from a parent to a child.
- But when it comes to context, context is really useful for when you want to pass something from a parent down multiple levels of children or if you want to pass it to  multiple different sections in your application which are not directly linked to that parent. That is when having a context becomes really useful.
- "Generally, I only really use context inside of my main application components." - Kyle

[ 10 ]

- How you actually want to structure your state and your useEffect hooks?
- It's highly recommend breaking out your state into as many small pieces as you can that logically makes sense for you. It's kind of the same thing for useEffect.
- "That's why I really find it the useEffect so much better than the class component life cycle way of doing things because with classes, you're forced to put all of your use effects in the same function but with useEffect, we can actually split those out into multiple functions." - Kyle

[ 11 ]

- It's really important inside of react is the idea of immutability essentially not being able to change something.
- The only way you should change variables that come in through props or through state is by using the set state calls.
- So, for example, In this app.js, we have setSelectedRecipeId or setRecipes. We should never actually mutate or change our recipe array unless we're calling set recipes like this same thing with our selectedRecipeId.
- We should never change it unless we actually call this setSelectedRecipeId function and that's just not only so that react works properly by re-rendering when you make changes but also it makes your code much easier to reason with.
- Because you always know that the recipes array is never going to change and the only way it changes is by calling this function and re-rendering your entire application.
- State and props should never actually be mutated and they should be immutable.
- So, via using an id in our state instead of using an actual object, we're able to use the exact same object from recipes array to get our selected recipe. So, we never actually have two separated objects that we're working with, so that they can never actually get out of sync from each other.
- You almost always should use ids when you are storing things that you can reference from some other object or array that you have.
- It just makes it more consistent. So, you never accidentally get two different objects that are trying to reference the same thing because they could become different.
