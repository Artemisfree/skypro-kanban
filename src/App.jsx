import React from 'react'
import { AuthProvider } from './AuthContext'
import RouterComponent from './components/Routes/RouterComponent'

function App() {
	return (
		<AuthProvider>
			<RouterComponent />
		</AuthProvider>
	)
}

export default App