import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  img: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`${props.img} bg-cover bg-no-repeat bg-center ${props.color}`}
  >
    {props.children}
  </div>
);

export { Background };
