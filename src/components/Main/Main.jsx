import Column from '../Column/Column'
import { statusList } from './status'

function Main({ cards }) {
	return (
		<main className='main'>
			<div className='container'>
				<div className='main__block'>
					<div className='main__content'>
						{statusList.map(status => (
							<Column
								key={status}
								title={status}
								cards={cards.filter(card => card.status === status)}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main
