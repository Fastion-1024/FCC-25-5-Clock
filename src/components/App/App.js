import ClockProvider from '../../hooks/clockContext';
import BasicClock from '../BasicClock/BasicClock';
import './App.css';

function App() {
    return (
        <main>
            <ClockProvider>
                <BasicClock />
            </ClockProvider>
        </main>
    );
}

export default App;
