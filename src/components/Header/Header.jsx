import StyledContainer from "../../Container.styled"
import { UserComponent } from '../User/PopUser'
import { StyledHeader, StyledHeaderBlock , StyledHeaderButton, StyledHeaderNav, StyledLogo } from "./Header.styled"

export const Header = ({ onCardAdd, isAuth }) => {
	return (
		<StyledHeader>
			{/* <header className='header'> */}
			<StyledContainer>
				{/* <div className='container'> */}
				<StyledHeaderBlock>
					{/* <div className='header__block'> */}
					<StyledLogo src='/logo.png' alt='logo' />
					{/* <div className='header__logo _show _light'>
						<a href='' target='_self'>
							<img src='/logo.png' alt='logo' />
						</a>
					</div> */}
					{/* <div className='header__logo _dark'>
						<a href='' target='_self'>
							<img src='/logo_dark.png' alt='logo' />
						</a>
					</div> */}
					<StyledHeaderNav>
						{/* <nav className='header__nav'> */}
						<StyledHeaderButton onClick={onCardAdd}>
							Создать новую задачу
						</StyledHeaderButton>
						{/* <button className='header__btn-main-new _hover01' onClick={onCardAdd}>
							Создать новую задачу
						</button> */}
						{/* <button className='header__btn-main-new _hover01' id='btnMainNew'>
							<a href='#popNewCard'>Создать новую задачу</a>
						</button> */}
						<UserComponent
							isAuth={isAuth}
							// name={'Ivan Ivanov'}
							// email={'ivan.ivanov@gmail.com'}
						/>
					</StyledHeaderNav>
					{/* </nav> */}
				</StyledHeaderBlock>
				{/* </div> */}
			</StyledContainer>
			{/* </div> */}
		</StyledHeader>
		// </header>
	)
}
