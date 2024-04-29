import styled from 'styled-components'
import { topicStyles, topicColors } from './topic'

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

export { TopicText, CardTopic }