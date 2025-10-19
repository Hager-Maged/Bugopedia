import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaMedal } from "react-icons/fa"; //2
import { GiTrophyCup } from "react-icons/gi"; //1
import { TfiMedallAlt } from "react-icons/tfi"; //3
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import Global2 from "./Global2";

const Global = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.points - a.points);
  const [first, second, third, ...rest] = sortedData;

  return (
    <div className="w-full flex  gap-4 justify-evenly items-center my-5  flex-wrap">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        <Card className="p-10 flex flex-col justify-center items-center bg-[#f8f8f8] dark:bg-[#282432] dark:opacity-90 ">
          <CardBody className=" flex flex-col justify-center items-center">
            <FaMedal className="text-6xl mb-5 text-gray-600" />
            <img
              src={second.avatar}
              alt={second.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <Typography variant="p" className="mb-2 text-2xl text-grayText">
              {second.name}
            </Typography>
            <Typography
              variant="p"
              color="blue-gray"
              className="font-medium dark:text-grayText"
              textGradient
            >
              {second.username}
            </Typography>
           <div className="flex gap-4 justify-center">
              <span className="text-orangeColor text-lg">{second.points}</span>
              <span className="text-black text-lg">{second.bugs}</span>
            </div>
            <div className="flex gap-3 justify-center">
              <span className="text-gray-600">Points</span>
              <span className="text-gray-600">Bugs</span>
            </div>
            <RiNumber2 className="text-4xl text-gray-600 mt-5"/>
          </CardBody>
        </Card>

        <Card className=" p-10 flex flex-col justify-between items-center bg-[#fffae7] dark:bg-[#2f2822] dark:opacity-90 ">
          <CardBody className=" text-center flex flex-col justify-center items-center">
            <GiTrophyCup className="text-6xl mb-5 text-yellow-700" />
            <img
              src={first.avatar}
              alt={first.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <Typography variant="p" className="mb-2 text-2xl text-yellow-700">
              {first.name}
            </Typography>
            <Typography
              variant="p"
              color="blue-gray"
              className="font-medium dark:text-grayText"
              textGradient
            >
              {first.username}
            </Typography>
            <div className="flex gap-4 justify-center">
              <span className="text-orangeColor text-lg">{first.points}</span>
              <span className="text-black text-lg">{first.bugs}</span>
            </div>
            <div className="flex gap-3 justify-center">
              <span className="text-gray-600">Points</span>
              <span className="text-gray-600">Bugs</span>
            </div>

            <RiNumber1 className="text-4xl text-yellow-700 mt-5"/>

          </CardBody>
        </Card>

        <Card className="p-10 flex flex-col justify-between items-center  bg-[#f9f4ee]  dark:bg-[#271d25] dark:opacity-90">
          <CardBody className="text-center flex flex-col justify-center items-center ">
            <TfiMedallAlt className="text-6xl mb-5 text-brown" />

            <img
              src={third.avatar}
              alt={third.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <Typography variant="p" className="mb-2 text-2xl text-brown">
              {third.name}
            </Typography>
            <Typography
              variant="p"
              color="blue-gray"
              className="font-medium dark:text-grayText"
              textGradient
            >
              {third.username}
            </Typography>
            <div className="flex gap-4 justify-center">
              <span className="text-orangeColor text-lg">{third.points}</span>
              <span className="text-black text-lg">{third.bugs}</span>
            </div>
            <div className="flex gap-3 justify-center">
              <span className="text-gray-600">Points</span>
              <span className="text-gray-600">Bugs</span>
            </div>
            <RiNumber3 className="text-4xl text-brown mt-5"/>

          </CardBody>
        </Card>
      </div>
      <div className="w-full">
        <Global2 rest={rest} />
      </div>
    </div>
 
      
   
   
  );
}

export default Global;
