import '../styles/App.css';
import '../components/month'
import Month from "../components/month";
import MonthDetail from "./month_detail";
import {useState, useEffect} from "react";
import Day from "./day";


function Calendar() {
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const calendar = [];

    const [monthDetailVisibility, setMonthDetailVisibility] = useState(false);
    const [dayDetailVisibility, setDayDetailVisibility] = useState(false);

    const [monthNameState, setMonthNameState] = useState('');
    const [currentDayState, setCurrentDayState] = useState(0);
    const [daysInMonthState, setDaysInMonthState] = useState(0);
    const [realMonthState, setRealMonthState] = useState(0);
    const [currentMonthState, setCurrentMonthState] = useState(0);
    const [currentYearState, setCurrentYearState] = useState(0);

    const [selectedDayState, setSelectedDayState] = useState(0);
    const [selectedMonthState, setSelectedMonthState] = useState(0);
    const [weatherDataState, setWeatherDataState] = useState(null);

    function getWeatherData () {
        fetch('http://127.0.0.1:8000/weather')
            .then((response) => response.json())
            .then((data) => {
                setWeatherDataState(data)
            })
            .catch((error) => console.error('Error:', error));
    }

    // вызов getWeatherData при монтировании компонента
    useEffect(() => {
        getWeatherData();
    }, []);



    function showMonthDetailPopup(monthName, currentDay, daysInMonth, realMonth, currentMonth, currentYear) {
        setMonthDetailVisibility(!monthDetailVisibility);
        setMonthNameState(monthName)
        setCurrentDayState(currentDay)
        setDaysInMonthState(daysInMonth)
        setRealMonthState(realMonth)
        setCurrentMonthState(currentMonth)
        setCurrentYearState(currentYear)
    }

    function showDayDetailPopup(monthName, currentDay) {
        setDayDetailVisibility(!dayDetailVisibility)
        setSelectedDayState(currentDay)
        setSelectedMonthState(monthName)

        console.log(monthNames.indexOf('Март'))
    }


    for (let month = currentMonth - 2; month < currentMonth + 10; month++) {
        const realMonth = month >= 0 ? month % 12 : 12 + month;
        const currentYear = month >= 0 ? new Date().getFullYear() : new Date().getFullYear() - 1;
        const daysInMonth = new Date(currentYear, realMonth + 1, 0).getDate();


        const monthDetailInstance = (
            <Month key={monthNames[realMonth]} monthName={monthNames[realMonth]} currentDay={currentDay}
                   daysInMonth={daysInMonth} realMonth={realMonth} currentMonth={currentMonth} currentYear={currentYear}
                   showMonthDetailPopup={showMonthDetailPopup} showDayDetailPopup={showDayDetailPopup}/>
        );

        calendar.push(monthDetailInstance);

    }

    return (
        <div className={'calendar'}>
            {monthDetailVisibility ? (
                <MonthDetail showMonthDetailPopup={showMonthDetailPopup} showDayDetailPopup={showDayDetailPopup}
                             monthNameState={monthNameState}
                             currentDayState={currentDayState} daysInMonthState={daysInMonthState}
                             realMonthState={realMonthState} currentMonthState={currentMonthState} currentYearState={currentYearState} weatherDataState={weatherDataState}/>) : null}

            {calendar}
            {dayDetailVisibility? (
                <Day day={selectedDayState} monthName={selectedMonthState} showDayDetailPopup={showDayDetailPopup}/>
            ): null}

        </div>
    )
}

export default Calendar

