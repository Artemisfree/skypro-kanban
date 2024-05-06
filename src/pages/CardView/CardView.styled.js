import styled from 'styled-components'

const PopBrowse = styled.div`
    /* display: none; */
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;

    &:target {
      display: block;
    }
`
const PopBrowseContainer = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 0 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.4);
`

const PopBrowseBlock = styled.div`
	display: block;
	margin: 0 auto;
	background-color: #ffffff;
	max-width: 630px;
	width: 100%;
	padding: 40px 30px 38px;
	border-radius: 10px;
	border: 0.7px solid #d4dbe5;
	position: relative;
`

const PopBrowseContent = styled.div`
	display: block;
	text-align: left;

	.categories__theme {
		opacity: 1;
	}

	.theme-down {
		display: none;
		margin-bottom: 20px;
	}

	.theme-top {
		display: block;
	}
`

const PopBrowseTopBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 18px;
`

const PopBrowseTitle = styled.h3`
	color: #000;
	font-size: 20px;
	font-weight: 600;
	line-height: 24px;
`

const CategoriesTheme = styled.div`
	display: inline-block;
	width: auto;
	height: 30px;
	padding: 8px 20px;
	border-radius: 24px;
	margin-right: 7px;
	opacity: 0.4;

	&.theme-top {
		display: block;
	}

	&._active-category {
		opacity: 1 !important;
	}

	p {
		font-size: 14px;
		font-weight: 600;
		line-height: 14px;
		white-space: nowrap;
	}
`

const StyledTextArea = styled.textarea`
	max-width: 370px;
	width: 100%;
	outline: none;
	padding: 14px;
	background: #eaeef6;
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	font-size: 14px;
	line-height: 1;
	letter-spacing: -0.14px;
	margin-top: 14px;
	height: 200px;

	&::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 1;
		color: #94a6be;
		letter-spacing: -0.14px;
	}

	&::-moz-placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 1;
		color: #94a6be;
		letter-spacing: -0.14px;
	}
`

export { PopBrowse, PopBrowseContainer, PopBrowseBlock, PopBrowseContent, PopBrowseTopBlock, PopBrowseTitle, CategoriesTheme, StyledTextArea }