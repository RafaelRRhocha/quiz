import type { FC } from 'react';

interface StatementComponentProps {
  text: string
}

const StatementComponent: FC<StatementComponentProps> = ({ text }) => {
  return (
    <div className="flex">
      <p className="text-[2.5rem] text-center">
        {text}
      </p>
    </div>
  );
}
export default StatementComponent;