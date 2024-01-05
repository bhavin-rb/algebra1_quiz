import PropTypes from 'prop-types';

const ScoreEmoji = ({ score }) => {
    let emoji;

    if (score === 1) {
        emoji = "😟"; // Frown face
    } else if (score >= 2 && score <= 3) {
        emoji = "😊"; // Smile face
    } else if (score >= 4 && score <= 5) {
        emoji = "😃"; // Happy face
    }

    return (
        <div className="score-emoji">
            <p className="score">Your Score: {score} / 5</p>
            <p className="emoji">{emoji}</p>
        </div>
    );
};

ScoreEmoji.propTypes = {
    score: PropTypes.number.isRequired,
};

export default ScoreEmoji;