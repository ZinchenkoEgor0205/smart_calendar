import '../styles/Month_detail.css'

function MonthDetail({ handleMonthNameClick }) {
    function handleCloseBtnClick() {
        handleMonthNameClick();
    }

    return (
        <div className="month-detail">
            <div onClick={handleCloseBtnClick}>close</div>
        </div>
    );
}
export default MonthDetail