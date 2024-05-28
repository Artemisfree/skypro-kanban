import { useState } from 'react'
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
import { register } from '../../api/auth'

function RegisterPage() {
	const navigate = useNavigate()
	const [errorMsg, setErrorMsg]= useState('')

	const [inputValue, setInputValue] = useState({
		login: '',
		name: '',
		password: ''
	})

	const onChangeInput = (e) => {
		const {value, name} = e.target
		setInputValue({...inputValue, [name]: value})
	}

	const handlerRegister = (e) => {
		e.preventDefault()
		const {login, name, password} = inputValue;

		if(!login || !name || !password) {
			return setErrorMsg('Заполните все поля')
		}
		register(inputValue).then(() => {
			setErrorMsg('')
			navigate('/login')
		}).catch((err) => {
			setErrorMsg(err.message)
		})
	}

	return (
		<div className='wrapper'>
			<ContainerSignIn>
				<Modal>
					<ModalBlock>
						<Modalttl>Регистрация</Modalttl>
						<ModalFormLogIn>
							<ModalInput
								type='text'
								name='name'
								id='first-name'
								placeholder='Имя'
								value={inputValue.name}
								onChange={onChangeInput}
							/>
							<ModalInput
								type='text'
								name='login'
								id='loginReg'
								placeholder='Эл. почта'
								value={inputValue.email}
								onChange={onChangeInput}
							/>
							<ModalInput
								type='password'
								name='password'
								id='passwordFirst'
								placeholder='Пароль'
								value={inputValue.password}
								onChange={onChangeInput}
							/>
							<p style={{color: 'red'}}>{errorMsg}</p>
							<ModalButtonEnter type='button' onClick={handlerRegister}>
								Зарегистрироваться
							</ModalButtonEnter>
							<ModalFormGroup>
								<p>
									Уже есть аккаунт? <Link to='/login'>Войдите здесь</Link>
								</p>
							</ModalFormGroup>
						</ModalFormLogIn>
					</ModalBlock>
				</Modal>
			</ContainerSignIn>
		</div>
	)
}

export default RegisterPage