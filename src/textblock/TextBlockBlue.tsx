// type ITextBlock = {
//   copy: string;
// };

const TextBlockBlue = () => (
  <section
    className={`text-tpCream-base bg-tpBlack-base border-tpSky-base shadow-tpSky-base sm:shadow-tpSky-base md:shadow-tpSky-base mx-auto rounded-xl shadow-[-10px_10px_50px_0px] sm:shadow-[-25px_25px_50px_0px] md:shadow-[-30px_30px_50px_0px]  border-4 ml-5 mr-5 px-10 md:px-15 lg:px-20 py-10 md:py-15 lg:py-20`}
  >
    <h1 className="font-hev mb-10 text-xl md:text-3xl  whitespace-pre-line">
      Twoplus is a mental fitness club for contributors.
    </h1>

    <h1 className="font-reg text-xl md:text-3xl whitespace-pre-line">
      Join like-minded contributors for a six-week lightweight cohort-based
      program.
    </h1>
    <div className="flex flex-col gap-y-5 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between  border-2 p-10 my-10">
      <div>
        <h3 className="text-l md:text-xl font-hev underline underline-offset-4">
          Cost
        </h3>
        <div>0.2ETH — Twoplus NFT</div>
        <div>1.0ETH — General</div>
      </div>
      <div>
        <h3 className="text-l md:text-xl font-hev underline underline-offset-4">
          Start
        </h3>
        <div>Cohort n°1 ~June</div>
      </div>
      <div>
        <h3 className="text-l md:text-xl font-hev underline underline-offset-4">
          Commitment
        </h3>
        <div>~3 hours/week</div>
      </div>
      <div>
        <h3 className="text-l md:text-xl font-hev underline underline-offset-4">
          More Info
        </h3>
        <div>Register 👇</div>
      </div>
    </div>
    <h1 className="font-hev text-l md:text-xl mb-6 whitespace-pre-line">
      You&apos;ll start learning the skills you need to thrive in DAOs.{' '}
    </h1>
    <ol className="font-reg text-l md:text-xl whitespace-pre-line">
      <li className="mb-6">
        1. Mental Fitness: practices for self-management and mental performance.
      </li>
      <li className="mb-6">
        2. Self-Direction: assess your strengths and capabilities. Define your
        contributor style and goals.
      </li>
      <li className="mb-6">
        3. Leadership: learn how to facilitate collaboration in a DAO.
      </li>
    </ol>
  </section>
);

export { TextBlockBlue };
