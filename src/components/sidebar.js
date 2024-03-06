
import '../styles/Sidebar.css'


function Sidebar () {


    function moreBtnClicked() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('sidebar-extended')
    }

    return (
        <aside className={'sidebar'}>
            <div className={'sidebar-btn sidebar-btn-more btn'} onClick={moreBtnClicked}>more</div>
            <div className={'sidebar-filters'}>
                <div className="sidebar-filter">O</div>
                <div className="sidebar-filter">O</div>
                <div className="sidebar-filter">O</div>
                <div className="sidebar-filter">O</div>
            </div>
        </aside>
    )
}


export default Sidebar
