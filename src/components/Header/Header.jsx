import StyledContainer from "../../Container.styled"
import { UserComponent } from '../User/PopUser'
import { StyledHeader, StyledHeaderBlock, StyledHeaderNav, StyledLogo } from "./Header.styled"
import { Link } from "react-router-dom"

export const Header = ({ user }) => {

	return (
		<StyledHeader>
			<StyledContainer>
				<StyledHeaderBlock>
					<StyledLogo src='/logo.png' alt='logo' />
					<StyledHeaderNav>
						<Link to='/newCard'>
							<button className='header__btn-main-new _hover01' id='btnMainNew'>
								Создать новую задачу
							</button>
						</Link>
						<UserComponent user={user} />
					</StyledHeaderNav>
				</StyledHeaderBlock>
			</StyledContainer>
		</StyledHeader>
	)
}


	// function onCardAdd() {
	// 	const newCard = {
	// 		_id: cards.length + 1,
	// 		topic: 'Copywriting',
	// 		title: 'Название задачи',
	// 		date: new Date().toISOString(),
	// 		status: 'Без статуса',
	// 	}
	// 	setCards([...cards, newCard])
	// }