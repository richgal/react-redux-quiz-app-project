import React from 'react'
import { connect } from 'react-redux'
import { resetGame } from '../redux';
import './GameFinishComponent.css'

// this component manages is end of the game when finished button clicked
function GameFinishComponent(props) {

    const gameState = props.gameState;
    const gameFinished = gameState.gameFinished
    const playerExist = gameState.completedName
    const score = gameState.playerScore
    

    // game won't render if game is not finished
    if (!gameFinished) {
        return null
    } 


    return (
        <div className='finish-box'>
            <h2>Congratulations {playerExist}! Your final score is {score}</h2>
            <h3 className='finish-h3'>Click the restart button to restart the game</h3>
            <button className='finish-button' onClick={() => props.resetGame()} >Restart Game</button>
        </div>
    )
}

// These create the props
const mapStateToProps = state => {
    return {
        gameState: state.gameState,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetGame: () => dispatch(resetGame()),
    }
}

// connect() connects component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(GameFinishComponent);