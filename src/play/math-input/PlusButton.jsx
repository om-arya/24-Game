import plusButton from './math-buttons-assets/plus_button.png';

function PlusButton({ handleOperationClick }) {
    return(
        <>
            <img
                className='math-button'
                id='plus-button'

                src={plusButton}
                alt='Add'
                
                onClick={() => handleOperationClick('+')} // Passed to Play.jsx.
            />
        </>
    );
}

export default PlusButton;