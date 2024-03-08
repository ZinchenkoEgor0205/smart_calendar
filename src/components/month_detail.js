import '../styles/Month_detail.css'
import {useEffect} from "react";


function MonthDetail({ showMonthDetailPopup, monthNameState, currentDayState, daysInMonthState, realMonthState, currentMonthState, currentYearState, showDayDetailPopup, weatherDataState}) {



    useEffect(() => {
        days.forEach((day) => {
            let dateString = `${currentYearState}-${realMonthState + 1}-${day.key}`
            let dateEpoch = Date.parse(dateString)


            weatherDataState.forEach((dayInstance) => {
                let dayForecast = dayInstance.forecast.forecastday[0]
                console.log(dayForecast)
                if (new Date(dayForecast.date_epoch * 1000).toDateString() === new Date(dateEpoch).toDateString()) {
                    let displayedDay = document.getElementById(`month-detail-content-day-${day.key}`)
                    displayedDay.innerText = day.key + ' ' + dayForecast.day.avgtemp_c
                }
            })
        })
    }, []);

    function handleCloseBtnClick() {
        showMonthDetailPopup();
    }

    const days = []
    for (let i = 1; i <= daysInMonthState; i++) {
        days.push(
            <div key={i} className={'month-detail-content-day'} id={`month-detail-content-day-${i}`} onClick={() => showDayDetailPopup(monthNameState, i)}>
                {i}
            </div>
        )
    }

    return (
        <div className="month-detail">
            <div className={'month-detail-header'}>
                <div className={'month-detail-header-name'}>{monthNameState}</div>
                <div onClick={handleCloseBtnClick} className={'month-detail-header-btn'}>Close</div>
            </div>
            <div className={'month-detail-content'}>
                {days}
            </div>

        </div>
    );
}
export default MonthDetail