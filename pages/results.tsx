import { useRouter } from 'next/router';
import type { FC } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Statistics from '../components/Statistics';

interface resultsProps {}

const Results: FC<resultsProps> = ({}) => {
  const router = useRouter();
  const { total, rigths } = router.query;
  const percentage = (total && rigths) && Math.round((Number(rigths) / Number(total))* 100)
  
  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-[10%]">
      <h1 className="text-[3rem]">Resultado Final</h1>
      <div className="flex">
        <Statistics text="Perguntas" value={total} />
        <Statistics text="Certas" value={rigths} />
        <Statistics text="Percentual" value={`${percentage}%`} />
      </div>
      <ButtonComponent text="Jogar Novamente" hrefComponent="/" disable={ true }/>
    </div>
  );
}
export default Results;