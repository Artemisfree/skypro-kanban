import { useState, useEffect, useContext } from 'react'
import '../App.css'
import { Header } from '../components/Header/Header'
import Main from '../components/Main/Main'
import { Outlet } from 'react-router-dom'
import { getCards } from '../api/cardsApi'
import { UserContext } from '../context/userContext'
import { CardsContext } from '../context/cardsContext'


export const MainPage = () => {
	const {cards, setCards} = useContext(CardsContext)
	const [errorMsg, setErrorMsg] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const {user} = useContext(UserContext)

	useEffect(() => {
		setIsLoading(true)

		getCards(user.token).then(res => {
			setErrorMsg('')
			setCards(res.tasks)
			setIsLoading(false)
		}).catch((err) => {
			setErrorMsg(err.message)
		}).finally(() => {
			setIsLoading(false)
		})
	}, [])


	return (
		<div className='wrapper'>
			<Header user={user} />
			{isLoading ? (
				<div className='column__title'>Данные загружаются...</div>
			) : (
				<Main errorMsg={errorMsg} cards={cards} />
			)}
			<Outlet />
		</div>
	)
}

