import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import Confetti from "react-confetti";

interface QuizQuestion {
  question: string;
  choices: string[];
  correctAnswer: string;
}

interface QuizTopic {
  id: number;
  topic: string;
  level: string;
  totalQuestions: number;
  perQuestionScore: number;
  questions: QuizQuestion[];
}

interface QuizProps {
  id: number;
  handleOpen: () => void;
  open: boolean;
  quiz: QuizTopic[];
  handleTopicSelect: (topic: string) => void;
}

export const Quiz: React.FC<QuizProps> = ({ quiz, handleOpen, open, id }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const handleNext = () => {
    const totalQuestions = quiz.reduce(
      (total: number, item: QuizTopic) => total + item.questions.length,
      0
    );

    if (activeQuestion === totalQuestions - 1) {
      setQuizCompleted(true);
      return;
    }

    setActiveQuestion(activeQuestion + 1);
    setSelectedAnswer(false);
    setSelectedChoice(null);
  };

  const currentQuiz = quiz.find(
    (item) => activeQuestion < item.questions.length
  );

  if (!currentQuiz) {
    return null;
  }

  const { question, choices, correctAnswer } =
    currentQuiz.questions[activeQuestion];

  const selectCorrectAnswer = (choice: string | null, index: number) => {
    setSelectedChoice(index);
    if (choice === correctAnswer) {
      setSelectedAnswer(true);
      console.log("To'gri");
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setSelectedAnswer(false);
      console.log("Notog'ri");
    }
  };

  const handleAnswerSubmit = async () => {
    const response = await axios.get(
      `https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login/${id}`
    );
    const user = response.data;
    const prevResult = user.result;
    const prevResultTopic = user[currentQuiz.topic.toLowerCase()];

    let newResult = prevResult;
    let newResultTopic = prevResultTopic;

    if (selectedAnswer) {
      newResult += 1;
      newResultTopic += 1;
      setCorrectAnswers(correctAnswers + 1);
      try {
        axios.put(
          `https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login/${id}`,
          {
            result: newResult,
            [currentQuiz.topic.toLowerCase()]: newResultTopic,
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Javob berilmagan");
    }

    // Keyingi savolni o'tish
    handleNext();
  };

  const totalQuestions = quiz.reduce(
    (total: number, item: QuizTopic) => total + item.questions.length,
    0
  );

  return (
    <div className="mt-20">
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        {!quizCompleted ? (
          <>
            <DialogHeader>
              {currentQuiz.topic}dan {totalQuestions} talik savollar to'plami
            </DialogHeader>
            <DialogBody divider>
              {activeQuestion + 1} / {totalQuestions} <br />
              <div>
                <div className="text-2xl font-bold ">{question}</div>
                <ul className="mt-4 font-medium text-lg">
                  {choices.map((choice: string, index: number) => (
                    <li
                      key={index}
                      onClick={() => selectCorrectAnswer(choice, index)}
                      className={
                        selectedChoice === index
                          ? "bg-green-800 py-1 px-2 text-white rounded-md"
                          : "py-1 px-2"
                      }
                    >
                      {choice}
                    </li>
                  ))}
                </ul>
              </div>
            </DialogBody>
            <DialogFooter>
              <Button onClick={() => handleAnswerSubmit()}>
                {activeQuestion === currentQuiz.questions.length - 1
                  ? "Tugatish"
                  : "Keyingisi"}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div>
            <DialogHeader>
              {currentQuiz.topic}dan {totalQuestions} talik savollar to'plami
              tugadi
            </DialogHeader>
            <DialogBody>
              {correctAnswers >= totalQuestions / 2 && (
                <Confetti numberOfPieces={200} gravity={0.1} />
              )}
              <p> To'g'ri javoblar: {correctAnswers}</p>
              <p>Noto'g'ri javoblar: {incorrectAnswers}</p>
              <p>Barcha savollar soni: {totalQuestions}</p>
            </DialogBody>
          </div>
        )}
      </Dialog>
    </div>
  );
};
