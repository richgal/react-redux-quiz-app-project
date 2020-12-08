import React, {useState} from 'react'
import { connect } from 'react-redux'
import { startGame, checkAnswer, nextQuestion, finishGame, resetGame } from '../redux';
import './GamePage.css'
import './GameStartComponent.css'


function GameStartComponent(props) {
    const [name, setName] = useState('')

    const questionArray = props.quiestionList;
    const questionArrayLength = questionArray.length;
    const gameState = props.gameState;
    let playerExist = gameState.playerName
    let playerCompleted = gameState.completedName
    let score = gameState.playerScore

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    
    return (
        <div className='game-start'>
            <div>
            {!playerExist && !playerCompleted ? 
            <div>
            <h2>Please submit your name and the game starts</h2>
            <input className='name-input' type='text' onChange={handleChange}></input>
            <button className='name-submit-button' onClick={() => props.startGame([name, questionArrayLength])} >Submit and start Game</button>
            </div> :
            null }
            </div>
            {playerExist ? 
            <h2>{playerExist} is playing now. {playerExist}'s score: {score}</h2> :
            null}
            <div>
              
            </div>
            
        </div>
    )
}

// These create the props
const mapStateToProps = state => {
    return {
        gameState: state.gameState,
        quiestionList: state.quiestionList.quiestionList

    }
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: data => dispatch(startGame(data)),
        checkAnswer: data => dispatch(checkAnswer(data)),
        nextQuestion: data => dispatch(nextQuestion(data)),
        finishGame: () => dispatch(finishGame()),
        resetGame: () => dispatch(resetGame()),

    }
}

// connect() connects component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(GameStartComponent);
