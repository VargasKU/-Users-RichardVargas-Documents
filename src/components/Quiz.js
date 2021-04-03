import React, {Component} from 'react'
const hidden = {visibility: 'hidden'}
const visible = {visibility: 'visible'}

class Quiz extends React.Component{
    render(){
        const {quizList, heading, homeStatusOn, numberAnsweredCorrectly, 
            totalAnswered, showAnswer, showNextQuestion, answerShown, 
            showNextAnswerOrTerminate, nextQuestionAndAnswer, 
            addToNumberAnsweredCorrectly, addToTotalAnswered} = this.props
        return(
            <div className = 'quiz-wrap'>
              <div className = 'quiz'>
                <div className = 'quiz-heading'> 
                <h2 >{homeStatusOn? null: heading} </h2> 
                </div>

                <div className = 'score'  style={homeStatusOn===true? hidden: visible}>
                 {numberAnsweredCorrectly}/{totalAnswered}
                </div>

                <div className="question" onClick = {() => {showAnswer()}}>
                  {homeStatusOn === false? showNextQuestion(quizList): null}
                </div>

                <div className="answer" 
                style={answerShown? visible: hidden} >
                  {homeStatusOn === false? showNextAnswerOrTerminate(quizList): null}
                </div>

                <div className = "correct" 
                  style={answerShown? visible: hidden}
                  onClick = {()=> {
                  nextQuestionAndAnswer()
                  addToNumberAnsweredCorrectly()
                  }}>
                  correct
                </div>

                <div className = "wrong" 
                  style={answerShown? visible: hidden}
                  onClick = {()=> {
                  nextQuestionAndAnswer()
                  addToTotalAnswered()
                  }}>
                  wrong
                </div>
              </div>
            </div>
        )
    }
}


export default Quiz; 



