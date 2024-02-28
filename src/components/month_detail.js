import '../styles/Month_detail.css'

function MonthDetail({monthName, currentDay, daysInMonth, realMonth, currentMonth}) {

    const days = [];
    console.log(daysInMonth)

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
            <div className={'month-name'}>{monthName}</div>
            <div className={'month-days'}>{days}</div>
        </div>
    )
}
export default MonthDetail
