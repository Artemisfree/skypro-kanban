import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function PopExit() {
	const {logoutUser} = useContext(UserContext)
	return (
		<div className='pop-exit' id='popExit'>
			<div className='pop-exit__container'>
				<div className='pop-exit__block'>
					<div className='pop-exit__ttl'>
						<h2>Выйти из аккаунта?</h2>
					</div>
					<form className='pop-exit__form' id='formExit' action='#'>
						<div className='pop-exit__form-group'>
							<button onClick={logoutUser} className='pop-exit__exit-yes _hover01'>
								Да, выйти
							</button>
							<button className='pop-exit__exit-no _hover03'>
								<Link to='/'>Нет, остаться</Link>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default PopExit
