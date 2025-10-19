import Community_Header from "./Components/Community_Header"
import Community_info from "./Components/Community_info"
import Tabs_section from "./Components/Tabs_section"

const Community = () => {
  return (
      <div className=" bg-white dark:bg-[#1a1625] ">
        <div className="max-w-[72rem] mx-auto bg-white dark:bg-[#1a1625]">
          <Community_Header />
          <Community_info />
          <Tabs_section />
        </div>
      </div>
  )
}

export default Community