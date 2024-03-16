import '../styles/Login_popup.css'
function LoginPopup({setLoginPopupVisibility, loginPopupVisibility, loginPopupSwitch}) {

    function loginBtnClick() {
        function login () {
            fetch('http://127.0.0.1:8000/auth/jwt/login/?username=myuser&password=mypassword', {method: 'POST'})
                .then((response) => response.json())
                .then((data) => {
                })
                .catch((error) => console.error('Error:', error));
        }
        login()
        setLoginPopupVisibility(!loginPopupVisibility)
    }

    function logoutBtnClick() {
        function logout () {
            fetch('http://127.0.0.1:8000/auth/jwt/logout/', {method: 'POST'})
                .then((response) => response.json())
                .then((data) => {
                })
                .catch((error) => console.error('Error:', error));
        }
        logout()
    }

    return (
        <div className={'login-popup'}>
            <h3 className={'login-popup-header'}>Вход</h3>
            <button className={'login-popup-close'} type={'button'} onClick={loginPopupSwitch}>Закрыть</button>
            <form className={'login-popup-form'}>
                <input className={'login-popup-form-input'} placeholder={'Email'}/>
                <input className={'login-popup-form-input'} placeholder={'Пароль'} type={'password'}/>
                <button className={'login-popup-form-btn'} name={'login'} type={'button'}
                        onClick={loginBtnClick}>Войти
                </button>
                <button className={'login-popup-form-btn'} name={'logout'} type={'button'}
                        onClick={logoutBtnClick}>Выйти
                </button>
                <a className={'account-popup-form-element'} href={''}>Забыли пароль?</a>
            </form>
        </div>
    )
}

export default LoginPopup