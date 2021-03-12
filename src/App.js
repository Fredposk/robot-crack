import Home from './components/Home';

import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Arrays from './components/Arrays';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='h-screen bg-gray-100'>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/about' render={() => <About />} />
                <Route exact path='/arrays' render={() => <Arrays />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
