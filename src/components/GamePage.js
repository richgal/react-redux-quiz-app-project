import React, {} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './GamePage.css'
import GameRenderComponent from './GameRenderComponent'
import GameFinishComponent from './GameFinishComponent'
import GameStartComponent from './GameStartComponent'

// This components checks if questions are available to start the game
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
            <div className='quiz-game-front'>
            <h2 className='front-h2'>Hi, welcome to the Quiz Game App Project</h2>
            <h2 className='front-h2'>To start the quiz game, add some question to the game on the queston setter page</h2>
            <h2 className='front-h3'>Click on the green button to set some qestions</h2>
            <Link className='front-link' to='/question-setter'>Set some questions</Link>
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



// connect() connects component to redux store
export default connect(mapStateToProps)(GamePage);
