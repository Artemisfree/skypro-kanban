import './App.css'
import ExitPopup from './components/ExitPopup'
import HeaderDiv from './components/HeaderDiv'
import TaskCreationForm from './components/NewCard'
import TaskViewForm from './components/TaskView'
import MainDiv from './components/MainDiv'

function App() {

  return (
		<div className='wrapper'>
			{/* pop-up start */}
			<ExitPopup />
			<TaskCreationForm />
			<TaskViewForm />
			{/* pop-up end */}
			<HeaderDiv />
      <MainDiv />
		</div>
	)
}

export default App
