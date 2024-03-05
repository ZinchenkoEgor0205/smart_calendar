import '../styles/Navigation.css'
import LoginPopup from "./login_popup";
import {useState} from "react";
import RegistrationPopup from "./registration_popup";
import AccountPopup from "./account_popup";

function Navigation() {

    const [loginPopupVisibility, setLoginPopupVisibility] = useState(false);
    const [registrationPopupVisibility, setRegistrationPopupVisibility] = useState(false);
    const [accountPopupVisibility, setAccountPopupVisibility] = useState(false);

    function loginBtnClick() {
        setLoginPopupVisibility(!loginPopupVisibility)
    }

    function registrationBtnClick() {
        setRegistrationPopupVisibility(!registrationPopupVisibility)
    }

    function accountBtnClick() {
        setAccountPopupVisibility(!accountPopupVisibility)
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
                <div className={'nav-container-btn-account'} onClick={accountBtnClick}>
                    Личный кабинет
                </div>
            </div>
            {loginPopupVisibility ? <LoginPopup loginBtnClick={loginBtnClick}/> : null}
            {registrationPopupVisibility ? <RegistrationPopup registrationBtnClick={registrationBtnClick}/> : null}
            {accountPopupVisibility ? <AccountPopup accountBtnClick={accountBtnClick}/> : null}
        </nav>
    )
}

export default Navigation