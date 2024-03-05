import '../styles/Login_popup.css'
function LoginPopup({loginBtnClick}) {

    function loginPopupBtnClick() {
        loginBtnClick()
    }

    return (
        <div className={'login-popup'}>
            <h3 className={'login-popup-header'}>Вход</h3>
            <button className={'login-popup-close'} type={'button'} onClick={loginPopupBtnClick}>Закрыть</button>
            <form className={'login-popup-form'}>
                <input className={'login-popup-form-input'} placeholder={'Email'}/>
                <input className={'login-popup-form-input'} placeholder={'Пароль'} type={'password'}/>
                <button className={'login-popup-form-btn'} name={'login'} type={'button'}
                        onClick={loginPopupBtnClick}>Войти
                </button>
                <a className={'account-popup-form-element'} href={''}>Забыли пароль?</a>
            </form>
        </div>
    )
}

export default LoginPopup