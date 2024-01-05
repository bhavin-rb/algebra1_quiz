import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AnswerOptions = ({ options, onSelectAnswer, currentQuestionIndex, currentQuestion }) => {
    // State to manage shuffled options
    const [shuffledOptions, setShuffledOptions] = useState([]);

    useEffect(() => {
        // Shuffle the options when the question changes
        const shuffled = [...options].sort(() => Math.random() - 0.5);
        setShuffledOptions(shuffled);
        setSelectedOption(null); // Reset selected option when the question changes
    }, [currentQuestionIndex, options]);

    // State to manage the selected option
    const [selectedOption, setSelectedOption] = useState(null);

     // Function to handle click on an option
    const handleOptionClick = (option) => {
        // Allow selecting an option only if no option is currently selected
        if (selectedOption === null) {
            setSelectedOption(option);
            onSelectAnswer(option);
        }
    };
   // Render the shuffled options
    return (
        <ul className="answer-options">
            {shuffledOptions.map((option, index) => (
                <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    style={{
                        backgroundColor: option === selectedOption ? (currentQuestion.answer === option ? 'green' : 'tomato') : 'white',
                        color: option === selectedOption ? 'white' : '#333',
                    }}
                >
                    {option}
                </li>
            ))}
        </ul>
    );
};
// PropTypes for type checking
AnswerOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onSelectAnswer: PropTypes.func.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    currentQuestion: PropTypes.object.isRequired,
};

export default AnswerOptions;



