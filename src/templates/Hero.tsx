import Link from 'next/link';
import Marquee from 'react-fast-marquee';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { TextBlockBlue } from '../textblock/TextBlockBlue';
import { TextBlockGreen } from '../textblock/TextBlockGreen';
import { Logo } from './Logo';

const Hero = () => (
  <>
    <Background color="bg-tpBlack-base" img="bg-top-img">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl pos />} />
      </Section>

      <Section yPadding="pt-20 pb-32">
        <TextBlockGreen />
      </Section>
    </Background>
    <Background img="" color="bg-tpNeon-base">
      <section className="bg-transparent mb-5 md:my-10 text-tpBlack-base text-xl md:text-3xl font-bold bg-tpNeon-base shadow-tpNeon-base shadow-[0px_0px_25px_25px]">
        <Marquee gradient={false}>
          ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+
          ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT
          OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR
          COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE
        </Marquee>
      </section>
    </Background>
    <Background color="bg-tpBlack-base" img="bg-bottom-img">
      <Section yPadding="pt-20 pb-32">
        <TextBlockBlue copy="Join DAO operators for a 6 week program to perfect your DAO worker skills - from mental fitness and self-management to DAO theory and CX design. Let’s go." />
      </Section>
      <section className="flex justify-center">
        <button className="mb-20 -mt-20 mx-auto px-5 py-3 text-3xl lg:px-20 lg:py-5 font-bold sm:text-4xl lg:text-4xl transition-colors duration-300 border rounded-lg shadow-[0px_0px_10px_3px] bg-tpBlack-base text-tpCream-base border-tpBerry-base shadow-tpBerry-base  hover:bg-tpBerry-base  hover:text-tpBlack-base">
          <Link href="/">
            <a>Interested?</a>
          </Link>
        </button>
      </section>
    </Background>
  </>
);

export { Hero };
