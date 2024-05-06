import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { ContainerSignIn, Modal, ModalBlock, Modalttl, ModalFormLogIn, ModalInput, ModalButtonEnter, ModalFormGroup } from './Login.styled';


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
			<ContainerSignIn>
				<Modal>
					<ModalBlock>
						<Modalttl>
							Вход
						</Modalttl>
						<ModalFormLogIn onSubmit={handleLogin}>
							<ModalInput
								type='text'
								name='login'
								id='formlogin'
								placeholder='Эл. почта'
								value={login}
								onChange={e => setLogin(e.target.value)}
							/>
							<ModalInput
								type='password'
								name='password'
								id='formpassword'
								placeholder='Пароль'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
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