

const OurStory = () => {
  return (
    <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 p-5 dark:bg-mainDarkModeColor py-10">
      {/* Text */}
      <div className="flex justify-center items-center flex-col h-full ">
        <h3 className="text-blackText mb-5">Our Story</h3>
        <p className="text-grayText">
          Bugopedia was born from a simple frustration: debugging alone is hard.
          Too many developers struggle in isolation, spending hours on problems
          that someone else has already solved.
        </p>
        <br />
        <p className="text-grayText">
          We started as a small community of developers sharing bug reports and
          solutions. What began as a side project quickly grew into a vibrant
          ecosystem where thousands of developers help each other every day.
        </p>
        <br />
        <p className="text-grayText">
          Today, Bugopedia serves over 50,000 active users, with more than
          125,000 bugs solved through community collaboration. But our journey
          is just beginning.
        </p>
      </div>

      {/* Image */}
      <div className="">
        <img src="/images/about-us-our-story.jpeg" className="rounded-xl" />
      </div>
    </div>
  );
};

export default OurStory;
