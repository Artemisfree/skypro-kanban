import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { MainPage } from '../../pages/MainPage';
import LoginPage from '../../pages/Login/LoginPage';
import RegisterPage from '../../pages/Login/RegisterPage'
import CardViewPage from '../../pages/CardView/CardViewPage';
import LogoutPage from '../../pages/Login/LogoutPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { useState } from 'react';

function getLocalStorage() {
	let user = ''
	try {
		user = JSON.parse(localStorage.getItem('user'))
		return user
	}
	catch (err) {
		return ''
	}
}

export const RouterComponent = () => {
	const [isAuth, setIsAuth] = useState(getLocalStorage())

    return (
			<Routes>
				<Route element={<PrivateRoute isAuth={isAuth} />}>
					<Route exact path='/' element={<MainPage isAuth={isAuth} />}>
						<Route
							path='/exit'
							element={<LogoutPage setIsAuth={setIsAuth} />}
						/>
						<Route path='/card/:id' element={<CardViewPage />} />
					</Route>
				</Route>
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage setIsAuth={setIsAuth} />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		)
}
