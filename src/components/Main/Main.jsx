import Column from '../Column/Column'
import StyledContainer from '../../Container.styled'
// import StyledMainBlock from './MainBlock.styled'
// import StyledMainContent from './MainContent.styled'
import { StyledMain, StyledMainBlock, StyledMainContent } from './Main.styled'
import { statusList } from './status'

function Main({ cards }) {
	return (
		<StyledMain>
		{/* <main className='main'> */}
			<StyledContainer>
				{/* <div className='container'> */}
				<StyledMainBlock>
					{/* <div className='main__block'> */}
					<StyledMainContent>
						{/* <div className='main__content'> */}
						{statusList.map(status => (
							<Column
								key={status}
								title={status}
								cards={cards.filter(card => card.status === status)}
							/>
						))}
					</StyledMainContent>
					{/* </div> */}
				</StyledMainBlock>
				{/* </div> */}
			</StyledContainer>
			{/* </div> */}
		{/* </main> */}
		</StyledMain>
	)
}

export default Main
