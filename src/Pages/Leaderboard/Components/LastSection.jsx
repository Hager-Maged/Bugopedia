import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaCode, FaMedal } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const LastSection = () => {
  return (
    <div className="w-full flex  gap-4 justify-evenly items-center my-5  flex-wrap">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        <Card className="p-10 flex flex-col justify-between items-center dark:bg-[#392C4F] dark:opacity-90">
          <GiTrophyCup className="text-5xl bg-mainGradient p-1 rounded-2xl text-white" />
          <CardBody className="text-center">
            <Typography variant="p" className="mb-2 text-2xl text-orangeColor">
              25,430
            </Typography>
            <Typography
              variant="p"
              color="blue-gray"
              className="font-medium dark:text-grayText"
              textGradient
            >
              Total Contributors
            </Typography>
          </CardBody>
        </Card>

        <Card className="p-10 flex flex-col justify-between items-center dark:bg-[#392C4F] dark:opacity-90">
          <FaCode className="text-5xl bg-secondaryGradient p-1 rounded-2xl text-white" />
          <CardBody className="text-center">
            <Typography variant="p" className="mb-2 text-2xl text-lightPurple">
              142,850
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium dark:text-grayText"
              textGradient
            >
              Bugs Resolved
            </Typography>
          </CardBody>
        </Card>

        <Card className="p-10 flex flex-col justify-between items-center dark:bg-[#392C4F] dark:opacity-90">
          <FaMedal className="text-5xl bg-purpleCard p-1 rounded-2xl text-white" />
          <CardBody className="text-center">
            <Typography variant="p" className="mb-2 text-2xl text-purple-600">
              8,234
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium dark:text-grayText"
              textGradient
            >
              Bugs Earned
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LastSection;
