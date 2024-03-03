import '../styles/Month.css'

function Month({monthName, currentDay, daysInMonth, realMonth, currentMonth, handleMonthNameClick}) {


    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {

        const isToday = i === currentDay && realMonth === currentMonth;
        days.push(
            <div key={`${realMonth}-${i}`} className={isToday ? ' day day-today' : 'day'}>
                {i}
            </div>
        );
    }


    return (
        <div className={'month'}>
            <div className={'month-name'} onClick={handleMonthNameClick}>{monthName}</div>
            <div className={'month-days'}>{days}</div>
        </div>
    )
}
export default Month
