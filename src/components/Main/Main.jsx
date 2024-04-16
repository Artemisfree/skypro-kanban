import Column from '../Column/Column'

function Main() {
    const cardsData = [
		{
			id: 1,
			theme: 'orange',
			title: 'Web Design',
			date: '30.10.23',
			content: 'Название задачи',
		},
		{
			id: 2,
			theme: 'green',
			title: 'Research',
			date: '30.10.23',
			content: 'Название задачи',
		},
		{
			id: 3,
			theme: 'orange',
			title: 'Web Design',
			date: '30.10.23',
			content: 'Название задачи',
		},
		{
			id: 4,
			theme: 'purple',
			title: 'Copywriting',
			date: '30.10.23',
			content: 'Название задачи',
		},
		{
			id: 5,
			theme: 'orange',
			title: 'Web Design',
			date: '30.10.23',
			content: 'Название задачи',
		},
	]

    const cardsData1 = [
		{
			id: 1,
			theme: 'green',
			title: 'Research',
			date: '30.10.23',
			content: 'Название задачи',
		},
	]

    const cardsData2 = [
		{
			id: 1,
			theme: 'green',
			title: 'Research',
			date: '30.10.23',
			content: 'Название задачи',
		},
		{
			id: 2,
			theme: 'purple',
			title: 'Copywriting',
			date: '30.10.23',
			content: 'Название задачи',
		},
		{
			id: 5,
			theme: 'orange',
			title: 'Web Design',
			date: '30.10.23',
			content: 'Название задачи',
		},
	]

	return (
		<main className='main'>
			<div className='container'>
				<div className='main__block'>
					<div className='main__content'>
						<Column title='Без статуса' cards={cardsData} />
						<Column title='Нужно сделать' cards={cardsData1} />
						<Column title='В работе' cards={cardsData2} />
						<Column title='Тестирование' cards={cardsData1} />
						<Column title='Готово' cards={cardsData1} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main
