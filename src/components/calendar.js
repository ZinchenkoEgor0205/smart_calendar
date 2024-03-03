import '../styles/App.css';
import '../components/month'
import Month from "../components/month";



function Calendar() {
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const calendar = [];



    for (let month = currentMonth - 2; month < currentMonth + 10; month++) {
        const realMonth = month >= 0 ? month % 12 : 12 + month;
        const year = month >= 0 ? new Date().getFullYear() : new Date().getFullYear() - 1;
        const daysInMonth = new Date(year, realMonth + 1, 0).getDate();


        const monthDetailInstance = (
            <Month key={monthNames[realMonth]} monthName={monthNames[realMonth]} currentDay={currentDay} daysInMonth={daysInMonth} realMonth={realMonth} currentMonth={currentMonth} />
        );

        calendar.push(monthDetailInstance);

    }

    return (
        <div className={'calendar'}>
            {calendar}
        </div>
    )
}

export default Calendar

