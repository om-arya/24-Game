function Sidebar( { score, difficulty, difficultyIsChecked, handleCheckboxChange }) {
    return(
        <div className='sidebar-container'>
            <p id='score'>
                <strong>Score: </strong><span>{score}</span>
            </p><hr />

            <p id='difficulties-text'>Difficulties</p>
                
            <div className='difficulty-checkbox-container'>
                <input
                    id='easy-checkbox'
                    className='difficulty-checkbox'

                    type='checkbox'
                    checked={difficultyIsChecked.easy}
                    disabled={difficulty === 'EASY' ? true : false}

                    onChange={() => handleCheckboxChange('easy')} // Passed to Play.jsx.
                />
                <span className='checkbox-text'>Easy<br /></span>

                <input
                    id='medium-checkbox'
                    className='difficulty-checkbox'

                    type='checkbox'
                    checked={difficultyIsChecked.medium}
                    disabled={difficulty === 'MEDIUM' ? true : false}

                    onChange={() => handleCheckboxChange('medium')} // Passed to Play.jsx.
                />
                <span className='checkbox-text'>Medium<br /></span>

                <input
                    id='hard-checkbox'
                    className='difficulty-checkbox'

                    type='checkbox'
                    checked={difficultyIsChecked.hard}
                    disabled={difficulty === 'HARD' ? true : false}

                    onChange={() => handleCheckboxChange('hard')} // Passed to Play.jsx.
                />
                <span className='checkbox-text'>Hard<br /></span>
            </div>
        </div>
    );
}

export default Sidebar;