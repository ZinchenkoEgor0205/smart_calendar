
import '../styles/Navigation.css'
import LoginPopup from "./login_popup";
import {useState} from "react";
import RegistrationPopup from "./registration_popup";
import AccountPopup from "./account_popup";
import NotificationsPopup from "./notifications_popup";

function Navigation({userData, setUserData, checkUserAuth}) {

    const [loginPopupVisibility, setLoginPopupVisibility] = useState(false);
    const [registrationPopupVisibility, setRegistrationPopupVisibility] = useState(false);
    const [accountPopupVisibility, setAccountPopupVisibility] = useState(false);
    const [notificationsPopupVisibility, setNotificationsPopupVisibility] = useState(false);


    function loginPopupSwitch() {
        console.log(userData)
        setLoginPopupVisibility(!loginPopupVisibility)
    }

    function registrationBtnClick() {
        setRegistrationPopupVisibility(!registrationPopupVisibility)
    }

    function accountBtnClick() {
        setAccountPopupVisibility(!accountPopupVisibility)
    }

    function notificationsBtnClick() {
        setNotificationsPopupVisibility(!notificationsPopupVisibility)
    }

    return (
        <nav>
            <div className={'nav-container'}>
                {!userData &&
                <div className={'nav-container-btn-login'} onClick={loginPopupSwitch}>
                    Войти
                </div>}
                {!userData &&
                <div className={'nav-container-btn-registration'} onClick={registrationBtnClick}>
                    Регистрация
                </div>}
                {userData &&
                <div className={'nav-container-btn-account'} onClick={accountBtnClick}>
                    Личный кабинет
                </div>}
                {userData &&
                <div className={'nav-container-btn-notifications'} onClick={notificationsBtnClick}>
                    Уведомления
                </div>}
            </div>
            {loginPopupVisibility ? <LoginPopup setLoginPopupVisibility={setLoginPopupVisibility} loginPopupVisibility={loginPopupVisibility} loginPopupSwitch={loginPopupSwitch} checkUserAuth={checkUserAuth}/> : null}
            {registrationPopupVisibility ? <RegistrationPopup registrationBtnClick={registrationBtnClick}/> : null}
            {accountPopupVisibility ? <AccountPopup accountBtnClick={accountBtnClick}/> : null}
            {notificationsPopupVisibility ? <NotificationsPopup notificationsBtnClick={notificationsBtnClick}/> : null}
        </nav>
    )
}

export default Navigation