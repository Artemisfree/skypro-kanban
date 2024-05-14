import { useState, useEffect } from 'react'
import '../App.css'
import { cards as initialCards } from '../data'
import { Header } from '../components/Header/Header'
import PopNewCard from '../components/PopNewCard/PopNewCard'
import Main from '../components/Main/Main'
import { Outlet } from 'react-router-dom'
import { getCards } from '../api/cardsApi'


export const MainPage = ({isAuth}) => {
	const [cards, setCards] = useState([])
	const [errorMsg, setErrorMsg] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)

		getCards(isAuth.token).then(res => {
			setErrorMsg('')
			setCards(res.tasks)
			setIsLoading(false)
		}).catch((err) => {
			setErrorMsg(err.message)
		}).finally(() => {
			setIsLoading(false)
		})
	}, [])

	function onCardAdd() {
		const newCard = {
			_id: cards.length + 1,
			topic: 'Copywriting',
			title: 'Название задачи',
			date: new Date().toLocaleDateString(),
			status: 'Без статуса',
		}
		setCards([...cards, newCard])
	}

	return (
		<div className='wrapper'>
			<PopNewCard />
			<Header isAuth={isAuth} onCardAdd={onCardAdd} />
			{isLoading ? (
				<div className='column__title'>Данные загружаются...</div>
			) : (
				<Main errorMsg={errorMsg} cards={cards} />
			)}
			<Outlet />
		</div>
	)
}

