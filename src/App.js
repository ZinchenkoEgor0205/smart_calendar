import './styles/App.css';
import './components/month'
import Calendar from "./components/calendar";
import Navigation from "./components/navigation";
import MaskSidebar from "./components/mask_sidebar";



function App() {
    return (
        <div className={'app'}>
            <Navigation/>
            <div className={'content'}>
                <Calendar/>
                <MaskSidebar/>
            </div>

        </div>
    )
}


export default App
