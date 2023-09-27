import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import { MdGraphicEq } from "react-icons/md";
import "./Quiz.css";

const Quiz = () => {
  const { category } = useParams();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [timer, setTimer] = useState(10);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();


  useEffect(() => {
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`;
    fetchQuestions(apiUrl);
  }, [category]);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          handleNextQuestion();
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [currentQuestionIndex, questions, timer]);


  const fetchQuestions = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

      const extractedQuestions = data.results.map((result) => ({
        question: result.question,
        correct_answer: result.correct_answer,
        incorrect_answers: result.incorrect_answers,
        answers: [result.correct_answer, ...result.incorrect_answers],
      }));

      setQuestions(extractedQuestions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions", error);
    }
  };

  const handleOptionSelect = (selected) => {
    const isCorrect = selected === questions[currentQuestionIndex].correct_answer;
    setSelectedOption(selected);
    setCorrectAnswer(questions[currentQuestionIndex].correct_answer);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 100);
    }

    setTimeout(handleNextQuestion, 2000);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCorrectAnswer(null);
    setTimer(10);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/score",{state: score});
      console.log(score);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <div className="q-top">
        <ArrowButton className="q-icon" />
        <MdGraphicEq className="q-icon" />
      </div>
      <div>
        <div className="timer">{timer}</div>
        <div className="quiz-qn">
          <p style={{ color: "#FFC102", margin: "32px 0px 16px 0px" }}>
            Question {currentQuestionIndex + 1}/10
          </p>
          <p style={{ fontWeight: 600 }}>{currentQuestion.question}</p>
        </div>
        <ul className="quiz-ans">
          {currentQuestion.answers.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="quiz-ans-li"
            >
              {option}
              <span
                style={{
                  backgroundColor:
                    selectedOption === option
                      ? option === correctAnswer
                        ? "#FFC102"
                        : "red"
                      : "white",
                  height: "18px",
                  width: "18px",
                  border: "1px solid #FFC102 ",
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedOption === option
                  ? option === correctAnswer
                    ? "✔"
                    : "✖"
                  : " "}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
