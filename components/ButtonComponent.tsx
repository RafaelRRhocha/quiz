import Link from 'next/link';
import type { FC } from 'react';

interface ButtonComponentProps {
  hrefComponent?: string
  text: string
  onClickComponent?: (e: any) => void
  disable: boolean
}

const ButtonComponent: FC<ButtonComponentProps> = ({ hrefComponent, text, onClickComponent, disable}) => {
  return (
    hrefComponent ? (
      <Link href={ hrefComponent }>
        <button disabled={!disable} onClick={ onClickComponent } className="bg-[#9885F0] mt-[20px] rounded-md font-semibold text-[2rem] py-[10px] px-[20px] disabled:opacity-[0.3] scale-90 disabled:hover:scale-90 hover:scale-100 transition-transform">
          {text}
        </button>
      </Link>
    ) : (
      <button disabled={!disable} onClick={ onClickComponent } className="bg-[#9885F0] mt-[20px] rounded-md font-semibold text-[2rem] py-[10px] px-[20px] disabled:opacity-[0.3] scale-90 disabled:hover:scale-90 hover:scale-100 transition-transform">
        {text}
      </button>
    )
  );
}

export default ButtonComponent;