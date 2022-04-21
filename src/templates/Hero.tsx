import Link from 'next/link';
import Marquee from 'react-fast-marquee';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { TextBlockBlue } from '../textblock/TextBlockBlue';
import { Logo } from './Logo';

const Hero = () => (
  <section className="relative">
    <Background color="bg-tpBlack-base" img="bg-top-img">
      <Section yPadding="py-10">
        <NavbarTwoColumns logo={<Logo xl pos />} />
      </Section>
      <Section yPadding="pt-28 pb-32 md:pt-60 md:pb-60 lg:pt-60 lg:pb-60">
        <h1 className="px-5 font-hev text-5xl lg:text-6xl mx-auto text-left md:text-center">
          « A mental fitness club for DAO contributors »
        </h1>
      </Section>
    </Background>
    <Background color="bg-tpBlack-base" img="bg-bottom-img">
      <Marquee
        className="absolute text-tpBlack-base text-l md:text-xl font-bold bg-tpNeon-base shadow-tpNeon-base shadow-[0px_0px_25px_25px]"
        gradient={false}
      >
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
        <p className="mr-10 font-fan">ABOUT OUR COURSE</p>
        <p className="mr-10 font-fan">✌</p>
      </Marquee>

      <Section yPadding="pt-20 pb-24">
        <TextBlockBlue />
      </Section>
      <Section yPadding="pb-28">
        <button className="mx-auto flex px-5 py-3 text-2xl lg:px-20 lg:py-5 font-bold sm:text-4xl lg:text-4xl transition-colors duration-300 border rounded-lg shadow-[0px_0px_10px_3px] bg-tpBlack-base text-tpCream-base border-tpBerry-base shadow-tpBerry-base  hover:bg-tpBerry-base  hover:text-tpBlack-base">
          <Link href="https://jv2bphd1l4e.typeform.com/to/J24VtRtW">
            <a target="_blank">Register Interest</a>
          </Link>
        </button>
      </Section>
    </Background>
    <Marquee
      className="absolute text-tpBlack-base text-l md:text-xl font-bold bg-tpNeon-base shadow-tpNeon-base shadow-[0px_0px_25px_25px]"
      gradient={false}
      direction="right"
    >
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
      <p className="mr-10 font-fan">
        A MENTAL FITNESS AND DAO DESIGN CLUB FOR CONTRIBUTORS
      </p>
      <p className="mr-10">✌</p>
    </Marquee>
  </section>
);

export { Hero };
