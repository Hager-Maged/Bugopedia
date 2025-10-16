import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";
import ButtonLight from "../../../Components/Buttons/ButtonLight";

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10 rounded-xl px-5 border border-orangeColor dark:bg-mutedYellow">
      <h3 className="text-blackText dark:text-whiteText text-lg font-semibold">Join Our Community</h3>
      <p className="text-grayText text-l font-semibold">
        Be part of a global community of developers helping each other build
        better software. Start debugging together today.
      </p>
      <div className="flex gap-3">
        <ButtonGradiant text="Get Started" size="l"/>
        <ButtonLight text="Learn More" size="l" />
      </div>
    </div>
  );
};

export default JoinUs;
