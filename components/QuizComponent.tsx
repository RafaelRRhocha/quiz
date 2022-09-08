import { FC } from 'react';
import QuestionModel from '../model/QuestionModel';
import QuestionComponent from './QuestionComponent';
import ButtonComponent from './ButtonComponent'

interface QuizComponentProps {
  question: QuestionModel
  lastQuestion: boolean
  questionAnswered: (question: QuestionModel) => void
  nextStep: () => void
}

const QuizComponent: FC<QuizComponentProps> = ({
  question,
  lastQuestion,
  questionAnswered,
  nextStep
}) => {

  const onResponse = (index: number) => {
    questionAnswered(question.replyWith(index))
  };

  const timesUp = () => {
    if(!question.answered) {
      questionAnswered(question.replyWith(-1));
    }
  };

  return (
    <div className="flex flex-col gap-2 h-[100vh] justify-center items-center">
      {question ? (
        <>
          <QuestionComponent
            question={ question }
            onResponseQuestion={ onResponse }
            timesUpQuestion={ timesUp }
            timeForResponse={ 15 }
            />
          <ButtonComponent onClickComponent={ nextStep } text={lastQuestion ? 'Finalizar Quiz' : 'Próxima Questão'} disable={question.answered} />
        </>
        ) : false}
    </div>
  );
}

export default QuizComponent;