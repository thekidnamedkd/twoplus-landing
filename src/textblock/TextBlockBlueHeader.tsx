// type ITextBlock = {
//   copy: string;
// };

const TextBlockBlueHeader = () => (
  <section
    className={`text-tpCream-base bg-tpBlack-base border-tpSky-base shadow-tpSky-base sm:shadow-tpSky-base md:shadow-tpSky-base mx-auto rounded-xl shadow-[-10px_10px_50px_0px] sm:shadow-[-25px_25px_50px_0px] md:shadow-[-30px_30px_50px_0px]  border-4 ml-5 mr-5 px-10 md:px-15 lg:px-20 py-10 md:py-15 lg:py-20`}
  >
    <h1 className="font-hev mb-10 text-xl md:text-3xl  whitespace-pre-line">
      Twoplus is a mental fitness club for contributors.
    </h1>

    <h1 className="font-reg  text-xl md:text-3xl whitespace-pre-line">
      Join like-minded contributors for a six-week lightweight cohort-based
      program.
    </h1>
    <div className="flex justify-between border-2 p-6 mt-10">
      <div>
        <h3 className="text-2xl font-bold underline underline-offset-4">
          Cost
        </h3>
        <div>0.2ETH Twoplus NFT</div>
        <div>1.0ETH General</div>
      </div>
      <div>
        <h3 className="text-2xl font-bold underline underline-offset-4">
          Start
        </h3>
        <div>Cohort n°1 ~June</div>
      </div>
      <div>
        <h3 className="text-2xl font-bold underline underline-offset-4">
          Commitment
        </h3>
        <div>~3 hours/week</div>
      </div>
      <div>
        <h3 className="text-2xl font-bold underline underline-offset-4">
          More Info
        </h3>
        <div>Register 👇</div>
      </div>
    </div>
  </section>
);

export { TextBlockBlueHeader };