type ITextBlock = {
  copy: string;
};

const TextBlockBlue = (props: ITextBlock) => (
  <header>
    <section
      className={`bg-tpBlack-base border-tpSky-base shadow-tpSky-base sm:shadow-tpSky-base md:shadow-tpSky-base mx-auto rounded-xl shadow-[-10px_10px_50px_0px] sm:shadow-[-25px_25px_50px_0px] md:shadow-[-30px_30px_50px_0px]  border-4 w-2/3 px-10 sm:px-10 md:px-15 lg:px-20 py-10 sm:py-10 md:py-15 lg:py-20`}
    >
      <h1 className="text-xl sm:text-3xl md:text-5xl text-tpCream-base font-bold whitespace-pre-line">
        {props.copy}
      </h1>
    </section>
  </header>
);

export { TextBlockBlue };
