import easyCard from './card-assets/24card_easy_template.png';
import mediumCard from './card-assets/24card_medium_template.png';
import hardCard from './card-assets/24card_hard_template.png';

function Card({ difficulty, top, right, bottom, left, handleNumberClick }) {
    // Map numbers to each position.
    const numbers = {
        top: top,
        right: right,
        bottom: bottom,
        left: left
    };
    
    let imageSource;
    switch (difficulty) {
        case 'EASY':
            imageSource = easyCard;
            break;
        case 'MEDIUM':
            imageSource = mediumCard;
            break;
        case 'HARD':
            imageSource = hardCard;
            break;
        default:
            imageSource = easyCard;
    }

    return(
        <div className='card-container'>
            <img
                id='card-img' 

                src={imageSource}
                alt ={`24 Card: ${top}, ${right}, ${bottom}, ${left}`}
            />

            {['top', 'right', 'bottom', 'left'].map((number) => (
                <p
                    key={number}
                    className={`card-number ${numbers[number] >= 10 ? 'double-digit'
                                : numbers[number] === 6 || numbers[number] === 8 ? 'single-digit highpos-number'
                                : numbers[number] === 1 || numbers[number] === 2 ? 'single-digit midpos-number'
                                : 'single-digit lowpos-number'}`}
                    id={number}

                    onClick={() => handleNumberClick(number, numbers[number])} // Passed to Play.jsx.
                >
                    {numbers[number]}
                </p>
            ))}
        </div>
    );
}

export default Card;