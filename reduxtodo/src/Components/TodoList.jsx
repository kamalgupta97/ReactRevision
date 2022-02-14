import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
    const todos = useSelector(item => item.todos)
    return (
        <>{
            todos?.map(item => <TodoItem {...item} />)
        }
        </>
    )
}
