import React, {} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { startGame, checkAnswer, nextQuestion, finishGame, resetGame } from '../redux';
import './GamePage.css'
import GameRenderComponent from './GameRenderComponent'
import GameFinishComponent from './GameFinishComponent'
import GameStartComponent from './GameStartComponent'

function GamePage(props) {

    const questionArray = props.quiestionList;
    const gameState = props.gameState;
    let playerExist = gameState.playerName
    const GameRender = GameRenderComponent
    const GameFinish = GameFinishComponent
    const GameStart = GameStartComponent
    
    
    return (
        <div className='game-page'>

            {questionArray.length === 0 ? 
            <div>
            <h2>Hi, welcome to the Quiz Game App project</h2>
            <h2>To start the quiz game, add some question to the game on the queston setter page</h2>
            <h2>Please click on the link below to set some qestions</h2>
            <Link className='nav-link' to='/question-setter'>Question Setter</Link>
            </div> :
            <div>
            <GameStart/> 
            <GameRender/>
            <GameFinish/>
            </div>
            

            }
            

            {console.log(gameState)}
            {console.log(questionArray)}
            {console.log('Player', playerExist)}
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
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
