import '../styles/Notifications_popup.css'

function NotificationsPopup({notificationsBtnClick}) {

    function notificationsPopupBtnClick() {
        notificationsBtnClick()
    }

    return (
        <div className={'notifications-popup'}>
            <h3 className={'notifications-popup-header'}>Личный кабинет</h3>
            <button className={'notifications-popup-close'} type={'button'} onClick={notificationsPopupBtnClick}>Закрыть</button>
            <form className={'notifications-popup-form'}>
                <input className={'notifications-popup-form-input'} placeholder={'Email'}/>
                <input className={'notifications-popup-form-input'} placeholder={'Пароль'} type={'password'}/>
                <button className={'notifications-popup-form-btn'} name={'login'} type={'button'} onClick={notificationsPopupBtnClick}>Войти</button>
            </form>
        </div>
    )
}

export default NotificationsPopup