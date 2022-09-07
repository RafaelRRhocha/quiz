import type { NextPage } from 'next'
import { useState } from 'react'
import QuestionComponent from '../components/QuestionComponent'
import AnswerModel from '../model/AnswerModel'
import QuestionModel from '../model/QuestionModel'

const mockQuestion = new QuestionModel(5, 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?', [
  AnswerModel.wrong('Jânio Quadros'),
  AnswerModel.wrong('Jacinto Anjos'),
  AnswerModel.correct('João Goulart'),
  AnswerModel.wrong('Getúlio Vargas'),
]);

const Home: NextPage = () => {
  const [getQuestionMock, setQuestionMock] = useState( mockQuestion );

  const onResponse = (index: number) => {
    setQuestionMock(getQuestionMock.replyWith(index))
    console.log(index)
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <QuestionComponent question={ getQuestionMock } onResponseQuestion={onResponse}/>
    </div>
  )
}

export default Home
