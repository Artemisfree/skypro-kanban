import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { MainPage } from '../../pages/MainPage';
import LoginPage from '../../pages/Login/LoginPage';
import RegisterPage from '../../pages/Login/RegisterPage'
import LogoutPage from '../../pages/Login/LogoutPage';
import NotFoundPage from '../../pages/NotFoundPage';
import PopBrowsePage from '../PopBrowse/PopBrowsePage';
import PopNewCard from '../PopNewCard/PopNewCard';

export const RouterComponent = () => {
    return (
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route exact path='/' element={<MainPage />}>
						<Route path='/exit' element={<LogoutPage />} />
						<Route path='/card/:id' element={<PopBrowsePage />} />
						<Route path='/newCard' element={<PopNewCard />} />
					</Route>
				</Route>
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		)
}
