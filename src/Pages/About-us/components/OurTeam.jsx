import { Avatar } from "@material-tailwind/react";

const OurTeam = () => {
  return (
    <div data-aos="flip-up" className=" py-10 ">
      <div className="w-full text-center py-10">
        <h3 className="text-xl font-semibold text-blackText dark:text-whiteText">Meet Our Team</h3>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        <div className="flex flex-col p-10 rounded-xl bg-whiteText dark:bg-mainDarkModeColor gap-5 items-center justify-center shadow-sm  ">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
          <h2 className="text-xl font-semibold text-blackText dark:text-whiteText">
            Kamel Mohamed
          </h2>
          <h3 className="text-orangeColor">Founder</h3>
          <p className="text-grayText">Mern Stack Web Developer</p>
        </div>
        <div className="flex flex-col p-10 rounded-xl bg-whiteText dark:bg-mainDarkModeColor gap-5 items-center justify-center shadow-sm  ">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
          <h2 className="text-xl font-semibold text-blackText dark:text-whiteText">
            Mariam Yasser
          </h2>
          <h3 className="text-orangeColor">Founder</h3>
          <p className="text-grayText">Mern Stack Web Developer</p>
        </div>
        <div className="flex flex-col p-10 rounded-xl bg-whiteText dark:bg-mainDarkModeColor gap-5 items-center justify-center shadow-sm  ">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
          <h2 className="text-xl font-semibold text-blackText dark:text-whiteText">
            Hager Maged
          </h2>
          <h3 className="text-orangeColor">Founder</h3>
          <p className="text-grayText">Mern Stack Web Developer</p>
        </div>
        <div className="flex flex-col p-10 rounded-xl bg-whiteText dark:bg-mainDarkModeColor gap-5 items-center justify-center shadow-sm  ">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
          <h2 className="text-xl font-semibold text-blackText dark:text-whiteText">
            Jana Mahmoud
          </h2>
          <h3 className="text-orangeColor">Founder</h3>
          <p className="text-grayText">Mern Stack Web Developer</p>
        </div>
        <div className="flex flex-col p-10 rounded-xl bg-whiteText dark:bg-mainDarkModeColor gap-5 items-center justify-center shadow-sm  ">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
          <h2 className="text-xl font-semibold text-blackText dark:text-whiteText">
            Nafad Ayman
          </h2>
          <h3 className="text-orangeColor">Founder</h3>
          <p className="text-grayText">Mern Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
