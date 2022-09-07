import type { FC } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface CountdownComponentProps {
  durationTime: number
  timesUpCountdown: () =>  void
}

const CountdownComponent: FC<CountdownComponentProps> = ({durationTime, timesUpCountdown}) => {
  return (
    <div className="flex text-[2rem] m-[20px]">
      <CountdownCircleTimer
        isPlaying
        size={ 120 }
        duration={ durationTime }
        onComplete={ timesUpCountdown }
        colors={['#75975E', '#658354', '#861600', '#B53737']}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
export default CountdownComponent;