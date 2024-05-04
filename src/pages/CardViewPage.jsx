import { useParams } from 'react-router-dom'
import { cards } from '../data'

function CardViewPage() {
	const { id } = useParams()
	const card = cards.find(card => card.id === parseInt(id))

	if (!card) {
		return <div>Карточка не найдена</div>
	}

	return (
		<div className='card-details'>
			<h2>{card.title}</h2>
			<p>Id: {id}</p>
			<p>Тема: {card.topic}</p>
			<p>Статус: {card.status}</p>
			<p>Дата: {card.date}</p>
		</div>
	)
}

export default CardViewPage
