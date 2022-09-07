import type { FC } from 'react';
import QuestionModel from '../model/QuestionModel';
import AnswerComponent from './AnswerComponent';
import StatementComponent from './StatementComponent';

interface QuestionComponentProps {
  question: QuestionModel
  onResponseQuestion: (index: number) => void
}

const QuestionComponent: FC<QuestionComponentProps> = ({ question, onResponseQuestion }) => {
  const letters = [
    { letterStr: 'A', color: '#F2C866'},
    { letterStr: 'B', color: '#F266BA'},
    { letterStr: 'C', color: '#85D4F2'},
    { letterStr: 'D', color: '#BCE566'}
  ];

  return (
    <div className="flex flex-col items-center">
      <StatementComponent text={question.statement} />
      {question.answers.map((element, i) => (
        <AnswerComponent
          key={ i }
          answer={element}
          index={ i }
          letter={ letters[i].letterStr }
          backgroundLetterColor={ letters[i].color }
          onResponseAnswer={ onResponseQuestion }
        />
      ))}
    </div>
  );
}

export default QuestionComponent;