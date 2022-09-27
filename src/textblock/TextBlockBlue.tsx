// type ITextBlock = {
//   copy: string;
// };

const TextBlockBlue = () => (
  <section
    className={`text-tpCream-base bg-tpBlack-base border-tpSky-base shadow-tpSky-base sm:shadow-tpSky-base md:shadow-tpSky-base mx-auto rounded-xl shadow-[-10px_10px_50px_0px] sm:shadow-[-25px_25px_50px_0px] md:shadow-[-30px_30px_50px_0px]  border-4 ml-5 mr-5 px-10 md:px-15 lg:px-20 py-10 md:py-15 lg:py-20`}
  >
    <h1 className="font-hev mb-10 text-xl md:text-3xl  whitespace-pre-line">
      Twoplus is a mental fitness gym for DAO contributors and Web3 folks.
    </h1>

    <h1 className="font-reg text-xl md:text-3xl whitespace-pre-line">
      Join motivated Web3 peers for an 8 week long mental fitness program.
    </h1>
    <div className="flex flex-col gap-y-5 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between  border-2 p-10 my-10">
      <div>
        <h3 className="text-l md:text-xl font-hev underline underline-offset-4">
          Cost
        </h3>
        <div>0.3ETH for Individuals</div>
        <div>Businesses ➞ DM us</div>
      </div>
      <div>
        <h3 className="text-l md:text-xl font-hev underline underline-offset-4">
          When
        </h3>
        <div>November</div>
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
        <div>Apply 👇</div>
      </div>
    </div>
    <h1 className="font-hev text-l md:text-xl mb-6 whitespace-pre-line">
      Web3 life is mentally challenging. It is easy to burn out. Like an athlete, you can train for more sustainable and healthy performance. In this program:{' '}
    </h1>
    <ol className="font-reg text-l md:text-xl whitespace-pre-line">
      <li className="mb-6">
        1. Set a goal on what to improve: energy, stress, mindset, focus and more.
      </li>
      <li className="mb-6">
        2. Develop your mental fitness routine with the help of experts in order to achieve your goal. 
      </li>
      <li className="mb-6">
        3. Build a stronger mental health through practicing and playing with peers.
      </li>
    </ol>
  </section>
);

export { TextBlockBlue };
