import Column from '../Column/Column'
import { cardsData, cardsData1, cardsData2 } from './cardsData'

function Main() {
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
