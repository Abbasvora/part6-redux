import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteSlice";
import { setNotification } from "../reducers/notificationSlice";

export default function AnecdoteList() {
  let anecdotes = useSelector(state => state.anecdotes.filter((anecdote) => anecdote.content.includes(state.filter)))
  anecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    const votes = anecdote.votes + 1
    dispatch(updateAnecdote({ ...anecdote, votes }))
    dispatch(setNotification(`you voted ${anecdote.content}`, 3))
  }
  return (
    <>

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}