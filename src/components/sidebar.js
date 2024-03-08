
import '../styles/Sidebar.css'


function Sidebar () {


    function moreBtnClicked() {
        const sidebar = document.querySelector('.sidebar')
        const sidebar_filter_texts = document.querySelectorAll('.sidebar-filter-text')
        sidebar.classList.toggle('sidebar-extended')
        sidebar_filter_texts.forEach((text) => {
            text.classList.toggle('sidebar-filter-text-visible')
        })
    }

    return (
        <aside className={'sidebar'}>
            <div className={'sidebar-btn sidebar-btn-more btn'} onClick={moreBtnClicked}>more</div>
            <div className={'sidebar-filters'}>
                <div className="sidebar-filter">
                    <div className="sidebar-filter-icon sidebar-filter-icon-wearher">П</div>
                    <div className="sidebar-filter-text sidebar-filter-text-weather">Погода</div>
                </div>
                <div className="sidebar-filter">
                    <div className="sidebar-filter-icon sidebar-filter-icon-work">Р</div>
                    <div className="sidebar-filter-text sidebar-filter-text-work">Работа</div>
                </div>
                <div className="sidebar-filter">
                    <div className="sidebar-filter-icon">0</div>
                    <div className="sidebar-filter-text">Description</div>
                </div>
                <div className="sidebar-filter">
                    <div className="sidebar-filter-icon">0</div>
                    <div className="sidebar-filter-text">Description</div>
                </div>
            </div>
        </aside>
    )
}


export default Sidebar
