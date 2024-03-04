import './styles/App.css';
import './components/month'
import Calendar from "./components/calendar";
import Navigation from "./components/navigation";



function App() {
    return (
        <div className={'content'}>
            <div className={'content-left'}>
                <Navigation/>
                <Calendar/>
            </div>
            <div className={'content-right'}>
                <div className={'sidebar'}>
                    test
                </div>
            </div>
        </div>
    )
}


export default App
