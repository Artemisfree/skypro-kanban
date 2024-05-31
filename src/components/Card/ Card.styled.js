import styled, { keyframes } from 'styled-components'
import { topicStyles, topicColors } from './topic'

const cardAnimation = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }
    100% {
        height: 100%;
        opacity: 1;
    }
`

const CardItem = styled.div`
	padding: 5px;
	animation-name: ${cardAnimation};
	animation-duration: 500ms;
	animation-timing-function: linear;
`

const TopicText = styled.p`
	font-size: 10px;
	font-weight: 600;
	line-height: 10px;
`

const CardTopic = styled.div`
	width: auto;
	height: 20px;
	padding: 5px 14px;
	border-radius: 18px;
	background-color: ${({ topic }) =>
		topicStyles[topicColors[topic]]?.backgroundColor || '#b4fdd1'};

	${TopicText} {
		color: ${({ topic }) =>
			topicStyles[topicColors[topic]]?.color || '#06b16e'};
	}
`

const StyledCardBlock = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`

const StyledCardGroup = styled.div`
	width: 100%;
	height: 20px;
	margin-bottom: 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const StyledCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const StyledCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`

export { TopicText, CardTopic, CardItem, StyledCardBlock, StyledCardGroup, StyledCardContent, StyledCardTitle }