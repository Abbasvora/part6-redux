import { createSlice } from "@reduxjs/toolkit";

const initialState = null
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return null
    }
  }
})

export const { notification, removeNotification } = notificationSlice.actions

let timeId = null

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(notification(content))
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      dispatch(removeNotification())
    }, time * 1000);
  }
}
export default notificationSlice.reducer
