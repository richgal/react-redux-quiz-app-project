import React, {useState} from 'react'
import { connect } from 'react-redux'
import { startGame} from '../redux';
import './GamePage.css'
import './GameStartComponent.css'

// This compnenet manages the initialisation of the game
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

    const clickStart = (data) => {
        props.startGame(data)
        setName("")
    }

    
    return (
        <div className='game-start'>
            <div>
            {!playerExist && !playerCompleted ? 
            <div className='game-start-inner'>
            <h2>Please submit your name and the game starts</h2>
            <input className='name-input' type='text' placeholder='Your name here' onChange={handleChange}></input>
            <button disabled={!name} className='name-submit-button' onClick={() => clickStart([name, questionArrayLength])} >Submit and Start</button>
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
    }
}

// connect() connects component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(GameStartComponent);
