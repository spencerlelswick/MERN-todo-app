import { useMutation, useQueryClient } from 'react-query'
import createTodoRequest from '../api/createTodoRequest'
import { useState } from 'react'

const CreateTodoForm = () => {
  const [text, setText] = useState('')
  const queryClient = new useQueryClient()

  const { mutate: createTodo } = useMutation(
    (updatedTodo) => {
      return createTodoRequest(updatedTodo)
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos')
      },
    }
  )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!text) return
        createTodo({
          text: text,
        })
        setText('')
      }}
    >
      <input
        type='text'
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
      <button>create</button>
    </form>
  )
}
export default CreateTodoForm
