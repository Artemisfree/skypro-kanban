import { useState, useEffect } from 'react'
import '../App.css'
import { cards as initialCards } from '../data'
import PopExit from '../components/PopExit/PopExit'
import Header from '../components/Header/Header'
import PopNewCard from '../components/PopNewCard/PopNewCard'
import PopBrowse from '../components/PopBrowse/PopBrowse'
import Main from '../components/Main/Main'


function MainPage() {
	const [cards, setCards] = useState(initialCards)
	const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
			setTimeout(() => {
				setIsLoading(false)
			}, 2000)
		}, [])

	function onCardAdd() {
		const newCard = {
			id: cards.length + 1,
			topic: 'Copywriting',
			title: 'Название задачи',
			date: new Date().toLocaleDateString(),
			status: 'Без статуса',
		}
		setCards([...cards, newCard])
	}

	return (
		<div className='wrapper'>
			{/* pop-up start */}
			<PopExit />
			<PopNewCard />
			<PopBrowse />
			{/* pop-up end */}
			<Header onCardAdd={onCardAdd} />
			{isLoading ? (
				<div className='column__title'>Данные загружаются...</div>
			) : (
				<Main cards={cards} />
			)}
		</div>
	)
}
export default MainPage
