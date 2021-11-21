import { createStore } from 'redux'
import rootReducer from '../../redux/reducers/RootReducer'

const index = createStore(rootReducer)
export default index
