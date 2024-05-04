import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';


function LoginPage() {
    const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const { login: authenticate } = useAuth()
	const navigate = useNavigate();

    const handleLogin = e => {
			e.preventDefault();
            authenticate()
			navigate('/');
		}

    return (
		<div className='wrapper'>
			<div className='container-signin'>
				<div className='modal'>
					<div className='modal__block'>
						<div className='modal__ttl'>
							<h2>Вход</h2>
						</div>
						<form className='modal__form-login' onSubmit={handleLogin}>
							<input
								className='modal__input'
								type='text'
								name='login'
								id='formlogin'
								placeholder='Эл. почта'
								value={login}
								onChange={e => setLogin(e.target.value)}
							/>
							<input
								className='modal__input'
								type='password'
								name='password'
								id='formpassword'
								placeholder='Пароль'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							<button className='modal__btn-enter _hover01' type='submit'>
								Войти
							</button>
							<div className='modal__form-group'>
								<p>Нужно зарегистрироваться?</p>
                                <Link to='/register'>Регистрируйтесь здесь</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage;