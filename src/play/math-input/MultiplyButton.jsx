import multiplyButton from './math-buttons-assets/multiply_button.png';

function MultiplyButton({ handleOperationClick }) {
    return(
        <>
            <img
                className='math-button'
                id='multiply-button'

                src={multiplyButton}
                alt='Multiply'
                
                onClick={() => handleOperationClick('x')} // Passed to Play.jsx.
            />
        </>
    );
}

export default MultiplyButton;