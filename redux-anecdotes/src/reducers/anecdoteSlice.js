import { createSlice } from "@reduxjs/toolkit"
import { getAll, create, put } from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateVote(state, action) {
      const id = action.payload.id
      return state.map(anecdote => anecdote.id !== id ? anecdote : action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { updateVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initilizeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await create({ content, votes: 0 })
    dispatch(appendAnecdote(anecdote))
  }
}

export const updateAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await put(content)
    dispatch(updateVote(anecdote))
  }
}

export default anecdoteSlice.reducer