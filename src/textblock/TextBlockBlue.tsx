// type ITextBlock = {
//   copy: string;
// };

const TextBlockBlue = () => (
  <header>
    <section
      className={`bg-tpBlack-base border-tpSky-base shadow-tpSky-base sm:shadow-tpSky-base md:shadow-tpSky-base mx-auto rounded-xl shadow-[-10px_10px_50px_0px] sm:shadow-[-25px_25px_50px_0px] md:shadow-[-30px_30px_50px_0px]  border-4 ml-5 mr-5 px-10 md:px-15 lg:px-20 py-10 md:py-15 lg:py-20`}
    >
      <h1 className="font-hev mb-10 text-xl md:text-3xl text-tpCream-base whitespace-pre-line">
        Twoplus is a mental fitness club for contributors.
      </h1>

      <h1 className="font-reg  text-xl md:text-3xl text-tpCream-base whitespace-pre-line">
        Join like-minded contributors for a six-week cohort-based program where
        you&apos;ll learn about mental fitness, DAO leadership and contributor
        experience (CX) design. You&apos;ll become part of Twoplus and start
        building the skills needed to build thriving DAOs.
      </h1>
    </section>
  </header>
);

export { TextBlockBlue };
