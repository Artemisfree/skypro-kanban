import { useState } from 'react'
import { Link } from 'react-router-dom';

export const UserComponent = ({ user }) => {
	const [isVisible, setIsVisible] = useState(false)
	const toggleVisibility = event => {
		event.preventDefault()
		setIsVisible(!isVisible)
	}

	return (
		<div className='user-component'>
			<a
				onClick={toggleVisibility}
				href='#user-set-target'
				className='header__user _hover02'
			>
				{user.name}
			</a>
			{isVisible && (
				<div className='header__pop-user-set pop-user-set' id='user-set-target'>
					<p className='pop-user-set__name'>{user.name}</p>
					<p className='pop-user-set__mail'>{user.login}</p>
					<div className='pop-user-set__theme'>
						<p>Темная тема</p>
						<input type='checkbox' className='checkbox' name='checkbox' />
					</div>
					<button type='button' className='_hover03'>
						<Link to='/exit'>Выйти</Link>
					</button>
				</div>
			)}
		</div>
	)
}
