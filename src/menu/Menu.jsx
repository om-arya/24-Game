import PlayButton from './PlayButton.jsx';
import AboutButton from './AboutButton.jsx';

function Menu({ isVisible }) {
    return (
      <div className={`menu-container ${isVisible ? 'visible' : 'hidden'}`}>
        <p id='menu-welcome'>
          Welcome to <span>24!</span>
        </p>

        <PlayButton />
        
        <AboutButton />
      </div>
    );
  };

  export default Menu;