import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center text-gray-500 mt-10">
    <footer className="text-2xl">✌ TWOPLUS</footer>
    <nav>
      <ul className="text-gray-500 navbar mt-5 flex flex-row justify-center font-medium text-xl">
        {props.children}
      </ul>
    </nav>
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>
    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>
    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
