import {ADD_QUESTION} from  './questionListTypes';
import {REMOVE_QUESTION} from  './questionListTypes';

export const addQuestion = (data) => {
    return {
        type: ADD_QUESTION,
        payload: data
    }
}

export const removeQuestion = (idToRemove) => {
    return {
        type: REMOVE_QUESTION,
        payload: idToRemove
    }
}
