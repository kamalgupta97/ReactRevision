import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../Redux/Todo/todoAction'
import { TodoInput } from './TodoInput'

export const TodoItem = ({ status, task, id }) => {
    const [modal, setModal] = React.useState(false)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        const action = deleteTodo(id)
        dispatch(action)
    }
    const handleUpdate = (id) => {
        const action = updateTodo(id)
        dispatch(action)

    }
    return (
        <div>
            <span>{task}</span>
            <span>{status ? " Completed " : "  Not Completed "}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleUpdate(id)}>Edit</button>
            {modal && <TodoInput />}
        </div>
    )
}
