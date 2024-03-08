import '../styles/Month.css'

function Month({monthName, currentDay, daysInMonth, realMonth, currentMonth, currentYear, showMonthDetailPopup, showDayDetailPopup}) {


    function handleMonthNameClick() {
        showMonthDetailPopup(monthName, currentDay, daysInMonth, realMonth, currentMonth, currentYear)
    }



    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {

        const isToday = i === currentDay && realMonth === currentMonth;
        days.push(
            <div key={`${realMonth}-${i}`} className={isToday ? ' day day-today' : 'day'} onClick={() => showDayDetailPopup(monthName, i)}>
                {i}
            </div>);
    }


    return (<div className={'month'}>
        <div className={'month-name'} onClick={handleMonthNameClick}>{monthName}</div>
        <div className={'month-days'}>{days}</div>
    </div>)
}

export default Month
