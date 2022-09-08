import type { FC } from 'react';
import QuestionModel from '../model/QuestionModel';
import AnswerComponent from './AnswerComponent';
import CountdownComponent from './CountdownComponent';
import StatementComponent from './StatementComponent';

interface QuestionComponentProps {
  question: QuestionModel
  timeForResponse?: number
  onResponseQuestion: (index: number) => void
  timesUpQuestion: () =>  void
}

const QuestionComponent: FC<QuestionComponentProps> = ({ question, onResponseQuestion, timesUpQuestion, timeForResponse }) => {
  const letters = [
    { letterStr: 'A', color: '#F2C866'},
    { letterStr: 'B', color: '#F266BA'},
    { letterStr: 'C', color: '#85D4F2'},
    { letterStr: 'D', color: '#BCE566'}
  ];

  return (
    <div className="flex flex-col items-center mt-[40px]">
      <StatementComponent text={question.statement} />
      <CountdownComponent key={question.id} durationTime={ timeForResponse ?? 10 } timesUpCountdown={ timesUpQuestion } />
      {question.answers.map((element, i) => (
        <AnswerComponent
          key={ `${question.id}-${i}` }
          answer={element}
          index={ i }
          letter={ letters[i].letterStr }
          backgroundLetterColor={ letters[i].color }
          onResponseAnswer={ onResponseQuestion }
          changeOpacity={ question.answered }
        />
      ))}
    </div>
  );
}

export default QuestionComponent;