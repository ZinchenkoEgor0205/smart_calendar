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
                <input className={'account-popup-form-element'} placeholder={'Имя'}/>
                <input className={'account-popup-form-element'} placeholder={'Фамилия'}/>
                <input className={'account-popup-form-element'} placeholder={'Email'}/>
                <input className={'account-popup-form-element'} placeholder={'Телефон'}/>
                <input className={'account-popup-form-element'} placeholder={'Страна'}/>
                <input className={'account-popup-form-element'} placeholder={'Город'}/>
                <input className={'account-popup-form-element'} placeholder={'Адрес'}/>
                <input className={'account-popup-form-element'} placeholder={'Статус'}/>
                <input className={'account-popup-form-element'} placeholder={'Пароль'} type={'password'}/>
                <a className={'account-popup-form-element'} href={''}>Редактировать данные</a>
            </form>
        </div>
    )
}

export default AccountPopup