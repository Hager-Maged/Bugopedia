import { IoMdTrendingUp } from "react-icons/io";

const Trending = () => {
  return (
    <div className='border p-10 rounded-2xl border-[#e6e6e6] flex flex-col gap-8 dark:border-[#3d3554] dark:bg-card'>
      <div className="flex gap-3 items-center ">
        <IoMdTrendingUp className="text-orangeColor text-2xl text-orange"/>
        <h1 className="text-blackText font-medium dark:text-white">Trending This Week</h1>
      </div>
      <div>
        <p className="text-[#6b7685] dark:text-pargraph">Trending discussions and polls will appear here based on engagement and activity.</p>
      </div>
    </div>
  )
}

export default Trending