import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
	ContainerSignIn,
	Modal,
	ModalBlock,
	Modalttl,
	ModalFormLogIn,
	ModalInput,
	ModalButtonEnter,
	ModalFormGroup,
} from './Login.styled'

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
			{/* <div className='container-signup'> */}
			<ContainerSignIn>
				{/* <div className='modal'> */}
				<Modal>
					{/* <div className='modal__block'> */}
					<ModalBlock>
						{/* <div className='modal__ttl'>
							<h2>Регистрация</h2>
						</div> */}
						<Modalttl>Регистрация</Modalttl>
						<ModalFormLogIn onSubmit={handleRegistration}>
							<ModalInput
								type='text'
								name='first-name'
								id='first-name'
								placeholder='Имя'
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
							<ModalInput
								type='text'
								name='login'
								id='loginReg'
								placeholder='Эл. почта'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<ModalInput
								type='password'
								name='password'
								id='passwordFirst'
								placeholder='Пароль'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							{/* <button className='modal__btn-signup-ent _hover01' type='submit'>
								Зарегистрироваться
							</button> */}
							<ModalButtonEnter type='submit'>
								Зарегистрироваться
							</ModalButtonEnter>
							<ModalFormGroup>
								<p>
									Уже есть аккаунт? <Link to='/login'>Войдите здесь</Link>
								</p>
							</ModalFormGroup>
						</ModalFormLogIn>
					</ModalBlock>
					{/* </div> */}
				</Modal>
				{/* </div> */}
			</ContainerSignIn>
			{/* </div> */}
		</div>
	)
}

export default RegisterPage