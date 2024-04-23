import Card from '../Card/Card'

const Column = ({ title, cards }) => {
    return (
        <div className='main__column column'>
            <div className='column__title'>
                <p>{title}</p>
            </div>
            <div className='cards'>
                {cards.map(card => (
                    <Card key={card.id} color={card.color} topic={card.topic} title={card.title} date={card.date}>
                        {card.title}
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Column
