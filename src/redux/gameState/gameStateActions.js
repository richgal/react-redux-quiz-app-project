import {START_GAME} from  './gameStateTypes';
import {CHECK_ANSWER} from  './gameStateTypes';
import {NEXT_QUESTION} from  './gameStateTypes';
import {FINISH_GAME} from  './gameStateTypes';
import {RESET_GAME} from  './gameStateTypes';
import {ADD_POINT} from  './gameStateTypes';

export const startGame = (data) => {
    return {
        type: START_GAME,
        payload: data
    }
}

export const checkAnswer = (data) => {
    return {
        type: CHECK_ANSWER,
        payload: data
    }
}

export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION,
    }
}

export const finishGame = () => {
    return {
        type: FINISH_GAME,
    }
}

export const resetGame = () => {
    return {
        type: RESET_GAME,
    }
}

export const addPoint = () => {
    return {
        type: ADD_POINT,
    }
}