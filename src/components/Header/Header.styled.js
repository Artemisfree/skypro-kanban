import styled, { css } from 'styled-components'

const StyledHeader = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
`

const StyledHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`

const StyledHeaderNav = styled.div`
	max-width: 290px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

const StyledLogo = styled.img`
	width: 85px;
`
const StyledHeaderButton = styled.button`
	width: 178px;
	height: 30px;
	border-radius: 4px;
	background-color: #565eef;
	color: #ffffff;
	border: none;
	font-size: 14px;
	line-height: 1;
	font-weight: 500;
	margin-right: 20px;

	&:hover {
        background-color: #33399b;
    }
`

export { StyledHeader, StyledHeaderBlock, StyledHeaderNav, StyledLogo, StyledHeaderButton }
