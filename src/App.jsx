import React from 'react'
import { AuthProvider } from './AuthContext'
import RouterComponent from './components/Routes/RouterComponent'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
	return (
		<AuthProvider>
			<RouterComponent />
		</AuthProvider>
	)
}

export default App