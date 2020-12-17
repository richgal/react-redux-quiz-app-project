import React, {} from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import hash from 'object-hash'
import { addQuestion } from '../redux';
import TextError from './TextError'
import './SetQuestionsComponent.css'
import {listOfQuiz} from '../data/q-data'


const initialValues = {
    questionForm: {
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        correctAnswer: '',
        uId: ''
    }
};


// formik submission setup, to manage button and form input states
const onSubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    console.log('submitProps', onSubmitProps)
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm()
};

// Yup validations for the formik schema
const validationSchema = Yup.object().shape({
    questionForm: Yup.object().shape({
        question: Yup.string().required('Question is required'),
        answer1: Yup.string().required('Answer is required for the 1st answer'),
        answer2: Yup.string().required('Answer is required for the 2nd answer'),
        answer3: Yup.string().required('Answer is required for the 3rd answer'),
        answer4: Yup.string().required('Answer is required for the 4th answer'),
        correctAnswer: Yup.string().required('Check the correct answer'),
        uId: Yup.string()
    })
})

function SetQuestionsComponent(props) {

    //populate question list
    const populate = (qlist) => {
        console.log(qlist[0])
        props.addQuestion(qlist[0])
        props.addQuestion(qlist[1])
        props.addQuestion(qlist[2])
        props.addQuestion(qlist[3])
        props.addQuestion(qlist[4])
    }


    return (    
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // this runs validation on pageload
            validateOnMount
            >
            {formik => {

            // calculate unique identifier
            let hashCalc = hash(formik.values) 
            initialValues.questionForm.uId = hashCalc;

            return (
                
                <Form >

                    
                <div className='question-form-box'>
                <h2>Add questions to the quiz game</h2>                    

                <div className='form-control' >
                    <label htmlFor='question'>Set the question here</label>
                    <ErrorMessage name='questionForm.question' component={TextError}/>
                    <Field as='textarea' id='question' name='questionForm.question' />
                </div>

                <div group='radio'>
                    <div className='form-control' >
                    <label htmlFor='answer1'>Set 1st answer</label>
                    <label className='radio-label'>
                    <Field type="radio" name="questionForm.correctAnswer" value='answer1' />
                    This is the correct answer 
                    </label>
                    <ErrorMessage name='questionForm.answer1' component={TextError}/>
                    <Field as='textarea' id='answer1' name='questionForm.answer1' />
                    
                    </div>

                    <div className='form-control' >
                    <label htmlFor='answer2'>Set 2nd answer</label>
                    <label className='radio-label'>
                    <Field type="radio" name="questionForm.correctAnswer" value='answer2' />
                    This is the correct answer 
                    </label>
                    <ErrorMessage name='questionForm.answer2' component={TextError}/>
                    <Field as='textarea' id='answer2' name='questionForm.answer2' />
                    </div>

                    <div className='form-control' >
                    <label htmlFor='answer3'>Set 3rd answer</label>
                    <label className='radio-label'>
                    <Field type="radio" name="questionForm.correctAnswer" value='answer3' />
                    This is the correct answer 
                    </label>
                    <ErrorMessage name='questionForm.answer3' component={TextError}/>
                    <Field as='textarea' id='answer3' name='questionForm.answer3' />
                    </div>
                    
                    <div className='form-control' >
                    <label htmlFor='answer4'>Set 4th answer</label>
                    <label className='radio-label'>
                    <Field type="radio" name="questionForm.correctAnswer" value='answer4' />
                    This is the correct answer
                    </label>
                    <ErrorMessage name='questionForm.answer4' component={TextError}/>
                    <Field as='textarea' id='answer4' name='questionForm.answer4' />
                    </div>

                    

                </div>

                <div className='question-buttons'>
                    <button className='q-button-reset' type='reset' >Reset form</button>
                    {/*disabled if form contains errors or form is empty / untouched */}
                    <button className='q-button-submit' type='submit' disabled={!formik.dirty || !formik.isValid} onClick={() => (props.addQuestion(formik.values))}>Save question</button>
                </div>

                    
                    {/*To add 5 questions to the list*/}
                <div className='populate-box'>
                    <p>If there are fewer then 2 questions, you can generate some. Click on the "populate" button</p>
                    <button disabled={props.quiestionList.length > 2} className='populate' onClick={() => populate(listOfQuiz)}>populate</button>
                </div>
                </div>
                </Form>
                )}}
            </Formik>
    )
}

// These create the props
const mapStateToProps = state => {
    return {
        quiestionList: state.quiestionList.quiestionList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addQuestion: data => dispatch(addQuestion(data)),
    }
}

// connect() connects component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(SetQuestionsComponent);
