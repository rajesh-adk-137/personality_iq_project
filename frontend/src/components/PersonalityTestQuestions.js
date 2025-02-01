import React, { useState } from 'react';
import './PersonalityTestQuestions.css';
import { useHistory } from 'react-router-dom';



const questions = [
  {
    question: "Question 1: How do you typically prefer to spend your free time in social settings?",
    options: ["Observing from the sidelines", "Engaging in small group conversations", "Enjoying larger group interactions", "Actively initiating and leading social activities", "Seeking out and energized by large social events"],
    selectedOption: null
  },
  {
    question: "Question 2: How do you handle stressful situations?",
    options: ["Avoidance", "Procrastination", "Staying Calm", "Seeking Support", "Taking Charge"],
    selectedOption: null
  },
  {
    question: "Question 3: What is your approach to problem-solving?",
    options: ["Logical Analysis", "Intuition", "Collaboration", "Trial and Error", "Follow Established Methods"],
    selectedOption: null
  },
  {
    question: "Question 4: How do you make decisions?",
    options: ["Based on Feelings", "Rational Thinking", "Considering Others' Opinions", "Impulsive", "Weighing Pros and Cons"],
    selectedOption: null
  },
  {
    question: "Question 5: How do you handle critical feedbacks?",
    options: ["Defensive", "Reflective", "Ignoring", "Accepting and Learning", "Assertive Response"],
    selectedOption: null
  },
  {
    question: "Question 6: How do you handle change?",
    options: ["Resistance", "Adaptation", "Excitement", "Anxiety", "Creating Change"],
    selectedOption: null
  },
  {
    question: "Question 7: How organized are you?",
    options: ["Messy and Unstructured", "Slightly Disorganized", "Moderately Organized", "Very Organized", "Obsessively Organized"],
    selectedOption: null
  },
  {
    question: "Question 8: Are you more of a risk-taker or risk-averse?",
    options: ["Strong Risk-Averse", "Slightly Risk-Averse", "Neutral", "Slightly Risk-Taking", "Strong Risk-Taking"],
    selectedOption: null
  },
  {
    question: "Question 9: How do you handle conflicts?",
    options: ["Avoidance", "Compromise", "Assertiveness", "Collaboration", "Aggressiveness"],
    selectedOption: null
  },
  {
    question: "Question 10: Are you more detail-oriented or big-picture oriented?",
    options: ["Strong Detail-Oriented", "Slightly Detail-Oriented", "Neutral", "Slightly Big-Picture Oriented", "Strong Big-Picture Oriented"],
    selectedOption: null
  },
  {
    question: "Question 11: How do you recharge your energy?",
    options: ["Alone Time", "Socializing with Friends", "Outdoor Activities", "Creative Pursuits", "Physical Exercise"],
    selectedOption: null
  },
  {
    question: "Question 12: Are you more of a planner or spontaneous?",
    options: ["Strong Planner", "Slightly Planner", "Neutral", "Slightly Spontaneous", "Strong Spontaneous"],
    selectedOption: null
  },
  {
    question: "Question 13: How do you handle deadlines?",
    options: ["Procrastinate until the Last Minute", "Slightly Procrastinate", "Meet Them Comfortably", "Finish Well Ahead", "Stick to Strict Timelines"],
    selectedOption: null
  },
  {
    question: "Question 14: How do you express your emotions?",
    options: ["Openly and Expressively", "Moderately Expressive", "Reserved", "Analytical Approach", "Controlled Display"],
    selectedOption: null
  },
  {
    question: "Question 15: How do you prefer to learn new things?",
    options: ["Reading and Studying", "Visual Demonstrations", "Hands-On Experience", "Group Discussions", "Trial and Error"],
    selectedOption: null
  },
  {
    question: "Question 16: How do you handle criticism?",
    options: ["Take it Personally", "Consider it Constructive", "Ignore it", "Defensive Response", "Seek Feedback"],
    selectedOption: null
  },
  {
    question: "Question 17: Are you more of a leader or a follower?",
    options: ["Strong Leader", "Slightly Leader", "Neutral", "Slightly Follower", "Strong Follower"],
    selectedOption: null
  },
  {
    question: "Question 18: How do you cope with failure?",
    options: ["Give Up Easily", "Learn from Mistakes", "Blame Others", "Persevere", "Reframe Failure as Opportunity"],
    selectedOption: null
  },
  {
    question: "Question 19: How do you handle compliments?",
    options: ["Dismissive", "Appreciative", "Uncomfortable", "Modest Response", "Bask in the Praise"],
    selectedOption: null
  },
  {
    question: "Question 20: How do you deal with ambiguity and uncertainty?",
    options: ["Avoid It", "Embrace It", "Seek Clarity", "Anxiety and Stress", "Make Informed Decisions"],
    selectedOption: null
  },
];


export const selectedOptions = new Array(20).fill(0); // Initializes an array with 20 elements, all set to 0

const PersonalityTestQuestions = () => {
  const history = useHistory();
  const [completed, setCompleted] = useState(false);

  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsData, setQuestionsData] = useState(questions);

  const currentQuestion = questionsData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handlePreviousQuestion = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion.selectedOption !== null && !isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (isLastQuestion) {
      history.push({
        pathname: "/personality-test-result",
        state: { selectedOptions: selectedOptions },
      });
    }
  };
  

  //


  const handleOptionSelect = (option) => {
    const updatedQuestionsData = [...questionsData];
    updatedQuestionsData[currentQuestionIndex].selectedOption = option;
    setQuestionsData(updatedQuestionsData);
  
    // Store the selected option in the selectedOptions array
    const optionIndex = currentQuestion.options.indexOf(option);
    if (optionIndex !== -1) {
      selectedOptions[currentQuestionIndex] = optionIndex + 1;
    } else {
      selectedOptions[currentQuestionIndex] = 0; // Option not found, indicating no selection
    }
  
    // Log the selected option to the console
    // console.log(selectedOptions);
  };
  

  return (
    <>
      
      <div className="container">
        <div className="question-container">
          <h1>Personality Test</h1>
          <p className="question">{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <div
                className={`option ${currentQuestion.selectedOption === option ? 'selected' : ''}`}
                key={index}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="button-container">
            <button
              className={`previous-button ${isFirstQuestion ? 'disabled' : ''}`}
              onClick={handlePreviousQuestion}
              disabled={isFirstQuestion}
            >
              Previous
            </button>
            <button
              className={`next-button ${currentQuestion.selectedOption === null ? 'disabled' : ''}`}
              onClick={handleNextQuestion}
              disabled={currentQuestion.selectedOption === null}
            >
              {isLastQuestion ? 'Get Results ' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalityTestQuestions;