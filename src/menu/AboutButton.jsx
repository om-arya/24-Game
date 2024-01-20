import { Link } from 'react-router-dom';
import aboutButton from './menu-assets/about_button.png';

function AboutButton() {
    return (
        <div className='menu-button'>
            <Link to='/about'>
            <img
                id='about-button'
                
                src={aboutButton}
                alt='About'
            />
            </Link>
        </div>
    );
}

export default AboutButton;