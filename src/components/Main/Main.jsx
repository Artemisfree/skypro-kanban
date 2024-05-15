import Column from '../Column/Column'
import StyledContainer from '../../Container.styled'
// import StyledMainBlock from './MainBlock.styled'
// import StyledMainContent from './MainContent.styled'
import { StyledMain, StyledMainBlock, StyledMainContent } from './Main.styled'
import { statusList } from './status'

function Main({ cards, errorMsg }) {
	return (
		<StyledMain>
			<StyledContainer>
				{errorMsg ? (
					<p>{errorMsg}</p>
				) : (
					<StyledMainBlock>
						<StyledMainContent>
							{statusList.map(status => (
								<Column
									key={status}
									title={status}
									cards={cards.filter(card => card.status === status)}
								/>
							))}
						</StyledMainContent>
					</StyledMainBlock>
				)}
			</StyledContainer>
		</StyledMain>
	)
}

export default Main
