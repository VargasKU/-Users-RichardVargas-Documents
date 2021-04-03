
//you are trying to replicate this shitty quiz
//code that runs, but isn't it's own component
ThisIsOldCodeThatNeedsToBeCleanedUp = () => {

<div className = 'quiz-wrap'>
              <div className = 'quiz'>
                <div className = 'quiz-heading'> 
                  {this.state.genOrdStatusOn? <h2>General Orders</h2>: null}
                  {this.state.weaponsStatusOn? <h2>Weapons</h2>: null} 
                  {this.state.terminologyStatusOn? <h2>Terminology</h2>: null}
                  {this.state.medicalStatusOn? <h2>Medical</h2>: null}
                </div>
                <div className = 'score'  style={this.state.homeStatusOn? hidden: visible}>
                 {this.state.answeredCorrectly}/{this.state.totalAnswered}
                </div>
                <div className="question" onClick = {() => {this.setState({answerShown: true})}}>
                  {this.state.weaponsStatusOn? this.showNextQuestion(Weapons): null}
                </div>
                <div className="answer" style={this.state.answerShown? visible: hidden} >
                  {/* lets keep the func to doing only one thing with the new func of shownext answer*/}
                  {this.state.weaponsStatusOn? this.showNextAnswerOrTerminate(Weapons): null}
                  {/* {this.state.questionAnswerIndex < Weapons.length? this.showNextAnswer(): alert(`You've finished. Your score is ${turnDecimaltoPercent(beautifyPercentValue(division(this.state.answeredCorrectly, this.state.totalAnswered)))}`)  } */}
                </div>
                <div className = "correct" 
                  style={this.state.answerShown? visible: hidden}
                  onClick = {()=> {
                  this.nextQuestionAndAnswer()
                  this.setState({answerShown: false})
                  this.setState({totalAnswered: this.state.totalAnswered + 1})
                  this.setState({answeredCorrectly: this.state.answeredCorrectly + 1})
                  }}>
                  correct
                </div>
                <div className = "wrong" 
                  style={this.state.answerShown? visible: hidden}
                  onClick = {()=> {
                  this.nextQuestionAndAnswer()
                  this.setState({answerShown: false})
                  this.setState({totalAnswered: this.state.totalAnswered + 1})
                  }}>
                  wrong
                </div>
              </div>
            </div>
}


/*this is what needs to be defined as props 
this.state.genOrdStatusOn
this.state.weaponsStatusOn
this.state.terminologyStatusOn
this.state.medicalStatusOn
this.state.homeStatusOn
this.state.answeredCorrectly
this.state.totalAnswered
this.setState({answerShown: true})
this.showNextQuestion(Weapons)
this.state.answerShown
this.showNextAnswerOrTerminate(Weapons)
this.nextQuestionAndAnswer()