import { FiMessageSquare } from "react-icons/fi";
import { Select, Option,Input,Textarea   } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { BsSend } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Support = () => {
const faqs = [
  {
    id: 1,
    question: "How do I submit a bug report?",
    answer:
      "Click on the 'Share a Bug' button on the home page and fill in the details including title, description, and code snippet.",
  },
  {
    id: 2,
    question: "How does the voting system work?",
    answer:
      "You can upvote bugs and solutions that you find helpful. The most upvoted content gets more visibility in the feed.",
  },
  {
    id: 3,
    question: "How do I earn badges?",
    answer:
      "Badges are earned by contributing to the community - submitting bugs, providing solutions, and helping others.",
  },
];

  return (
    <div className="flex flex-col mt-5">
			<div className="flex justify-center items-center flex-col gap-3">
				<h1 className="text-blackText dark:text-white">Support Center</h1>
				<p className="text-pargraph text-xl">Need help? We're here for you. Submit a ticket or browse our FAQs.</p>
			</div>
			<div className="max-w-[72rem] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-16 my-10 ">
				<div className="lg:col-span-2 dark:bg-dark mx-4 lg:ml-4">
					<div className="border border-borderLight rounded-3xl p-8 flex flex-col gap-10   dark:border-borderDark">
						<div className="flex gap-3">
							<div className="bg-[#ffdadf] p-2 rounded-xl flex justify-center items-center dark:bg-secondaryGradient">
								<FiMessageSquare className="text-3xl text-orangeColor "/>
							</div>
							<div>
								<h1 className="text-blackText dark:text-white">Submit a Support Ticket</h1>
								<p className="text-pargraph text-sm">We'll get back to you within 24 hours</p>
							</div>
						</div>
						<div className="flex flex-col gap-10">
							<div className="grid md:grid-cols-2  gap-5">
								<div className="flex flex-col gap-0.5 ">
									<Input  type="text"  label="Full User" 
									className="
									px-3 py-2  w-full bg-[#aaaaaa15]
									dark:bg-card
									placeholder:text-pargraph placeholder:text-md 
									dark:text-white dark:placeholder:text-white 
									"  
									labelProps={{
										className: "!text-md dark:!text-white"
									}}
									/>
								</div>
								<div className="flex flex-col gap-0.5">
									<Input  type="email"  label="Email" 
									className="
									px-3 py-2  w-full bg-[#aaaaaa15]
									dark:bg-card
									placeholder:text-pargraph placeholder:text-md 
									dark:text-white
									" 
									labelProps={{
										className: "!text-md dark:!text-white"
									}}
									/>
								</div>
							</div>
							<div>
								<Input 
									type="text" 
									label="Subject"
									className="
										px-3 py-2 w-full bg-[#aaaaaa15]
										dark:bg-card
										placeholder:text-pargraph placeholder:text-md 
										dark:text-white
									" 
									labelProps={{
										className: "!text-md dark:!text-white"
									}}
								/>
							</div>
							<div className="grid md:grid-cols-2 gap-5  ">
								<div className="w-full  ">
									<Select  label="Select Version"
									className=" dark:bg-card dark:text-white"
									labelProps={{
										className: "!text-md dark:!text-white"
									}}
									>
										<Option>Technical Issue</Option>
										<Option>Account Problem</Option>
										<Option>Bug Report</Option>
										<Option>Feature Request</Option>
										<Option>Billing Question</Option>
										<Option>Other</Option>
									</Select>
								</div>
								<div className="w-full ">
									<Select  label="Select Version"
									className=" dark:bg-card dark:text-white" 
									labelProps={{
										className: "!text-md dark:!text-white"
									}}
									>
										<Option>Low</Option>
										<Option>Medium</Option>
										<Option>High</Option>
										<Option>Urgent</Option>
									</Select>
								</div>
							</div>
							<div>
								<Textarea label="Message" className="dark:bg-card dark:text-white"
								labelProps={{
										className: "!text-md dark:!text-white"
									}}/>
								<p className="text-sm text-pargraph ">Include steps to reproduce, error messages, and screenshots if applicable</p>
							</div>
							<div>
								<label htmlFor="" className="font-semibold text-sm">Attachments (Optional)</label>
							<div className="border-2 border-dashed border-gray-500/50 rounded-lg p-6 text-center bg-white dark:bg-card ">
								<label
									htmlFor="file-upload"
									className="cursor-pointer flex flex-col items-center justify-center space-y-2"
								>
									<CloudArrowUpIcon className="h-10 w-10 text-gray-400" />
									<Typography color="blue-gray" className="text-sm">
										<span className="text-blue-400">Click to upload</span> <span className="dark:text-white">or drag and drop</span>
									</Typography>
									<Typography variant="small" color="gray" className="dark:text-white">
										PNG, JPG, GIF or PDF up to 10MB
									</Typography>
									<input id="file-upload" type="file" className="hidden" />
								</label>
							</div>
							</div>
							<button className="bg-mainGradient p-2 rounded-2xl ">
								<div className="flex gap-4 items-center justify-center text-white">
									<div>
										<BsSend className="text-xl"/>
									</div>
									<div className="font-medium">
										Submit Ticket
									</div>
								</div>
							</button>
						</div>
						<div>
						</div>
					</div>
				</div>
				<div className="col-span-1 text-blackText mx-4 lg:mr-4 ">
					<div className="border p-8 flex flex-col gap-8 rounded-3xl border-borderLight  dark:border-borderDark">
						<div className="text-blackText dark:text-white">
							Contact Information
						</div>
							<div className="flex flex-col gap-5">
								<div className="flex gap-3">
									<div>
											<MdOutlineMailOutline className="text-2xl text-orangeColor"/>
									</div>
									<div>
										<h1 className="text-blackText dark:text-white">Email</h1>
										<p className="text-orangeColor">support@bugopedia.com</p>
									</div>
						</div>
						<div className="flex gap-3">
							<div>
								<FiMessageSquare className="text-2xl text-orangeColor "/>
							</div>
							<div>
								<h1 className="text-blackText dark:text-white">Live Chat</h1>
								<p className="text-pargraph">Available 9 AM - 5 PM EST</p>
							</div>
						</div>
							</div>
					</div>
					<div className="border p-8 rounded-3xl my-5 flex flex-col gap-8 bg-[#feeeee] dark:bg-[#86473156] dark:border-borderDark">
						<div className="flex gap-2 items-center ">
							<div className="bg-mainGradient p-2 rounded-3xl ">
								<BsQuestionCircle className="text-2xl text-white"/>
							</div>
							<div className="dark:text-white text-blackText">
								Response Time
							</div>
						</div>
						<div className="text-pargraph text-sm">
							Our average response time is <span className="text-blackText dark:text-white">6 hours</span>. Urgent tickets are prioritized and usually answered within <span className="text-blackText dark:text-white">1 hour</span>.
						</div>
					</div>
					<div className="flex flex-col border p-8 gap-10 rounded-3xl border-borderLight dark:border-borderDark">
						<div className="dark:text-white text-blackText">
							Popular FAQs
						</div>
						<div className="flex flex-col gap-4">
							{faqs.map((item)=>{
								return(
									<div 
										key={item.id}
										className="flex flex-col gap-1.5 hover:bg-[#feeeee] dark:hover:bg-card rounded-2xl p-3"
									>
										<div className="text-orangeColor">
											{item.question}
										</div>
										<div className="text-sm text-pargraph">
											{item.answer}
										</div>
									</div>
							)})}
						</div>
							<div>
								<Link to="/faq">
									<button className="w-full border border-borderLight dark:border-borderDark p-2 rounded-xl bg-mainGradient text-white">
										View All FAQs
									</button>
								</Link>
							</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
)
}

export default Support