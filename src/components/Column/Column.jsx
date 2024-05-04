import Card from '../Card/Card'
import { StyledColumnTitle, StyledMainColumn } from './Column.styled'


const Column = ({ title, cards }) => {
    return (
		<StyledMainColumn>
        {/* <div className='main__column'> */}
			<div className='column'>
				<StyledColumnTitle>
				{/* <div className='column__title'> */}
					<p>{title}</p>
				</StyledColumnTitle>
				{/* </div> */}
				<div className='cards'>
					{cards.map(card => (
						<Card key={card.id} id={card.id} topic={card.topic} title={card.title} date={card.date}>
							{card.title}
						</Card>
					))}
				</div>
			</div>
		</StyledMainColumn>
        // </div>
    )
}

export default Column
