import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerSignIn, Modal, ModalBlock, Modalttl, ModalFormLogIn, ModalInput, ModalButtonEnter, ModalFormGroup } from './Login.styled';
import { signIn } from '../../api/auth';
import { UserContext } from '../../context/userContext';


function LoginPage() {
	const {loginUser} = useContext(UserContext)
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
				loginUser(res)
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