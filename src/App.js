import './styles/App.css';
import './components/month'
import Calendar from "./components/calendar";
import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";



function App() {
    return (
        <div className={'app'}>
            <Navigation/>
            <div className={'content'}>
                <Calendar/>
                <Sidebar/>
            </div>

        </div>
    )
}


export default App
