import '../styles/Month_detail.css'

function MonthDetail({ handleMonthNameClick }) {
    function handleCloseBtnClick() {
        handleMonthNameClick();
    }

    return (
        <div className="month-detail">
            <div onClick={handleCloseBtnClick}>Close</div>
        </div>
    );
}
export default MonthDetail