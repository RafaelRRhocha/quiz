import type { NextPage } from 'next'
import { useState } from 'react'
import QuizComponent from '../components/QuizComponent'
import AnswerModel from '../model/AnswerModel'
import QuestionModel from '../model/QuestionModel'

const mockQuestion = new QuestionModel(5, 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?', [
  AnswerModel.wrong('Jânio Quadros'),
  AnswerModel.wrong('Jacinto Anjos'),
  AnswerModel.correct('João Goulart'),
  AnswerModel.wrong('Getúlio Vargas'),
]);

const Home: NextPage = () => {
  const [getQuestion, setGetQuestion] = useState(mockQuestion);

  const questionAnsweredFunction = () => {

  }

  const nextStepFunction = () => {

  }

  const onResponse = (index: number) => {
    setGetQuestion(getQuestion.replyWith(index))
  };

  const timesUp = () => {
    if(!getQuestion.answered) {
      setGetQuestion(getQuestion.replyWith(-1));
    }
  };

  return (
    <QuizComponent
      question={ getQuestion }
      lastQuestion={ false }
      questionAnswered={ questionAnsweredFunction }
      nextStep={ nextStepFunction }
      onResponseProps={ onResponse }
      timesUpProps={ timesUp }
    />
  )
}

export default Home
