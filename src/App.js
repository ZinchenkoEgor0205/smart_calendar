import './styles/App.css';
import './components/month'
import Calendar from "./components/calendar";
import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";





function checkUserAuth() {

    fetch('http://127.0.0.1:8000/users/me', {
            credentials: 'include'
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data['detail'] === 'Unauthorized' ? console.log(1) : console.log(2)
    }).catch((error) => console.error('Error:', error));
}


function App() {


    return (
        <div className={'app'} >
            <Navigation/>
            <button type={"button"} onClick={checkUserAuth}>check</button>
            <div className={'content'}>
                <Calendar/>
                <Sidebar/>
            </div>

        </div>
    )
}


export default App
