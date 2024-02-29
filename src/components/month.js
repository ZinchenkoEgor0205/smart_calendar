import '../styles/Month.css'
import MonthDetail from "./month_detail";
import {useState} from "react";

function Month({monthName, currentDay, daysInMonth, realMonth, currentMonth}) {

    const [monthDetailVisibility, setMonthDetailVisibility] = useState(false);

    function handleMonthNameClick() {
        setMonthDetailVisibility(!monthDetailVisibility);
    }

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
            {monthDetailVisibility ? (<MonthDetail handleMonthNameClick={handleMonthNameClick}/>) : null}

        </div>
    )
}
export default Month
