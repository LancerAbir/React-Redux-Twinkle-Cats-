import React from 'react';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';

const Count = (props) => {
    return (
        <div>
            <h1> {props.count}</h1>
        </div>
    );
};

/** 
 **  এই একটি built in function
 **  এই function টা একটি object return করবে
 **  store -> index.js যে data আছে এই component এর props হিসেবে pass করবে
**/
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

//connect() এই function টা call হওয়ার পরে component return করবে যার child/argument হল Count
export default connect(mapStateToProps)(Count);