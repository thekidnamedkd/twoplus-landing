import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex-col md:flex md:flex-row lg:flex lg:flex-row justify-between items-center">
    <div className="hover:shadow-tpNeon-base">
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>
    <button className="bg-tpBlack-base ml-5 mt-10 md:m-0 px-5 py-5 font-bold text-md transition-colors duration-300 border rounded-lg shadow-[0px_0px_10px_3px] text-tpCream-base border-tpBerry-base shadow-tpBerry-base  hover:bg-tpBerry-base  hover:text-tpBlack-base">
      <Link href="https://jv2bphd1l4e.typeform.com/to/J24VtRtW">
        <a target="_blank">Apply Here</a>
      </Link>
    </button>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
