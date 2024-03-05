import '../styles/Account_popup.css'

function AccountPopup({accountBtnClick}) {

    function accountPopupBtnClick() {
        accountBtnClick()
    }

    return (
        <div className={'account-popup'}>
            <h3 className={'account-popup-header'}>Личный кабинет</h3>
            <button className={'account-popup-close'} type={'button'} onClick={accountPopupBtnClick}>Закрыть</button>
            <form className={'account-popup-form'}>
                <input className={'account-popup-form-input'} placeholder={'Email'}/>
                <input className={'account-popup-form-input'} placeholder={'Пароль'} type={'password'}/>
                <button className={'account-popup-form-btn'} name={'login'} type={'button'} onClick={accountPopupBtnClick}>Войти</button>
            </form>
        </div>
    )
}

export default AccountPopup