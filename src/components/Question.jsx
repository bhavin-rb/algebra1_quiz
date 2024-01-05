import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnswerOptions from '../components/AnswerOptions';
import ScoreEmoji from '../components/ScoreEmoji';

const Question = () => {
    // State to manage questions, current question index, user answers, and score display
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch questions from the provided API
        fetch('https://bhavin-rb.github.io/math_quiz_1/algebra1_api.json')
            .then(response => response.json())
            .then(data => setQuestions(data.quiz.questions));
    }, []);

    // Retrieve the current question based on the current index
    const currentQuestion = questions[currentQuestionIndex];

    // Function to handle the selection of an answer option
    const handleAnswerSelect = (selectedOption) => {
        setUserAnswers(prevAnswers => [...prevAnswers, selectedOption]);
    };
    // Function to handle moving to the next question
    const handleNextQuestion = () => {
        // Check if an answer option is selected before moving to the next question
        if (userAnswers.length === currentQuestionIndex) {
            setErrorMessage('Please select an answer option.');
        } else {
            // If an answer option is selected, clear the error message and move to the next question
            setErrorMessage('');
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            // If the current question is the last one, show the final score
            if (currentQuestionIndex === questions.length - 1) {
                setShowScore(true);
            }
        }
    };
   // Function to calculate the user's score based on selected answers
    const calculateScore = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (question.answer === userAnswers[index]) {
                score += 1;
            }
        });
        return score;
    };
    // Function to handle starting over by resetting state
    const handleStartOver = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setShowScore(false);
        setErrorMessage('');
    };
    // Render the question, answer options, and feedback components
    return (
        <div className="question-container">
            {currentQuestion && (
                <div>
                    <div className="question-header">
                        <span className="question-number">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </span>
                        {/* <h2>{currentQuestion.question}</h2> */}
                       <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
                    </div>
                    {/* <h2>{currentQuestion.question}</h2> */}
                    <AnswerOptions
                        options={currentQuestion.options}
                        onSelectAnswer={handleAnswerSelect}
                        currentQuestionIndex={currentQuestionIndex}
                        userAnswers={userAnswers}
                        currentQuestion={currentQuestion}
                        
                    />
                    <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {userAnswers.length > 0 && currentQuestionIndex === userAnswers.length - 1 && (
                    <div className="answer-feedback">
                        {currentQuestion.answer === userAnswers[userAnswers.length - 1] ? (
                        <p className="correct-message">Correct!</p>
                        ) : (
                        <p className="incorrect-message">Incorrect!</p>
                        )}
                    </div>
                    )}
                </div>
            )}
            {showScore && (
                <div>
                    <ScoreEmoji score={calculateScore()} />
                    <Link to="/">
                        <button className="start-over-button" onClick={handleStartOver}>Start Over</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Question;
