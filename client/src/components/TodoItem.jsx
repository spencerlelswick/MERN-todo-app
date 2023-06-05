import { useMutation, useQueryClient } from 'react-query'
import updateTodoRequest from '../api/updateTodoRequest'
import deleteTodoRequest from '../api/deleteTodoRequest'

const TodoItem = ({ todo }) => {
  const queryClient = new useQueryClient()

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => {
      return updateTodoRequest(updatedTodo)
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos')
      },
    }
  )

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => {
      return deleteTodoRequest(updatedTodo)
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos')
      },
    }
  )

  return (
    <div>
      <input
        type='checkbox'
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
        checked={todo.completed}
      />
      <input
        type='input'
        onChange={(e) =>
          updateTodo({
            ...todo,
            text: e.target.value,
          })
        }
        value={todo.text}
      />
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  )
}
export default TodoItem
