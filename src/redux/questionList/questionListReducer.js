import { ADD_QUESTION } from './questionListTypes'
import { REMOVE_QUESTION } from './questionListTypes'

const initialState = {
    quiestionList: []
}

const questionListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_QUESTION: return {
            ...state,
            quiestionList: [action.payload, ...state.quiestionList]
        }

        case REMOVE_QUESTION: return {
            ...state,
            quiestionList: state.quiestionList.filter(object => object.questionForm.uId !== action.payload)
        }

        default: return state;

    }
}

export default questionListReducer;