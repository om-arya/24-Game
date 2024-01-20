import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './sidebar/Sidebar.jsx';
import Card from './card/Card.jsx';
import SectorHighlight from './card/SectorHighlight.jsx';
import PlusButton from './math-input/PlusButton.jsx';
import MinusButton from './math-input/MinusButton.jsx';
import MultiplyButton from './math-input/MultiplyButton.jsx';
import DivideButton from './math-input/DivideButton.jsx';
import ParenthesesButton from './math-input/ParenthesesButton.jsx';
import ClearButton from './math-input/ClearButton.jsx';

function Play() {
    useEffect(() => {
        fetchNextCard();
    }, []);

    // Updated through fetchNextCard().
    const [cardData, setCardData] = useState({
        difficulty: '',
        top: '',
        right: '',
        bottom: '',
        left: '',
    });

    /**
     * Fetch the next card; invoked upon launch and after solving a card.
     */
    const fetchNextCard = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getNextCard', null);
            const { difficulty, top, right, bottom, left } = response.data;
    
            setCardData({
                difficulty,
                top,
                right,
                bottom,
                left,
            });
        } catch (error) {
            console.error('Error fetching next card:', error);
        }
    };

    /**
     * Create a new deck to fetch cards from; invoked upon difficulty checkbox changes.
     * @param {boolean} hasEasy Include in the deck?
     * @param {boolean} hasMedium Include in the deck?
     * @param {boolean} hasHard Include in the deck?
     */
    const createNewDeck = async (hasEasy, hasMedium, hasHard) => {
        try {
          await axios.post('http://localhost:8080/createNewDeck', null, {
            params: {
                hasEasy: hasEasy,
                hasMedium: hasMedium,
                hasHard: hasHard,
            },
          });
        } catch (error) {
            console.error('Error creating new deck:', error.response.data);
        }
    };

    // Updated through handleCheckboxChange().
    const [difficultyIsChecked, setDifficultyIsChecked] = useState({
        easy: true,
        medium: true,
        hard: true,
    })

    /**
     * Invoked upon difficulty checkbox changes from Sector.jsx.
     * Causes a createNewDeck() call with the updated difficultyIsChecked values.
     * @param {String} difficulty 
     */
    const handleCheckboxChange = (difficulty) => {
        setDifficultyIsChecked((prevChecked) => ({
            ...prevChecked,
            [difficulty]: !prevChecked[difficulty],
        }));
    };
    
    useEffect(() => {
        createNewDeck(difficultyIsChecked.easy, difficultyIsChecked.medium, difficultyIsChecked.hard);
    }, [difficultyIsChecked]);
    
    // Keep track of when to evaluate expression, and when to allow numbers/operations to be clicked.
    const [clickedNumbers, setClickedNumbers] = useState([]);
    const [expression, setExpression] = useState('');

    // Updated through handleNumberClick() - set to true - and handleClear() - set all to false.
    const [sectorVisibility, setSectorVisibility] = useState({
        top: false,
        right: false,
        bottom: false,
        left: false,
    });

    /**
     * Invoked upon number clicks from Card.jsx.
     * Causes a handleEvaluate call.
     * @param {String} position The number's position on the card.
     * @param {String} number
     */
    const handleNumberClick = (position, number) => {
        if (clickedNumbers.length === clickedOperationCount && !clickedNumbers.includes(position)) {
            setExpression((prevExpression) => prevExpression + number);

            setClickedNumbers((prevclickedNumbers) => [...prevclickedNumbers, position]);
            
            setSectorVisibility((prevVisibility) => ({
                ...prevVisibility,
                [position]: true,
            }));
        }
    };

    useEffect(() => {
        handleEvaluate();
    }, [clickedNumbers]);

    // Keep track of when to allow parentheses to be clicked.
    const [parenthesesIsOn, setParenthesesIsOn] = useState(false);
    // Keep track of when to allow numbers/operations to be clicked.
    const [clickedOperationCount, setClickedOperationCount] = useState(0);

    /**
     * Updates the expression to include the clicked operation; invoked upon operation clicks
     * from math-input files.
     * @param {String} operation 
     */
    const handleOperationClick = (operation) => {
        if (operationsAreClickable) {
            if (operation === '(') {
                if (!parenthesesIsOn && clickedOperationCount === clickedNumbers.length) {
                    setParenthesesIsOn(true);
                    setExpression((prevExpression) => prevExpression + '(');
                } else if (parenthesesIsOn && clickedOperationCount === clickedNumbers.length - 1) {
                    setParenthesesIsOn(false);
                    setExpression((prevExpression) => prevExpression + ') ');
                }
            } else if (clickedOperationCount === clickedNumbers.length - 1) {
                setClickedOperationCount((prevClickedOperationCount) => prevClickedOperationCount + 1);
                setExpression((prevExpression) => prevExpression + ' ' + operation + ' ');
            };
        }
    }
    
    const [result, setResult] = useState(0.0);
    const [resultIsDisplayed, setResultIsDisplayed] = useState(false);

    /**
     * Invoked upon clear button clicks and expression evaluation.
     */
    const handleClear = () => {
        setSectorVisibility({
            top: false,
            right: false,
            bottom: false,
            left: false,
        });
        setExpression('');
        setResultIsDisplayed(false);
        setParenthesesIsOn(false);
        setClickedNumbers([]);
        setClickedOperationCount(0);
        setResult(0.0);
    };
    
    const [checkResultToggle, setCheckResultToggle] = useState(false);
    const [operationsAreClickable, setOperationsAreClickable] = useState(true);
    const [score, setScore] = useState(0);

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    /**
     * Used in handleEvaluate() to determine whether to add ')'.
     * @param {String} expression 
     * @param {String} character To count the occurences of.
     * @returns 
     */
    const countOccurences = (expression, character) => {
        let count = 0;
        for (let index = 0; index < expression.length; index++)
            if (expression[index] === character) count++;
        return count;
    };

    /**
     * If all 4 numbers are clicked, evaluate the expression to validate '24' equality;
     * invoked upon handleNumberClick().
     * Causes a handleClear() call, and a fetchNextCard() call if the expression equals '24'.
     */
    const handleEvaluate = async () => {
        if (clickedNumbers.length === 4) {
            setOperationsAreClickable(false);

            let expressionToEval;
            expressionToEval = expression.replace(new RegExp('x', 'g'), '*').replace(new RegExp('÷', 'g'), '/');
            if (countOccurences(expression, '(') > countOccurences(expression, ')')) {
                expressionToEval += ')';
            }
            
            setResult(eval?.(`"use strict";(${expressionToEval})`));
            setResultIsDisplayed(true);

            await sleep(1500);

            setCheckResultToggle(!checkResultToggle);
        }
    };

    useEffect(() => {
        handleClear();

        if (result === 24) {
            setScore(score + (cardData.difficulty === 'EASY' ? 50
                    : cardData.difficulty === 'MEDIUM' ? 100
                    : 150));
            fetchNextCard();
        }

        setOperationsAreClickable(true);
    }, [checkResultToggle]);
    
    return(
        <div>
            <Sidebar
                score={score}
                difficulty={cardData.difficulty}
                difficultyIsChecked={difficultyIsChecked}
                handleCheckboxChange={handleCheckboxChange}
            />
            
            <Card
                difficulty={cardData.difficulty}
                top={cardData.top}
                right={cardData.right}
                bottom={cardData.bottom}
                left={cardData.left}
                handleNumberClick={handleNumberClick}
            />

            {['top', 'right', 'bottom', 'left'].map((position) => (
                <SectorHighlight
                    key={position}
                    position={position}
                    isVisible={sectorVisibility[position]}
                    onClick={() => handleNumberClick(position)}
                />
            ))}
            
            <p
                id='expression-result'
                className={resultIsDisplayed ? 'visible' : 'hidden'}
                style={{color: result === 24 ? 'green' : 'red'}}
            >{result}</p>

            <p id='expression'>{expression}</p>

            <PlusButton handleOperationClick={handleOperationClick} />

            <MinusButton handleOperationClick={handleOperationClick} />

            <MultiplyButton handleOperationClick={handleOperationClick} />

            <DivideButton handleOperationClick={handleOperationClick} />

            <ParenthesesButton handleOperationClick={handleOperationClick} />

            <ClearButton handleClear={handleClear} />
        </div>
    )
}

export default Play;