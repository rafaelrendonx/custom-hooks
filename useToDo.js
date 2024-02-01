import { useEffect, useReducer } from "react"
import { toDoReducer } from "../08-useReducer/toDoReducer"


const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || []
}

export const useToDo = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos))
    }, [toDos])

    const onNewToDo = (toDo) => {
        const action = {
            type: 'Add to do',
            payload: toDo
        }

        dispatch(action)
    }

    const onRemoveToDo = (id) => {
        dispatch({
            type: 'Remove to do',
            payload: id
        })
    }

    const onToggleToDo = (id) => {
        dispatch({
            type: 'Toggle to do',
            payload: id
        })
    }

    const toDoCount = toDos.length

    const pendingToDoCount = toDos.filter(toDo => !toDo.done).length

    return { toDos, onNewToDo, onRemoveToDo, onToggleToDo, toDoCount, pendingToDoCount }
}
