import '../styles/Navigation.css'
import LoginPopup from "./login_popup";
import {useState} from "react";

function Navigation() {

    const [loginPopupVisibility, setLoginPopupVisibility] = useState(false);
    function loginBtnClick() {
        setLoginPopupVisibility(!loginPopupVisibility)
    }

    return (
        <nav>
             <div className={'nav-container'}>
                 <div className={'nav-container-btn-login'} onClick={loginBtnClick}>
                     Войти
                 </div>
             </div>
            {loginPopupVisibility ? <LoginPopup loginBtnClick={loginBtnClick}/> : null}
        </nav>
    )
}

export default Navigation