import React from 'react';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';


const Control = (props) => {
    return (
        <div>
            <button onClick={() => props.add()} > + ADD </button>
            <button onClick={() => props.sub()} > - SUB </button>
        </div>
    );
};

/** 
 **  এই একটি built in function
 **  এই function টা একটি object return করবে
 **  store -> index.js যে data আছে এই component এর props হিসেবে pass করবে
**/
function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({ type: "ADD" })
        },
        sub: () => {
            dispatch({ type: "SUB" })
        }
    }
}

//connect() এই function টা call হওয়ার পরে component return করবে যার child/argument হল Count
export default connect(null, mapDispatchToProps)(Control);