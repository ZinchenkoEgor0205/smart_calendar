
import '../styles/Notifications_popup.css'

function NotificationsPopup({notificationsBtnClick}) {

    function notificationsPopupBtnClick() {
        notificationsBtnClick()
    }

    return (
        <div className={'notifications-popup'}>
            <h3 className={'notifications-popup-header'}>Уведомления</h3>
            <button className={'notifications-popup-close'} type={'button'} onClick={notificationsPopupBtnClick}>Закрыть</button>
            <form className={'notifications-popup-form'}>
                111111111111111111111111111
            </form>
        </div>
    )
}

export default NotificationsPopup