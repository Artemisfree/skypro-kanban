import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteCard, getCardById, getCards, updateCard } from '../../api/cardsApi'
import { UserContext } from '../../context/userContext'
import { CardsContext } from '../../context/cardsContext'
import { topicColors, topicStyles } from '../Card/topic'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import { Calendar } from './popBrowsePage.styled'

function PopBrowsePage() {
	const { user } = useContext(UserContext)
	const { id } = useParams()
	const [card, setCard] = useState([])
	const [date, setDate] = useState(new Date())
	const [isEditing, setIsEditing] = useState(false)
	const [description, setDescription] = useState('')
	const [status, setStatus] = useState('')
	const navigate = useNavigate()
	const setError = useState('')
	const { setCards } = useContext(CardsContext)

	useEffect(() => {
		const loadCard = async () => {
			try {
				const cardData = await getCardById({ token: user.token, cardId: id })
				const task = cardData.tasks.find(task => task._id === id)
				console.log('Card data:', task)
				setCard(task)
				setDescription(task.description)
				setDate(task.dueDate ? new Date(task.dueDate) : new Date())
				setStatus(task.status)
			} catch (error) {
				console.error('Ошибка при загрузке данных карточки:', error)
			}
		}
		loadCard()
	}, [id, user.token])

    const handleDelete = cardId => {
		deleteCard({ token: user.token, cardId })
			.then(() => getCards(user.token))
			.then(updatedCards => {
				setCards(updatedCards.tasks)
				navigate('/')
			})
			.catch(err => {
				setError(err.message)
			})
	}

	const handleSave = () => {
		const updatedCard = {
			...card,
			description,
			dueDate: date,
			status,
		}
		updateCard({ token: user.token, cardId: id, cardData: updatedCard })
			.then(() => getCards(user.token))
			.then(updatedCards => {
				setCards(updatedCards.tasks)
				setIsEditing(false)
			})
			.catch(err => {
				setError(err.message)
			})
	}

	const getDateFormat = date => {
		try {
			const formattedDate = format(new Date(date), 'dd.MM.yy')
			return <>{formattedDate}</>
		} catch (error) {
			return <>{'Неправильный формат даты'}</>
		}
	}

    const topicColorClass = topicColors[card.topic] || '_gray'
	const topicStyle = topicStyles[topicColorClass]

	const statuses = [
		'Без статуса',
		'Нужно сделать',
		'В работе',
		'Тестирование',
		'Готово',
	]

	return (
		<div className='pop-browse' id='popBrowse'>
			<div className='pop-browse__container'>
				<div className='pop-browse__block'>
					<div className='pop-browse__content'>
						<div className='pop-browse__top-block'>
							<h3 className='pop-browse__ttl'>{card.title}</h3>
							<div
								className={`categories__theme theme-top _active-category ${topicColorClass}`}
								style={topicStyle}
							>
								<p className={topicColorClass}>{card.topic}</p>
							</div>
						</div>
						<div className='pop-browse__status status'>
							<p className='status__p subttl'>Статус</p>
							<div className='status__themes'>
								{isEditing ? (
									statuses.map(s => (
										<div
											key={s}
											className={`status__theme ${s === status ? '_gray' : ''}`}
											onClick={() => isEditing && setStatus(s)}
											style={{ cursor: isEditing ? 'pointer' : 'default' }}
										>
											<p className={s === status ? '_gray' : ''}>{s}</p>
										</div>
									))
								) : (
									<div className='status__theme _gray'>
										<p className='_gray'>{status}</p>
									</div>
								)}
							</div>
						</div>
						<div className='pop-browse__wrap'>
							<form
								className='pop-browse__form form-browse'
								id='formBrowseCard'
								action='#'
							>
								<div className='form-browse__block'>
									<label htmlFor='textArea01' className='subttl'>
										Описание задачи
									</label>
									{/* <textarea
										className='form-browse__area'
										name='text'
										id='textArea01'
										readOnly
										placeholder='Введите описание задачи...'
										value={card.description || ''}
									></textarea> */}
									<textarea
										className='form-browse__area'
										name='text'
										id='textArea01'
										readOnly={!isEditing}
										placeholder='Введите описание задачи...'
										value={description}
										onChange={e => setDescription(e.target.value)}
									></textarea>
								</div>
							</form>
							<div className='pop-new-card__calendar calendar'>
								<p className='calendar__ttl subttl'>Даты</p>
								<Calendar
									locale={ru}
									mode='single'
									selected={date}
									onSelect={setDate}
									footer={getDateFormat(date)}
								/>
							</div>
						</div>
						<div className='theme-down__categories theme-down'>
							<p className='categories__p subttl'>Категория</p>
							<div className='categories__theme _orange _active-category'>
								<p className='_orange'>{card.category}</p>
							</div>
						</div>
						<div className='pop-browse__btn-browse '>
							{isEditing ? (
								<div className='btn-group'>
									<button
										className='btn-edit__edit _btn-bg _hover01'
										onClick={handleSave}
									>
										Сохранить
									</button>
									<button
										className='btn-edit__edit _btn-bor _hover03'
										onClick={() => setIsEditing(false)}
									>
										Отменить
									</button>
									<button
										className='btn-browse__delete _btn-bor _hover03'
										onClick={() => handleDelete(card._id)}
									>
										<Link to='/'>Удалить задачу</Link>
									</button>
								</div>
							) : (
								<div className='btn-group'>
									<button
										className='btn-browse__edit _btn-bor _hover03'
										onClick={() => setIsEditing(true)}
									>
										Редактировать задачу
									</button>
									<button
										className='btn-browse__delete _btn-bor _hover03'
										onClick={() => handleDelete(card._id)}
									>
										Удалить задачу
									</button>
								</div>
							)}
							<button className='btn-browse__close _btn-bg _hover01'>
								<Link to='/'>Закрыть</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PopBrowsePage