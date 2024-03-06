
import '../styles/Sidebar.css'
import {useState} from "react";


function Sidebar () {

    const [sidebarExtension, setSidebarExtension] = useState(false);

    function moreBtnClicked() {
        setSidebarExtension(!sidebarExtension)
        sidebarExtension ? document.querySelector('.sidebar').classList.add('sidebar-extended') : document.querySelector('.sidebar').classList.remove('sidebar-extended')
    }

    return (
        <aside className={'sidebar'}>
            <div className={'sidebar-btn sidebar-btn-more btn'} onClick={moreBtnClicked}>more</div>
        </aside>
    )
}


export default Sidebar
