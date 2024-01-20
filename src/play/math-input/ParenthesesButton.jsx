import parenthesesButton from './math-buttons-assets/parentheses_button.png';

function ParenthesesButton({ handleOperationClick }) {
    return(
        <>
            <img
                className='math-button'
                id='parentheses-button'

                src={parenthesesButton}
                alt='Parentheses'
                
                onClick={() => handleOperationClick('(')} // Passed to Play.jsx.
            />
        </>
    );
}

export default ParenthesesButton;