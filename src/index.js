import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Quiz from './components/Quiz'
import Facts from './components/Facts'
import Weapons from './components/Weapons'
import M4 from './components/M4'
import M249 from './components/M249'
import M240B from './components/M240B'
import M320 from './components/M320'
import MK19 from './components/MK19'
import M2 from './components/M2'
import M136AT4 from './components/M136AT4'
import Grenades from './components/Grenades'

import Formations from './components/Formations'
import Medical from './components/Medical'
import General from './components/General'
import Terminology from './components/Terminology'
import Landnav from './components/Landnav'
import Tactical from './components/Tactical'

const hidden = {visibility: 'hidden'}
const visible = {visibility: 'visible'}
const division = (a,b) => a/b
const beautifyPercentValue = (x) => x.toFixed(2)
const turnDecimaltoPercent = (x) => x*100+`%`


const weaponOptions = [{name: 'All', quizList: Weapons, heading: 'All Weapons'}, {name: `M4`, quizList: M4, heading: 'M4'}, {name: `M249`, quizList: M249, heading: 'M249'}, {name: `M240B`, quizList: M240B, heading: 'M240B'},
{name: `M320`, quizList: M320, heading: 'M320'}, {name: `MK19`, quizList: MK19, heading: 'MK19'}, {name: `M2`, quizList: M2, heading: 'M2'},
{name: `AT4`, quizList: M136AT4, heading: 'M136AT4'}, {name: `Grenades`, quizList: Grenades, heading: 'Grenades'},]

 const terminologyOptions = [{name: 'All', quizList: Terminology, heading: 'All'}, {name: 'General', quizList: General, heading: 'General'}, {name: 'Tactical', quizList: Tactical, heading: 'Tactical'}, {name: 'Landnav', quizList: Landnav, heading: 'Landnav'},]

class App extends React.Component {
  state = {
    homeStatusOn: true,
    questionAnswerIndex: 0, 
    answerShown: false, 
    totalAnswered: 0, 
    numberAnsweredCorrectly: 0, 
    quizList: null, 
    heading: null, 
    finished: false, 
    menuStatus: 'quiz-app-closed',
    subMenuContent: null, 
  }


  reset = () => {
    this.setState({questionAnswerIndex: 0})
    this.setState({totalAnswered: 0})
    this.setState({numberAnsweredCorrectly: 0})
  }

  sendToHome = () => this.setState({homeStatusOn: true})

  nextQuestionAndAnswer = () => {
    this.setState({questionAnswerIndex: this.state.questionAnswerIndex = this.state.questionAnswerIndex+1})
    this.setState({answerShown: false})
  }

  addToNumberAnsweredCorrectly = () => {
    this.setState({totalAnswered: this.state.totalAnswered + 1})
    this.setState({numberAnsweredCorrectly: this.state.numberAnsweredCorrectly + 1})
  }

  addToTotalAnswered = () => this.setState({totalAnswered: this.state.totalAnswered + 1})

  showNextQuestion = (targetArray) => {if (this.state.questionAnswerIndex < targetArray.length) return targetArray[this.state.questionAnswerIndex].question}

  showNextAnswerOrTerminate = (targetArray) => {
    if(this.state.questionAnswerIndex < targetArray.length){
      return targetArray[this.state.questionAnswerIndex].answer
    }else{
      this.sendToHome()
      this.setState({finished: true})
    }
  }
 
  showNextAnswer = (targetArray) => targetArray[this.state.questionAnswerIndex].answer
  
  showAnswer = () => this.setState({answerShown: true})

  prepQuiz = (quizList, heading) => {
    this.reset()
    this.setState({homeStatusOn: false})
    this.setState({quizList: quizList}) 
    this.setState({heading: heading})  
    this.setState({finished: false})
    this.setState({answerShown: false})
  }

  render(){
    return (
      <>
        <div className = {this.state.menuStatus}>
            <div className = 'banner'><div className="title">11B STUDY GUIDE</div> </div> 
            <div className = {this.state.menuStatus==='quiz-app-closed'? 'menu centered': 'menu'} onClick={()=>this.state.menuStatus === 'quiz-app-closed'? this.setState({menuStatus: 'quiz-app-semi-open'}):null}>
            {this.state.menuStatus === 'quiz-app-closed'?
              <div className="hamburger" 
              ></div>

              :<div>
                <div className = 'weapons menu-section'
                onClick={
                  ()=> {
                    this.setState({menuStatus: 'quiz-app-fully-open'})
                    this.setState({subMenuContent: weaponOptions})
                  }}>
                  
                weapons</div> 


                <div className = 'terminology menu-section'
                onClick={() => {
                  this.setState({menuStatus: 'quiz-app-fully-open'})
                    this.setState({subMenuContent: terminologyOptions}) 
                  }}>terminology</div> 


                <div className = 'medical menu-section' 
                onClick={() => {
                  this.prepQuiz(Medical, 'MEDICAL')
                  this.setState({menuStatus: 'quiz-app-closed'})
                  }}>medical</div> 

                <div className = 'formations menu-section' 
                onClick={() => {
                  this.prepQuiz(Formations, 'FORMATIONS')
                  this.setState({menuStatus: 'quiz-app-closed'})
                  }}>formations</div> 
                  {/* <div className = 'menu-section' style = ''>FAQ</div>  */}
              </div>
              }
           
              
            </div> 
            <div className = "sub-menu" 
            style={this.state.menuStatus === 'quiz-app-fully-open'? visible: hidden}
            >
                {this.state.subMenuContent !== null? this.state.subMenuContent.map(x=><ul className="sub-item" onClick={()=>{
                  this.prepQuiz(x.quizList, x.heading) 
                  this.setState({menuStatus: 'quiz-app-closed'})}}>{x.name}</ul>): null}
            </div>
            <div className='quiz-wrap'onClick={()=>this.setState({menuStatus: 'quiz-app-closed'})}>
            { this.state.finished? <h2 className="up-and-center">You've finished. Your score is {turnDecimaltoPercent(beautifyPercentValue(division(this.state.numberAnsweredCorrectly,
              this.state.totalAnswered)))}</h2>
            : < Quiz 
            quizList={this.state.quizList}
            heading={this.state.heading}
            homeStatusOn={this.state.homeStatusOn}
            numberAnsweredCorrectly={this.state.numberAnsweredCorrectly}
            totalAnswered={this.state.totalAnswered}
            showAnswer={this.showAnswer}
            showNextQuestion={this.showNextQuestion}
            answerShown={this.state.answerShown}
            showNextAnswerOrTerminate={this.showNextAnswerOrTerminate}
            nextQuestionAndAnswer={this.nextQuestionAndAnswer}
            addToNumberAnsweredCorrectly={this.addToNumberAnsweredCorrectly}
            addToTotalAnswered={this.addToTotalAnswered}
            />
          }
          </div>
        </div>
      </>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
