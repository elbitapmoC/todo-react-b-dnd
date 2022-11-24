import React, { useRef, useState, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Todo } from '../models/todo'

interface Props {
  index: number
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <Draggable draggableId={todo.id.toString()} index={index} key={todo.id}>
      {
        (draggableProvided) => (
          <form
            className='flex rounded-md bg-yellow-300  w-full p-[20px] mt-[15px] transition hover:scale-105 hover:shadow-md'
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
          >
            <span className='flex-1'>{todo.name}</span>
          </form>
        )
      }
    </Draggable>
  )
}

export default TodoItem
