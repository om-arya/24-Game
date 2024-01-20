import minusButton from './math-buttons-assets/minus_button.png';

function MinusButton({ handleOperationClick }) {
    return(
        <>
            <img
                className='math-button'
                id='minus-button'

                src={minusButton}
                alt='Subtract'
                
                onClick={() => handleOperationClick('-')} // Passed to Play.jsx.
            />
        </>
    );
}

export default MinusButton;