import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function RegisterPage() {
	const [firstName, setFirstName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleRegistration = e => {
		e.preventDefault()
		console.log('Регистрация успешна:', { firstName, email, password })
		navigate('/');
	}

	return (
		<div className='wrapper'>
			<div className='container-signup'>
				<div className='modal'>
					<div className='modal__block'>
						<div className='modal__ttl'>
							<h2>Регистрация</h2>
						</div>
						<form className='modal__form-login' onSubmit={handleRegistration}>
							<input
								className='modal__input first-name'
								type='text'
								name='first-name'
								id='first-name'
								placeholder='Имя'
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
							<input
								className='modal__input login'
								type='text'
								name='login'
								id='loginReg'
								placeholder='Эл. почта'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<input
								className='modal__input password-first'
								type='password'
								name='password'
								id='passwordFirst'
								placeholder='Пароль'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							<button className='modal__btn-signup-ent _hover01' type='submit'>
								Зарегистрироваться
							</button>
							<div className='modal__form-group'>
								<p>
									Уже есть аккаунт? <Link to='/login'>Войдите здесь</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterPage