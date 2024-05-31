import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import { addNewCard } from '../../api/cardsApi'
import { CardsContext } from '../../context/cardsContext'
import { format } from 'date-fns'
import { Calendar, RadioInput, WrapperRadio } from './popNewCard.styled'
import { ru } from 'date-fns/locale/ru'

function PopNewCard() {
	const { user } = useContext(UserContext)
	const { setCards } = useContext(CardsContext)
	const navigate = useNavigate()

	const [topic, setTopic] = useState('')
	const [date, setDate] = useState(new Date())
	const [error, setError] = useState('')
	const [inputValue, setInputValue] = useState({
		title: '',
		status: 'Без статуса',
		description: '',
	})

	const onChangeInput = (e) => {
		const {value, name} = e.target
		setInputValue({...inputValue, [name]: value})
	}
	console.log(topic)

	const onAddNewCard = () => {
		setError('')
		if (!inputValue.description) {
			return setError('Введите описание задачи')
		}

		const title = inputValue.title || 'Новая задача'
		const newTask = {
			...inputValue,
			topic,
			title,
			date,
		}

		addNewCard({token: user.token, newTask}).then((res) => {
			setCards(res.tasks)
			navigate('/')
		}).catch((err) => {
			setError(err.message)
		})
	}

	const getDateFormat = (date) => {
		const formattedDate = format(new Date(date), 'dd.MM.yy')
		return <>{formattedDate}</>
	}

	return (
		<div className='pop-new-card' id='popNewCard'>
			<div className='pop-new-card__container'>
				<div className='pop-new-card__block'>
					<div className='pop-new-card__content'>
						<h3 className='pop-new-card__ttl'>Создание задачи</h3>
						<Link to={'/'} className='pop-new-card__close'>
							&#10006;
						</Link>
						<div className='pop-new-card__wrap'>
							<form
								className='pop-new-card__form form-new'
								id='formNewCard'
								action='#'
							>
								<div className='form-new__block'>
									<label htmlFor='formTitle' className='subttl'>
										Название задачи
									</label>
									<input
										onChange={onChangeInput}
										className='form-new__input'
										type='text'
										name='title'
										id='formTitle'
										placeholder='Введите название задачи...'
										autoFocus
									/>
								</div>
								<div className='form-new__block'>
									<label htmlFor='textArea' className='subttl'>
										Описание задачи
									</label>
									<textarea
										onChange={onChangeInput}
										className='form-new__area'
										name='description'
										id='textArea'
										placeholder='Введите описание задачи...'
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
						<div className='pop-new-card__categories categories'>
							<p className='categories__p subttl'>Категория</p>

							<div className='categories__themes'>
								<WrapperRadio
									$isActive={topic === 'Web Design'}
									className='categories__theme _orange'
								>
									<label htmlFor='radio1'>Web Design</label>
									<RadioInput
										onChange={e => setTopic(e.target.value)}
										className='_orange'
										type='radio'
										name='radio'
										id='radio1'
										value={'Web Design'}
									/>
								</WrapperRadio>
								<WrapperRadio
									$isActive={topic === 'Research'}
									className='categories__theme _green'
								>
									<label htmlFor='radio2'>Research</label>
									<RadioInput
										onChange={e => setTopic(e.target.value)}
										className='_green'
										type='radio'
										name='radio'
										id='radio2'
										value={'Research'}
									/>
								</WrapperRadio>
								<WrapperRadio
									$isActive={topic === 'Copywriting'}
									className='categories__theme _purple'
								>
									<label htmlFor='radio3'>Copywriting</label>
									<RadioInput
										onChange={e => setTopic(e.target.value)}
										className='_purple'
										type='radio'
										name='radio'
										id='radio3'
										value={'Copywriting'}
									/>
								</WrapperRadio>
							</div>
						</div>
						{error && error}
						<button
							onClick={onAddNewCard}
							className='form-new__create _hover01'
							id='btnCreate'
						>
							Создать задачу
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PopNewCard
