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
							{/* <button className='modal__btn-signup-ent _hover01' type='button'>
								<a onClick={handlerRegister}>Зарегистрироваться</a>
							</button> */}
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
					{/* </div> */}
				</Modal>
				{/* </div> */}
			</ContainerSignIn>
			{/* </div> */}
		</div>
	)
}

export default RegisterPage