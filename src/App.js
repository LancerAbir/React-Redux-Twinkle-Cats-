import React, { Component } from 'react';
import './App.css';

// Higher Order Component
import { Provider } from 'react-redux';

// Redux Store File
import store from './Store';

import Count from './Components/Count';
import Control from './Components/Control';


/**
***** Redux .....
** Store -> (object data) all data store 
* ! Reducer -> (function) A function who returns a specific amount of state or data, Reducer এর মাধ্যমের Store তৈরি করতে হয় 
* ! Actions -> Actions এর মাধ্যমের Reducer change হবে { type: "name"  }
***** React Component .....
** Dispatch -> যখন action ঘটবে তখন নির্দিষ্ট data Dispatch হয়ে যাবে Store এ
** Subscriber -> Reducer এর মাধ্যমে Store এ Dispatch data update হলেই Subscriber এ notification পেয়ে যাবে
**/


/**
***** Redux এর ক্লিছু builtin function .....
* ! getState() -> Allow to access to state via 
* ! dispatch(action) -> Allows state to be update via
* ! subscribe(listener) -> Register listener via
* ! subscribe(listener) -> Handles unregister ing of listeners via function returned
**/


/**
***** todo list .....
** 1. Create a Reducer
** 2. Create Store with the help of reducer
** 3. Now we can subscribe
** 4. dispatch(action) 
**/


/**
***** work way .....
** 1. React will be responsible for only view layer
** 2. Redux will be responsible for only data layer
** 3. React-Redux (combination work)
**/


///  1. Create a Reducer
///  Reducer 2 টা parameter pass করে (1 - state, 2 - action)
// const reducer = (state = {}, action) => {
//     if (action.type === "A") {
//         return {
//             ...state,
//             A: "i am a"
//         }
//     }
//     if (action.type === "B") {
//         return {
//             ...state,
//             B: "i am b"
//         }
//     }
//     return state
// }


/// 2. Create Store with the help of Reducer
// const store = createStore(reducer) 


/// 3. Subscribe
// store.subscribe(() => {
//     console.log(store.getState());
// })


/// 4. dispatch(action) 
// store.dispatch({ type: "B" })
// store.dispatch({ type: "hello world" })
// store.dispatch({ type: "A" })
// store.dispatch({ type: "hello world" })
// store.dispatch({ type: "hello world" })



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App" >
                    <h1> React Redux </h1>
                    <p>for Twincle Cats</p>
                    <Count />
                    <Control />
                </div>
            </Provider>
        );
    }
}
export default App;



// todo list
// 1. Create a Reducer
// 2. Create Store with the help of reducer
// 3. Now we can subscribe
// 4. dispatch(action) 



