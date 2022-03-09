import Link from 'next/link';
import Marquee from 'react-fast-marquee';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { TextBlockBlue } from '../textblock/TextBlockBlue';
import { TextBlockGreen } from '../textblock/TextBlockGreen';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <button className="px-5 py-5 font-bold text-md transition-colors duration-300 border rounded-lg shadow-[0px_0px_10px_3px] text-black border-pink-400 shadow-pink-400 hover:bg-pink-400 hover:text-white">
          <Link href="/">
            <a>CONNECT WALLET</a>
          </Link>
        </button>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <TextBlockGreen copy="We empower digital communities to thrive and create positive impact by putting mental fitness at the core of collaboration." />
    </Section>
    <section className="my-10 text-black text-3xl font-bold bg-lime-400 shadow-lime-400 shadow-[0px_0px_25px_25px]">
      <Marquee gradient={false}>
        ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT
        OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR
        COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE
        ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE
      </Marquee>
    </section>
    <Section yPadding="pt-20 pb-32">
      <TextBlockBlue copy="Join DAO operators for a 6 week program to perfect your DAO worker skills - from mental fitness and self-management to DAO theory and CX design. Let’s go." />
    </Section>
    <section className="flex justify-center">
      <button className="mx-auto px-20 py-5 font-bold text-4xl transition-colors duration-300 border rounded-lg shadow-[0px_0px_10px_3px] text-black border-pink-400 shadow-pink-400 hover:bg-pink-400 hover:text-white">
        <Link href="/">
          <a>I&apos;M INTERESTED</a>
        </Link>
      </button>
    </section>
  </Background>
);

export { Hero };
