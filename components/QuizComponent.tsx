import { FC } from 'react';
import QuestionModel from '../model/QuestionModel';
import QuestionComponent from './QuestionComponent';
import ButtonComponent from './ButtonComponent'

interface QuizComponentProps {
  question: QuestionModel
  lastQuestion: boolean
  questionAnswered: (question: QuestionModel) => void
  nextStep: () => void
  onResponseProps: (index: number) => void
  timesUpProps: () => void
}

const QuizComponent: FC<QuizComponentProps> = ({
  question,
  lastQuestion,
  questionAnswered,
  nextStep,
  onResponseProps,
  timesUpProps
}) => {

  // const onResponse = (index: number) => {
  //   question.replyWith(index)
  // };

  // const timesUp = () => {
  //   if(!question.answered) {
  //     question.replyWith(-1);
  //   }
  // };

  return (
    <div className="flex flex-col gap-2 h-[100vh] justify-center items-center">
      {question ? (
        <QuestionComponent
          question={ question }
          onResponseQuestion={onResponseProps}
          timesUpQuestion={timesUpProps}
          timeForResponse={ 15 }
        />
        ) : false}
      <ButtonComponent text={lastQuestion ? 'Finalizar Quiz' : 'Próxima Questão'} disable={question.answered} />
    </div>
  );
}

export default QuizComponent;