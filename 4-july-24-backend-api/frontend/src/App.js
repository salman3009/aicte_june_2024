
import Spotify from './Spotify';
import './Spotify.css';
import Header from './Header';
import Login from './Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/dashboard" element={<Spotify />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;