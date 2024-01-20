import { Link } from 'react-router-dom';
import playButton from './menu-assets/play_button.png';

function PlayButton() {
    return (
        <div className='menu-button'>
            <Link to='/play'>
            <img
                id='play-button'
                
                src={playButton}
                alt='Play!'
            />
            </Link>
        </div>
    );
}

export default PlayButton;