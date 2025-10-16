
const Community_Header = () => {
  return (
		<div className="mb-8 text-blackText dark:text-white" >
			<div className="flex justify-evenly pt-10 items-center">
				<div className="flex gap-3 flex-col">
					<h1 className="font-bold text-2xl">Community</h1>
					<p className="text-[#6b7685] dark:text-pargraph">Join discussions, share your thoughts, and connect with fellow developers</p>
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



