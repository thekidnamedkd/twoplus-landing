type ITextBlock = {
  copy: string;
};

const TextBlockBlue = (props: ITextBlock) => (
  <header>
    <section
      className={`border-sky-300 shadow-sky-300 mx-auto rounded-xl shadow-[-30px_30px_50px_0px] text-black border-4 w-2/3 px-20 py-10`}
    >
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.copy}
      </h1>
    </section>
  </header>
);

export { TextBlockBlue };
