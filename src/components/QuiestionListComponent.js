import React, {} from 'react'
import { connect } from 'react-redux'
import { removeQuestion } from '../redux';
import './QuiestionListComponent.css'


// this componenet manages the question lists on the question setter page
function QuiestionListComponent(props) {

    const questionArray = props.quiestionList
    const questionArrayLength = questionArray.length

    console.log('Q list', questionArray)
    console.log(props.quiestionList)

    const questionList = (

        <div className='question-holder-set' >
            {questionArray.map((q, index) => (
                <div className='available-questions' key={index}>
                <p className='question-on-list no-overflow'>{q.questionForm.question}</p>
                <button className='remove-button-qlist' type='submit' onClick={() => props.removeQuestion(q.questionForm.uId)}> Remove question </button>
                </div>
              ))}
        </div>
          
      )

    return (
        <div className='main-quetion-holder'>
            { questionArrayLength > 0 ? <h2>Number of available question(s): {questionArrayLength}</h2>  : <h2>No questions are set at the moment, use the form to add some </h2> }
            <div className='secondary-quetion-holder'>
            {questionList}

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quiestionList: state.quiestionList.quiestionList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeQuestion: idToRemove => dispatch(removeQuestion(idToRemove)),
    }
}


// connect() connects component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(QuiestionListComponent);
