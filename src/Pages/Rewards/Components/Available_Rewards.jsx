import "aos/dist/aos.css";
import { PiMedal } from "react-icons/pi";
import { IoShieldOutline } from "react-icons/io5";

const Available_Rewards = () => {
const cards = [
  {
    id: 1,
    title: "Profile Badge Display",
    description: "Show off your earned badges on your profile",
    requirement: "Earn any badge",
    category: "Feature"
  },
  {
    id: 2,
    title: "Custom Profile Theme",
    description: "Unlock custom color themes for your profile",
    requirement: "Earn 5 badges",
    category: "Feature"
  },
  {
    id: 3,
    title: "Priority Support",
    description: "Get priority support from the Bugopedia team",
    requirement: "Reach Top 100",
    category: "Service"
  },
  {
    id: 4,
    title: "Exclusive Discord Role",
    description: "Get an exclusive role in our Discord community",
    requirement: "Earn 3 Epic badges",
    category: "Community"
  },
  {
    id: 5,
    title: "Early Feature Access",
    description: "Get early access to new features",
    requirement: "Reach Top 50",
    category: "Feature"
  },
  {
    id: 6,
    title: "Monthly Newsletter Feature",
    description: "Be featured in our monthly community newsletter",
    requirement: "Top Contributor badge",
    category: "Recognition"
  }
];


  return (
    <div className="flex flex-col gap-4">
      <div className="mx-6">Available Rewards</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((data)=>{
          return(
            <div
              key={data.id}
              className="border border-borderLight p-5 rounded-3xl flex items-start gap-4 dark:border-borderDark dark:bg-card mx-2"
              data-aos="zoom-in"
            >
              <div className="bg-[#ffdadf] p-2 rounded-2xl dark:bg-secondaryGradient">
                <PiMedal className="text-3xl text-orangeColor"/>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-blackText dark:text-white">
                  {data.title}
                </div>
                <div className="text-pargraph">
                  {data.description}
                </div>
                <div className="flex gap-2">
                  <IoShieldOutline className="text-orangeColor"/>
                  <p className="text-pargraph">{data.requirement}</p>
                </div>
              </div>
            </div>
          )})}
      </div>
    </div>
  )
}

export default Available_Rewards