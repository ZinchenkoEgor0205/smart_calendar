import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


function Calendar() {
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const calendar = [];

    for (let month = currentMonth - 2; month < currentMonth + 10; month++) {
        const realMonth = month >= 0 ? month % 12 : 12 + month;
        const year = month >= 0 ? new Date().getFullYear() : new Date().getFullYear() - 1;
        const daysInMonth = new Date(year, realMonth + 1, 0).getDate();
        const days = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === currentDay && realMonth === currentMonth;
            days.push(
                <div key={`${realMonth}-${i}`} className={isToday ? ' day day-today' : 'day'}>
                    {i}
                </div>
            );
        }

        calendar.push(
            <div key={realMonth} className={'month'}>
                <div className={'month-name'}>{monthNames[realMonth]}</div>
                <div className={'month-days'}>{days}</div>
            </div>
        );
    }

    return (
        <div className={'calendar'}>
            {calendar}
        </div>
    )
}

export default Calendar

