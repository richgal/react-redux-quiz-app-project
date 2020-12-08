import React from 'react'
import { Provider } from 'react-redux' 
import store from './redux/store'
import './reset.css'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import QuestionPage from './components/QuestionPage';
import GamePage from './components/GamePage'


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <NavBar/>
            <Switch>
            <Route exact path='/' component={GamePage}/>
            <Route exact path='/question-setter' component={QuestionPage}/>
          </Switch>
        </div>
      </Router>

     
    </Provider>
  );
}

export default App;
