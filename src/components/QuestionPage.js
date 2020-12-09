import React from 'react'
import './QuestionPage.css'
import QuiestionListComponent from './QuiestionListComponent'
import SetQuestionsComponent from './SetQuestionsComponent'

function QuestionPage() {
    return (
        <div className='question-page'>
            <QuiestionListComponent/>
            <SetQuestionsComponent/>
        </div>
    )
}

export default QuestionPage
