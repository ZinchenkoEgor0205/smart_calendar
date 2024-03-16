
import '../styles/Navigation.css'
import LoginPopup from "./login_popup";
import {useState} from "react";
import RegistrationPopup from "./registration_popup";
import AccountPopup from "./account_popup";
import NotificationsPopup from "./notifications_popup";

function Navigation() {

    const [loginPopupVisibility, setLoginPopupVisibility] = useState(false);
    const [registrationPopupVisibility, setRegistrationPopupVisibility] = useState(false);
    const [accountPopupVisibility, setAccountPopupVisibility] = useState(false);
    const [notificationsPopupVisibility, setNotificationsPopupVisibility] = useState(false);

    function loginBtnClick() {
        function login () {
            fetch('http://127.0.0.1:8000/auth/jwt/login')
                .then((response) => response.json())
                .then((data) => {
                })
                .catch((error) => console.error('Error:', error));
            console.log(1)
        }
        login()
        setLoginPopupVisibility(!loginPopupVisibility)
    }

    function loginPopupSwitch() {
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
                <div className={'nav-container-btn-login'} onClick={loginPopupSwitch}>
                    Войти
                </div>
                <div className={'nav-container-btn-registration'} onClick={registrationBtnClick}>
                    Регистрация
                </div>
                <div className={'nav-container-btn-account'} onClick={accountBtnClick}>
                    Личный кабинет
                </div>
                <div className={'nav-container-btn-notifications'} onClick={notificationsBtnClick}>
                    Уведомления
                </div>
            </div>
            {loginPopupVisibility ? <LoginPopup setLoginPopupVisibility={setLoginPopupVisibility} loginPopupVisibility={loginPopupVisibility} loginPopupSwitch={loginPopupSwitch}/> : null}
            {registrationPopupVisibility ? <RegistrationPopup registrationBtnClick={registrationBtnClick}/> : null}
            {accountPopupVisibility ? <AccountPopup accountBtnClick={accountBtnClick}/> : null}
            {notificationsPopupVisibility ? <NotificationsPopup notificationsBtnClick={notificationsBtnClick}/> : null}
        </nav>
    )
}

export default Navigation