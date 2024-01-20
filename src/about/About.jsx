function About() {
    return(
        <div className='about'>
            <p id='about-title'>
                About
            </p><hr />

            <p id='contact-me'>
                Contact Me!: <a href = 'mailto:om.arya0577@gmail.com'>om.arya0577@gmail.com</a>
            </p>

            <p
                className='info-header'
                id='how-to-play-header'>
                How to Play
            </p>
            <p
                className='info-text'
                id='how-to-play-text'>
                <strong>The objective of the game is to make the number '24' using the 4 numbers
                shown!</strong> You may add, subtract, multiply, divide, and/or use parentheses
                by clicking the corresponding buttons. Use all 4 numbers on the card, but use each 
                number only once. The rules of order of operations apply.<br /><br />For example, 
                let's say you have the numbers 3, 4, 5, and 8. This card could be solved with:
                <ol>
                <li>(5 - 4) x 8 x 3, or</li>
                <li>8 x 4 - 5 - 3.</li>
                </ol>
                <em>Challenge: There are 4 more distinct solutions to this card, without reordering
                    numbers. Can you find them all? It's harder than you may think!</em>
            </p>

            <p
                className='info-header'
                id='difficulty-header'>
                Difficulty
            </p>
            <p
                className='info-text'
                id='difficulty-text'>
                The dots on the corners of each card correspond to their difficulty:<br /><br />
                1 dot: Easy.<br />
                2 dots: Medium.<br />
                3 dots: Hard.<br /><br />
                Feel free to change the difficulty levels of the cards shown to you by using the
                checkboxes on the sidebar, or leave them all checked for a random mix.<br /><br />
                Note: There are 400 Easy cards, 400 Medium cards, and 200 Hard cards.
            </p>

            <p
                className='info-header'
                id='tips-header'>
                Tips
            </p>
            <p
                className='info-text'
                id='tips-text'>
                <ul>
                    <li>Try looking at the numbers not as four individual numbers,
                        but as two pairs.</li>
                    <li>Try choosing one number and turning the other three numbers
                        into what you need. <em>(For example, if there is a 3, try to make an 8, 21,
                        27 or 72.)</em></li>
                    <li>Parentheses are rarely unavoidable, but they can be - particularly when
                        dealing with 3-dot cards.</li>
                    <li>If your speed of solving cards is a bit slow, don't worry. Keep practicing,
                        and eventually, patterns will come to you with ease.</li>
                </ul>
            </p>
        </div>
    );
}

export default About;