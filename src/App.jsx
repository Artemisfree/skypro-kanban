import './App.css'
import PopExit from './components/PopExit/PopExit'
import Header from './components/Header/Header'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Main from './components/Main/Main'

function App() {

  return (
		<div className='wrapper'>
			{/* pop-up start */}
			<PopExit />
			<PopNewCard />
			<PopBrowse />
			{/* pop-up end */}
			<Header />
      <Main />
		</div>
	)
}

export default App
