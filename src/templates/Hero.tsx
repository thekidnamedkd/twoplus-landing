import Link from 'next/link';
import Marquee from 'react-fast-marquee';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { TextBlockBlue } from '../textblock/TextBlockBlue';
import { TextBlockGreen } from '../textblock/TextBlockGreen';
import { Logo } from './Logo';

const Hero = () => (
  <section className="relative">
    <Background color="bg-tpBlack-base" img="bg-top-img">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl pos />} />
      </Section>
      <Section yPadding="pt-20 pb-32">
        <TextBlockGreen copy="Twoplus is a mental fitness club for DAO operators and power contributors. We’re focused on training the next generation of DAO facilitators in cutting edge DAO design and impactful Contributor Experience (CX)." />
      </Section>
      <section className="flex justify-center">
        <button className="mb-20 mx-auto px-5 py-3 text-3xl lg:px-20 lg:py-5 font-bold sm:text-4xl lg:text-4xl transition-colors duration-300 border rounded-lg shadow-[0px_0px_10px_3px] bg-tpBlack-base text-tpCream-base border-tpNeon-base shadow-tpNeon-base  hover:bg-tpNeon-base  hover:text-tpBlack-base">
          <Link href="/">
            <a>More on Mirror</a>
          </Link>
        </button>
      </section>
    </Background>

    {/* <section className="absolute snap-none mb-5 md:my-10 text-tpBlack-base text-l md:text-xl font-bold bg-tpNeon-base shadow-tpNeon-base shadow-[0px_0px_25px_25px]"> */}
    <Marquee
      className="absolute text-tpBlack-base text-l md:text-xl font-bold bg-tpNeon-base shadow-tpNeon-base shadow-[0px_0px_25px_25px]"
      gradient={false}
    >
      ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT
      OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE
      ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT OUR COURSE ||+ ABOUT
      OUR COURSE ||+ ABOUT OUR COURSE
    </Marquee>
    {/* </section> */}

    <Background color="bg-tpBlack-base" img="bg-bottom-img">
      <Section yPadding="pt-20 pb-32">
        <TextBlockBlue copy="Join the top DAO operators for a six week cohort-based program on decentralized org design, CX, and mental fitness. You’ll leave ready to embody the skills needed to build the future of DAOs." />
      </Section>
      <section className="flex justify-center">
        <button className="mb-20 mx-auto px-5 py-3 text-3xl lg:px-20 lg:py-5 font-bold sm:text-4xl lg:text-4xl transition-colors duration-300 border rounded-lg shadow-[0px_0px_10px_3px] bg-tpBlack-base text-tpCream-base border-tpBerry-base shadow-tpBerry-base  hover:bg-tpBerry-base  hover:text-tpBlack-base">
          <Link href="/">
            <a>Interested?</a>
          </Link>
        </button>
      </section>
    </Background>
  </section>
);

export { Hero };
