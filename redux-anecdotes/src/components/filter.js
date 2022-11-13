import { connect } from "react-redux";
import { setFilter } from "../reducers/filterSlice";
const Filter = (props) => {
  return (
    <div>
      Filter
      <input type={'text'} onChange={({ target }) => props.setFilter(target.value)} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter
}
const connectedFilter = connect(null, mapDispatchToProps)(Filter)
export default connectedFilter