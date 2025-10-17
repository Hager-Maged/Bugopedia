
const Community_Header = () => {
  return (
		<div className="mb-8 w-full  text-blackText dark:text-white" >
			<div className="flex flex-wrap flex-col md:flex-row gap-5 pt-10 justify-center md:justify-between mx-4 items-center">
				<div className="flex gap-3 items-center md:items-start flex-col ">
					<h1 className="font-bold text-2xl">Community</h1>
					<p className="text-[#6b7685] dark:text-pargraph text-center">Join discussions, share your thoughts, and connect with fellow developers</p>
				</div>
				<button className="bg-mainGradient flex justify-center items-center gap-3 px-2 py-1.5 text-white font-medium	 rounded-lg">
					<h1>+</h1>
					<h1>Create Post</h1>
				</button>
			</div>
			
		</div>
  )
}

export default Community_Header



