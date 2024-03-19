
import '../styles/Registration_popup.css'
import axios from "axios";

function RegistrationPopup({registrationBtnClick}) {

    function registrationPopupBtnClick() {
        function register() {
            try {
                const response = axios.post('http://127.0.0.1:8000/auth/register', {
                    email: 'email@email.com',
                    password: 'password',
                    username: 'username1',
                });

                console.log(response.data); // Log the response data
                // Handle the response data as needed (e.g., update state, dispatch actions, etc.)
            } catch (error) {
                console.error('Error:', error);
                // Handle the error (e.g., show an error message to the user)
            }
        }
        register()
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