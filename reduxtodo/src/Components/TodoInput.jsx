import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Todo/todoAction';
import { v4 as uuidv4 } from 'uuid';


export const TodoInput = () => {
    const [task, setTask] = React.useState("")
    const todos = useSelector(item => item.todos)
    console.log(todos)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const action = addTodo({ id: uuidv4(), status: false, task })
        dispatch(action)


    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
    )
}
