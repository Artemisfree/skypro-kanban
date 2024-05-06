import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext'


function LogoutPage() {
	const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
            setTimeout(() => {
                logout()
                navigate('/login');
            }, 2000);
		}, [logout, navigate])

	return (
		<div>
			<p>Выход из профиля...</p>
		</div>
	)
}

export default LogoutPage
