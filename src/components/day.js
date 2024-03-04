import '../styles/Day.css'

function Day({day, monthName, showDayDetailPopup}) {


    return (
        <div className={'day-popup'}>
            {day}
            {monthName}
            <div className={'close-btn'} onClick={() => {showDayDetailPopup(monthName, day)}}>close</div>
        </div>
    )
}

export default Day