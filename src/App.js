import React, {useState} from 'react';
// import logo from './logo.svg';
import Quiz from './components/Facts'
import Menu from './components/Menu'
import './App.css';


class App extends Component {
  state = {
    buttonOn = true 
  }
  render(){
    if (this.state.buttonOn === true)
    return(
      <div className="App">
          <h1>
            <Menu 
            weaponFacts = "M4A1"
            battleDrills = 'break contact'
            fieldActions = 'GOTWA'
            />         
          </h1>
        </div>
    )
  }
}


//from updated video with Eve Porcello

// function App() {
//   const [manager, setManager] = useState('Alex')
//   // useEffect(() => {
//   //     alert(`checked: ${checked.toString()}`)
//   //   }
//   // )
//   const [status, setStatus] = useState('Open'); 
//   const [checked, setChecked] = useState(false)
//   return(
//     <>
//       <div>
//         <h1>Manager on Duty: {manager}</h1>
//       </div>
//       <button onClick={() => setManager('Jake')}>
//         change manager
//       </button>
//       <div>
//         <h1>Status: {status}</h1>

//         <button onClick={() => setStatus('Open')}>
//           Open
//         </button>
//         <button onClick={() => setStatus('Back in 5')}>
//           Break
//         </button>
//         <button onClick={() => setStatus('Closed')}>
//           Closed
//         </button>
//       </div>
//       <input 
//         type="checkbox" 
//         value ={checked}
//         onChange  = {() => setChecked( checked => !checked)}
//       /> 
//       {checked ? 'checked' : 'not checked'}
//     </>
//   )
// }



export default App;