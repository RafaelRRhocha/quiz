import type { FC } from 'react';

interface StatisticsProps {
  value: any
  text: string
  backgroundColorProps?: string
  textColor?: string
}

const Statistics: FC<StatisticsProps> = ({value, text, backgroundColorProps, textColor}) => {
  return (
    <div className="flex flex-col m-[10px] items-center scale-95 hover:scale-100 transition-transform">
      <div className="flex h-[180px] w-[180px] justify-center items-center rounded-full text-[4rem]" style={{backgroundColor: backgroundColorProps ?? '#FDD60F', color: textColor ?? '#333'}}>
        {value}
      </div>
      <div className="text-zinc-800 text-[1.7rem] font-semibold">
        {text}
      </div>
    </div>
  );
}

export default Statistics;