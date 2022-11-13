import { createAnecdote } from "../reducers/anecdoteSlice"
import { setNotification } from "../reducers/notificationSlice"
import { connect } from "react-redux"


function AnecdoteForm(props) {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    props.createAnecdote(content)
    props.setNotification(`you created ${content}`, 3)

  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name='content' /></div>
        <button>create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default connectedAnecdoteForm

