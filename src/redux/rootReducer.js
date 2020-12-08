import { combineReducers } from 'redux'
import questionListReducer from './questionList/questionListReducer'
import gameStateReducer from './gameState/gameStateReducer'

const rootReducer = combineReducers({
    quiestionList: questionListReducer,
    gameState: gameStateReducer
})

export default rootReducer;