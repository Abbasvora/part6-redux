import AnecdoteForm from './components/anecdote-form'
import AnecdoteList from './components/anecdote-list'
import Filter from './components/filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { initilizeAnecdotes } from './reducers/anecdoteSlice'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initilizeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App