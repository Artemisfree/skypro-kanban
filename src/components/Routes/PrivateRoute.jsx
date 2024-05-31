import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import { useContext } from 'react'

function PrivateRoute() {
	const { user } = useContext(UserContext)
	return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute
