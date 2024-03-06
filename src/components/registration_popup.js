import '../styles/Registration_popup.css'
function RegistrationPopup({registrationBtnClick}) {

    function registrationPopupBtnClick() {
        registrationBtnClick()
    }

    return (
        <div className={'registration-popup'}>
            <h3 className={'registration-popup-header'}>Регистрация</h3>
            <button className={'registration-popup-close'} type={'button'} onClick={registrationPopupBtnClick}>Закрыть</button>
            <form className={'registration-popup-form'}>
                <input className={'registration-popup-form-input'} placeholder={'Email'}/>
                <input className={'registration-popup-form-input'} placeholder={'Имя пользователя'}/>
                <input className={'registration-popup-form-input'} placeholder={'Пароль'} type={'password'}/>
                <button className={'registration-popup-form-btn'} name={'registration'} type={'button'}
                        onClick={registrationPopupBtnClick}>Зарегистрироваться
                </button>
            </form>
        </div>
    )
}

export default RegistrationPopup