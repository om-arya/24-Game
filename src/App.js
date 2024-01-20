import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './menu/Menu.jsx';
import Play from './play/Play.jsx';
import About from './about/About.jsx';

function App() {
  const [menuVisible, setMenuVisible] = useState(true);

  const handleMenuButtonClick = () => {
    setMenuVisible(false);
  };
  
  return(
    <Router>
        <Routes>
          <Route
              path="/"
              element={<Menu
                        isVisible={menuVisible}
                        onClick={handleMenuButtonClick}
                       />}
          />
          
          <Route
            path="/play"
            element={<Play />}
          />

          <Route
            path="/about"
            element={<About />}
          />
        
        </Routes>
    </Router>
  );
}

export default App;
