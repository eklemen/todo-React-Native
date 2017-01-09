module.exports = (state, action) => {
    switch(action.type) {
        // case 'ADD_TODO': {
        //     let newTodos = [
        //         ...state.todos,
        //         {
        //             text: action.payload,
        //             id: uuid.v4()
        //         }
        //     ];
        //     return {
        //         todos: newTodos
        //     }
        // }

        default:
            return state;
    }
};