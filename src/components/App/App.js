import ClockProvider from '../../hooks/clockContext';
import Container from '../Container/Container';
import './App.css';

function App() {
    return (
        <main>
            <ClockProvider>
                <Container />
            </ClockProvider>
        </main>
    );
}

export default App;
