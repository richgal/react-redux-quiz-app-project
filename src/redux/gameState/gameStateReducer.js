import {START_GAME} from  './gameStateTypes';
import {CHECK_ANSWER} from  './gameStateTypes';
import {NEXT_QUESTION} from  './gameStateTypes';
import {FINISH_GAME} from  './gameStateTypes';
import {RESET_GAME} from  './gameStateTypes';
import {ADD_POINT} from  './gameStateTypes';

const initialState = {
    playerName: '',
    indexOfQuestion: 0,
    numOfQuestions: 0,
    playerScore: 0,
    answerSubmitted: '',
    gameFinished: false,
    completedName: '',
}

const gameStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GAME: return {
            ...state,
            playerName: action.payload[0],
            indexOfQuestion: 0,
            numOfQuestions: action.payload[1],
            answerSubmitted: ''
        }

        case CHECK_ANSWER: return {
            ...state,
            answerSubmitted: action.payload
        }

        case NEXT_QUESTION: return {
            ...state,
            indexOfQuestion: state.indexOfQuestion + 1,
            answerSubmitted: ''
        }

        case ADD_POINT: return {
            ...state,
            playerScore: state.playerScore + 1,
        }

        case FINISH_GAME: return {
            ...state,
            completedName: state.playerName,
            playerName: '',
            indexOfQuestion: 0,
            numOfQuestions: 0,
            answerSubmitted: '',
            gameFinished: true
        }

        case RESET_GAME: return {
            ...state,
            playerName: '',
            indexOfQuestion: 0,
            numOfQuestions: 0,
            playerScore: 0,
            answerSubmitted: '',
            gameFinished: false,
            completedName:''
        }

        default: return state;

    }
}

export default gameStateReducer;