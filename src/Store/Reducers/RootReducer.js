// javaScript object
const initialState = {
    count: 100
}

function RootReducer(state = initialState, action) {
    // যদি action এর type ADD হয় তবে 1 যোগ হবে তা নাহলে 1 বিয়োগ হবে
    switch (action.type) {
        case "ADD": {
            return {
                count: state.count + 1
            }
        }
        case "SUB": {
            return {
                count: state.count - 1
            }
        }
        default: return state

    }
};

export default RootReducer;