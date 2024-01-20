import clearButton from './math-buttons-assets/clear_button.png';

function ClearButton({ handleClear }) {
    return(
        <>
            <img
                className='math-button'
                id='clear-button'

                src={clearButton}
                alt='Clear'

                onClick={() => handleClear()} // Passed to Play.jsx.
            />
        </>
    );
}

export default ClearButton;