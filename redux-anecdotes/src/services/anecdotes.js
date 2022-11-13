import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data
}

const create = async (content) => {
  const result = await axios.post(baseUrl, content)
  return result.data
}

const put = async (content) => {
  const result = await axios.put(`${baseUrl}/${content.id}`, content)
  return result.data
}

export { getAll, create, put }