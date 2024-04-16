import { dayNames, calendarCellsData } from './calendarData'

const Calendar = () => {
	return (
		<div className='calendar__content'>
			<div className='calendar__days-names'>
				{dayNames.map(name => (
					<div
						key={name}
						className={`calendar__day-name ${
							name === 'сб' || name === 'вс' ? '-weekend-' : ''
						}`}
					>
						{name}
					</div>
				))}
			</div>
			<div className='calendar__cells'>
				{calendarCellsData.map((cell, index) => (
					<div
						key={index}
						className={`calendar__cell ${
							cell.otherMonth ? '_other-month' : '_cell-day'
						} ${cell.isWeekend ? '_weekend' : ''} ${
							cell.isActive ? '_active-day' : ''
						} ${cell.isCurrent ? '_current' : ''}`}
					>
						{cell.day}
					</div>
				))}
			</div>
		</div>
	)
}

export default Calendar
