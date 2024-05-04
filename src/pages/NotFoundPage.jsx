import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h1>404</h1>
			<p>Страница не найдена</p>
			<Link to='/'>Вернуться на главную страницу</Link>
		</div>
	)
}

export default NotFoundPage
