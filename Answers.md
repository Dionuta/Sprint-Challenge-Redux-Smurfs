1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .map
    .Object.assign
    .spread operator - to create a new object while extending the properties of another object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    . store - holds on to the whole state tree.
    . actions - are payloads of information that send data from your application to your store. 
    . reducers - specify how the application's state changes in response to actions sent to the store. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
     Your application state is global, and your component state is local. Compnent state is only used when your component has unique state.

1.  What is middleware?
       The idea behind middleware is to intercept some process, run a function at the intercept point, then (usually)continue the process. Or, sometimes middleware stops the process entirely. 
 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
      Redux-thunk allow you to add async function, like an API call, and inside the .then() we can dispatch an action.

1.  Which `react-redux` method links up our `components` with our `redux store`?
       .CONNECT 