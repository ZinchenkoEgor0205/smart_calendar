import '../styles/Login_popup.css'
function LoginPopup({loginBtnClick}) {

    function loginPopupBtnClick() {
        console.log('Logined')
        loginBtnClick()
    }

    return (
        <div className={'login-popup'}>
            <h3 className={'login-popup-header'}>Login</h3>
            <form className={'login-popup-form'}>
                <input className={'login-popup-form-input'} placeholder={'Логин'}/>
                <input className={'login-popup-form-input'} placeholder={'Пароль'} type={'password'}/>
                <button className={'login-popup-form-btn'} name={'login'} type={'button'} onClick={loginPopupBtnClick}>Войти</button>
            </form>
        </div>
    )
}

export default LoginPopup