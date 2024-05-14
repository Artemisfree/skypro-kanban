import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ContainerSignIn, Modal, ModalBlock, Modalttl, ModalFormLogIn, ModalInput, ModalButtonEnter, ModalFormGroup } from './Login.styled';
import { signIn } from '../../api/auth';


function LoginPage({setIsAuth}) {
	const navigate = useNavigate()

	const [errorMsg, setErrorMsg] = useState('')

	const [inputValue, setInputValue] = useState({
		login: '',
		password: '',
	})

	const onChangeInput = e => {
		const { value, name } = e.target
		setInputValue({ ...inputValue, [name]: value })
	}

    const handleLogin = (e) => {
		e.preventDefault()
		const { login, password } = inputValue

		if (!login || !password) {
			return setErrorMsg('Заполните все поля')
		}
		signIn(inputValue)
			.then((res) => {
				setErrorMsg('')
				setIsAuth(res.user)
				localStorage.setItem('user', JSON.stringify(res.user))
				navigate('/')
			})
			.catch(err => {
				setErrorMsg(err.message)
			})
	}

    return (
			<div className='wrapper'>
				<ContainerSignIn>
					<Modal>
						<ModalBlock>
							<Modalttl>Вход</Modalttl>
							<ModalFormLogIn onSubmit={handleLogin}>
								<ModalInput
									type='text'
									name='login'
									id='formlogin'
									placeholder='Эл. почта'
									value={inputValue.login}
									onChange={onChangeInput}
								/>
								<ModalInput
									type='password'
									name='password'
									id='formpassword'
									placeholder='Пароль'
									value={inputValue.password}
									onChange={onChangeInput}
								/>
								<p style={{ color: 'red' }}>{errorMsg}</p>
								<ModalButtonEnter type='submit'>Войти</ModalButtonEnter>
								<ModalFormGroup>
									<p>Нужно зарегистрироваться?</p>
									<Link to='/register'>Регистрируйтесь здесь</Link>
								</ModalFormGroup>
							</ModalFormLogIn>
						</ModalBlock>
					</Modal>
				</ContainerSignIn>
			</div>
		)
}

export default LoginPage;