import divideButton from './math-buttons-assets/divide_button.png';

function DivideButton({ handleOperationClick }) {
    return(
        <>
            <img
                className='math-button'
                id='divide-button'

                src={divideButton}
                alt='Divide'
                
                onClick={() => handleOperationClick('÷')} // Passed to Play.jsx.
            />
        </>
    );
}

export default DivideButton;