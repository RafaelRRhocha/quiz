import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import QuizComponent from '../components/QuizComponent'
import QuestionModel from '../model/QuestionModel'

const Home: NextPage = () => {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [getQuestion, setGetQuestion] = useState<QuestionModel>();
  const [rigthQuestions, setRigthQuestions] = useState<number>(0);

  const loadingQuestionsIds = async () => {
    const resp = await fetch('/api/quiz');
    const json = await resp.json();
    setQuestionsIds(json)
  }

  const loadingQuestions = async (id: number) => {
    const resp = await fetch(`/api/questions/${id}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.convertAnswersFromObjectQuestion(json)
    setGetQuestion(newQuestion)
  }

  const questionAnsweredFunction = (questionAnswered: QuestionModel) => {
    setGetQuestion(questionAnswered);
    const hitQuestion = questionAnswered.hit;
    setRigthQuestions(rigthQuestions + (hitQuestion ? 1 : 0))
  }

  const idNextQuestion = () => {
    if(getQuestion) {
      const nextIndex = questionsIds.indexOf(getQuestion.id) + 1
      return questionsIds[nextIndex]
    }
  }

  const nextQuestion = (nextId: number) => {
    loadingQuestions(nextId)
  }

  const finishQuiz = () => {
    router.push({
      pathname: '/results',
      query: {
        total: questionsIds.length,
        rigths: rigthQuestions
      }
    })
  }

  const nextStepFunction = () => {
    const nextId = idNextQuestion();
    nextId ? nextQuestion(nextId) : finishQuiz()
  }

  useEffect(() => {
    loadingQuestionsIds()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadingQuestions(questionsIds[0])    
  }, [questionsIds])

  return (
    getQuestion ? (
      <QuizComponent
        question={ getQuestion }
        lastQuestion={ idNextQuestion() === undefined }
        questionAnswered={ questionAnsweredFunction }
        nextStep={ nextStepFunction }
      />
    ) : <p className="text-[4rem] text-center mt-[20%]">Carregando...</p>
  )
}

export default Home
