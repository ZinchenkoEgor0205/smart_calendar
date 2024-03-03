import '../styles/Month_detail.css'

function MonthDetail({ showMonthDetailPopup, monthNameState, currentDayState, daysInMonthState, realMonthState, currentMonthState}) {
    function handleCloseBtnClick() {
        showMonthDetailPopup();
    }

    return (
        <div className="month-detail">
            <div onClick={handleCloseBtnClick}>Close</div>
            <div>{monthNameState}</div>
        </div>
    );
}
export default MonthDetail