import Home from './components/Home';

import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Arrays from './components/Arrays';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Question from './components/Question';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='h-screen bg-gray-100'>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/about' render={() => <About />} />
                <Route exact path='/arrays' render={() => <Arrays />} />
                <Route exact path='/favorites' render={() => <Favorites />} />
                <Route exact path='/search' render={() => <Search />} />
                <Route
                    exact
                    path='/questions/:id'
                    render={(props) => (
                        <Question history={props.history} match={props.match} />
                    )}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
