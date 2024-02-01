
export const toDoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Add to do':
            return [...initialState, action.payload]

        case 'Remove to do':
            return initialState.filter(toDo => toDo.id !== action.payload)

        case 'Toggle to do':
            return initialState.map(toDo => {

                if (toDo.id === action.payload) {
                    return {
                        ...toDo,
                        done: !toDo.done
                    }
                }
                return toDo
            })

        default:
            return initialState
    }
}
