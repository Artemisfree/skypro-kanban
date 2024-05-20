import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const Calendar = styled(DayPicker)`
	--rdp-cell-size: 22px;
	--rdp-caption-font-size: 14px;
	font-size: 10px;
	color: #94a6be;
	margin: 0;
`

export const RadioInput = styled.input`
    display: none;
`

export const WrapperRadio = styled.div`
	opacity: ${({$isActive}) => $isActive ? '1' : '0.4'};
`