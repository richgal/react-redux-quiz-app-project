import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { startGame, checkAnswer, nextQuestion, finishGame, resetGame, addPoint } from '../redux';
import './GameRenderComponent.css'

function GameRenderComponent(props) {
    const [answer, setAnswer] = useState('')
    const [checkClicked, setCheckClicked] = useState(false)

    const questionArray = props.quiestionList;
    const gameState = props.gameState;
    
    
    let playerExist = gameState.playerName
    let index = props.gameState.indexOfQuestion
    let currentQuestion = questionArray[index].questionForm.question
    let currentAnswer1 = questionArray[index].questionForm.answer1
    let currentAnswer2 = questionArray[index].questionForm.answer2
    let currentAnswer3 = questionArray[index].questionForm.answer3
    let currentAnswer4 = questionArray[index].questionForm.answer4
    const correctAnswer = questionArray[index].questionForm.correctAnswer
    
    


    const handleClick = (answ) => {
        let checkIt = String(answ)
        if (checkIt.includes('answer')) {
            setAnswer(answ)
        } else {
            //setAnswer('')
            }
        }

    const resetClick = () => {
        props.resetGame()
        setAnswer('')
        setCheckClicked(false)

    }

    const finishClick = () => {
        props.finishGame()
        setAnswer('')
        setCheckClicked(false)

    }

    const nextClick = () => {
        props.nextQuestion()
        setAnswer('')
        setCheckClicked(false)

    }


    const checkButton = (data) => {
        props.checkAnswer(data)
        setCheckClicked(true)
        if (data === correctAnswer) {
            console.log('correct')
            props.addPoint()
        } else {
            console.log('false')
        }
        console.log('Evaluate', data === correctAnswer);
    }

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    
    
    // game won't render if player does not exist
    if (playerExist === '') {
        return null
    } 


    return (
        <div >
            <div className='quiz-game' >
                <div className='question-holder'>
                <h2>{currentQuestion}</h2>
                </div>
                <div className='answer-holder'>
                 <div className={answer === 'answer1' ? 'answer active' : 'answer' } onClick={() => handleClick('answer1')}>{currentAnswer1}</div>
                 <div className={answer === 'answer2' ? 'answer active' : 'answer' } onClick={() => handleClick('answer2')}>{currentAnswer2}</div>
                 <div className={answer === 'answer3' ? 'answer active' : 'answer' } onClick={() => handleClick('answer3')}>{currentAnswer3}</div>
                 <div className={answer === 'answer4' ? 'answer active' : 'answer' } onClick={() => handleClick('answer4')}>{currentAnswer4}</div>
                </div>
            </div>
            <div className='button-and-info'>
                <div className='info-placeholder-box'>
                    {answer === correctAnswer ?
                    <p className={checkClicked ? 'info-placeholder' : 'hidden-placeholder'}>You are technically correct. That's the best kind of correct 👌</p> :
                    <p className={checkClicked ? 'info-placeholder' : 'hidden-placeholder'}>Wrong answer ❌</p> 
                    }
                </div>

                <div className='game-buttons'>
                <button className='game-buttons-gen' disabled={answer === '' || checkClicked} onClick={() => checkButton(answer)}>Check</button>
                {gameState.numOfQuestions - 1 === gameState.indexOfQuestion ?
                <button className='game-buttons-gen' disabled={gameState.answerSubmitted === ''} onClick={() => finishClick()}>Finish</button> : 
                <button className='game-buttons-gen' disabled={gameState.answerSubmitted === ''} onClick={() => nextClick()}>Next</button>
                }
                <button className='game-buttons-reset' onClick={() => resetClick()} >Reset Game</button>
                </div>
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
        nextQuestion: () => dispatch(nextQuestion()),
        finishGame: () => dispatch(finishGame()),
        resetGame: () => dispatch(resetGame()),
        addPoint: () => dispatch(addPoint())

    }
}

// connect() connects component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(GameRenderComponent);