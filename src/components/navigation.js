import '../styles/Navigation.css'
import LoginPopup from "./login_popup";
import {useState} from "react";
import RegistrationPopup from "./registration_popup";

function Navigation() {

    const [loginPopupVisibility, setLoginPopupVisibility] = useState(false);
    const [registrationPopupVisibility, setRegistrationPopupVisibility] = useState(false);

    function loginBtnClick() {
        setLoginPopupVisibility(!loginPopupVisibility)
    }

    function registrationBtnClick() {
        setRegistrationPopupVisibility(!registrationPopupVisibility)
    }

    return (
        <nav>
             <div className={'nav-container'}>
                 <div className={'nav-container-btn-login'} onClick={loginBtnClick}>
                     Войти
                 </div>
                 <div className={'nav-container-btn-registration'} onClick={registrationBtnClick}>
                     Регистрация
                 </div>
             </div>
            {loginPopupVisibility ? <LoginPopup loginBtnClick={loginBtnClick}/> : null}
            {registrationPopupVisibility ? <RegistrationPopup registrationBtnClick={registrationBtnClick}/> : null}
        </nav>
    )
}

export default Navigation