import '../styles/Login_popup.css'
import axios from "axios";
function LoginPopup({setLoginPopupVisibility, loginPopupVisibility, loginPopupSwitch, checkUserAuth}) {

    function loginBtnClick() {
        function login() {
            try {
                const form = document.querySelector('.login-popup-form')
                const formData = new FormData(form)
                const username = formData.get('username');
                const password = formData.get('password');
                const response = axios.post('http://127.0.0.1:8000/auth/jwt/login', {
                    username: username,
                    password: password,
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        accept: 'application/json',
                    },
                    withCredentials: true
                }).then((data) => {
                    checkUserAuth()
                })
            } catch (error) {
                console.error('Error:', error);
            }
        }
        login()
        setLoginPopupVisibility(!loginPopupVisibility)
    }



    function logoutBtnClick() {
        function logout () {
            fetch('http://127.0.0.1:8000/auth/jwt/logout', {method: 'POST'})
                .then((response) => response.json())
                .then(() => {

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
                <input className={'login-popup-form-input'} placeholder={'Email'} name={'username'}/>
                <input className={'login-popup-form-input'} placeholder={'Пароль'} type={'password'} name={'password'}/>
                <button className={'login-popup-form-btn'} name={'login'} type={'button'}
                        onClick={loginBtnClick}>Войти
                </button>
            </form>
            <button className={'login-popup-form-btn'} name={'logout'} type={'button'}
                    onClick={logoutBtnClick}>Выйти
            </button>
            <a className={'account-popup-form-element'} href='#'>Забыли пароль?</a>
        </div>
    )
}

export default LoginPopup