import type { FC } from 'react';
import AnswerModel from '../model/AnswerModel';

interface AnswerComponentProps {
  answer: AnswerModel
  index: number
  letter: string
  backgroundLetterColor: string
  onResponseAnswer: (index: number) => void
}

const AnswerComponent: FC<AnswerComponentProps> = ({answer, index, letter, backgroundLetterColor, onResponseAnswer}) => {
  
  return (
    <div className="flex m-[10px] w-[800px] min-w-[500px]">
      <div className="flex flex-[1] hover:scale-105 cursor-pointer transition-all" onClick={() => onResponseAnswer(index)}>
        <div style={{backgroundColor: answer.selected ? answer.correct ? '#2BAA6D' : '#E44A4C' : 'white' }} className="flex h-full w-full gap-4 items-center p-3 rounded-md text-black transition-colors">
          <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full text-white" style={{ backgroundColor: backgroundLetterColor}}>
            {letter}
          </div>
          <div>
            {answer.alternatives}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnswerComponent;