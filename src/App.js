import './styles/App.css';
import './components/month'
import Calendar from "./components/calendar";
import Navigation from "./components/navigation";



function App() {
    return (
        <div className={'content'}>
            <Navigation/>
            <Calendar/>
        </div>
    )
}


export default App
