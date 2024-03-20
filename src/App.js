import './styles/App.css';
import './components/month'
import Calendar from "./components/calendar";
import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";
import {useEffect, useState} from "react";








function App() {

    const [userData, setUserData] = useState(null);


    function checkUserAuth() {

        fetch('http://127.0.0.1:8000/users/me', {
            credentials: 'include'
            })
                .then((response) => response.json())
                .then((data) => {
                    data['detail'] != 'Unauthorized' ?  setUserData(data) : setUserData(null)
                }).catch((error) => {
                    setUserData({})
                    console.error('Error:', error)
            });
        }

    function test() {
        console.log(userData)
    }



    useEffect(() => {
        checkUserAuth();
    }, []);


    return (
        <div className={'app'}>
            <Navigation userData={userData} setUserData={setUserData} checkUserAuth={checkUserAuth}/>
            <button type={"button"} onClick={test}>check</button>
            <div className={'content'}>
                <Calendar/>
                <Sidebar/>
            </div>

        </div>
    )
}


export default App
