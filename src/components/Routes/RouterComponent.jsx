import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 
import PrivateRoute from './PrivateRoute';
import MainPage from '../../pages/MainPage';
import LoginPage from '../../pages/Login/LoginPage';
import RegisterPage from '../../pages/Login/RegisterPage'
import CardViewPage from '../../pages/CardView/CardViewPage';
import LogoutPage from '../../pages/Login/LogoutPage';
import NotFoundPage from '../../pages/NotFoundPage';

function RouterComponent() {
	const { isAuthenticated } = useAuth();

    return (
		<Routes>
			<Route element={<PrivateRoute isAuth={isAuthenticated} />}>
				<Route exact path="/" element={<MainPage />} >
					<Route path="/exit" element={<LogoutPage />} />
					<Route path="/card/:id" element={<CardViewPage />} />
				</Route>
			</Route>
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default RouterComponent
