import './App.css'
import { useQuery } from 'react-query'
import readTodosRequest from './api/readTodosRequest'
import ClipLoader from 'react-spinners/ClipLoader'
import TodoItem from './components/TodoItem'
import CreateTodoForm from './components/CreateTodoForm'

function App() {
  const { isLoading, data: todos } = useQuery('todos', readTodosRequest)

  return (
    <div className='App'>
      <h1>MERN Todo App</h1>

      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo._id} />
        })
      )}
      <CreateTodoForm />
    </div>
  )
}

export default App
