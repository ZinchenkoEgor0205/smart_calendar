import '../styles/Month_detail.css'


function MonthDetail({ showMonthDetailPopup, monthNameState, currentDayState, daysInMonthState, realMonthState, currentMonthState, showDayDetailPopup}) {
    function handleCloseBtnClick() {
        showMonthDetailPopup();
    }

    const days = []
    for (let i = 1; i <= daysInMonthState; i++) {
        days.push(
            <div className={'month-detail-content-day'} onClick={() => showDayDetailPopup(monthNameState, i)}>
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