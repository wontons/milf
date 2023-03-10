import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs, Home } from './components';
import { AppLayout } from './components/AppLayout';
import { DiscGame } from './components/DiscGame';
import { DiscGameHome } from './components/DiscGame/DiscGameHome';
import { Events } from './components/Events/Events';
import { Tour } from './components/Tour';

function App() {
  return (
    <Box>
        <AppLayout content={(
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discgame" element={<DiscGameHome />} />
            <Route path="/discgame/original" element={<DiscGame />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/player-search" element={<PlayerSearch />} /> */}
          </Routes>
        )}/>
    </Box>
  );
}

export default App;
