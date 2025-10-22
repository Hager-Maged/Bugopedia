import { useParams, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { Data } from "../Data";
import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";

const BugDetails = () => {
  const { categoryName, bugId } = useParams();
  const navigate = useNavigate();

  const category = Data.find(
    (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  const bug = category.bugs.find((b) => b.id.toString() === bugId);

  const [likesNum, setLikesNum] = useState(bug.votes);
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLikesNum((prev) => (liked ? prev - 1 : prev + 1));
    setLiked((prev) => !prev);
  };

  const [replies, setReplies] = useState(
    bug.replyDetails.map((r) => ({ ...r, liked: false }))
  );

  const handleReplyLike = (index) => {
    setReplies((prev) =>
      prev.map((r, i) =>
        i === index
          ? {
              ...r,
              liked: !r.liked,
              likesCount: r.liked ? r.likesCount - 1 : r.likesCount + 1,
            }
          : r
      )
    );
  };

  return (
    <div className="bg-white dark:bg-[#1a1625] py-6 min-h-screen">
      <div className="max-w-[72rem] mx-auto flex flex-col gap-7 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-start gap-6">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-[#be582115] p-2 rounded-3xl"
          >
            <div className="flex gap-3 sm:gap-4 items-center">
              <GoArrowLeft className="text-lg sm:text-xl font-bold text-blackText dark:text-white" />
              <h1 className="font-medium text-xs sm:text-sm text-blackText dark:text-white">
                Back to {category.name} Bugs
              </h1>
            </div>
          </button>

          <div className="border w-full border-borderLight flex flex-col p-5 sm:p-8 md:p-10 gap-8 sm:gap-10 rounded-3xl dark:bg-card dark:border-borderDark">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {bug.tags?.map((tag, i) => (
                  <button
                    key={i}
                    className="border border-borderLight rounded-2xl px-3 py-1 text-xs sm:text-sm font-bold text-blackText dark:text-white dark:bg-card dark:border-borderDark"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="text-gray-900 dark:text-white text-lg sm:text-xl font-semibold">
                {bug.title}
              </div>
            </div>

            <div className="text-blackText flex items-center gap-3 sm:gap-5 dark:text-white flex-wrap">
              <FaRegUserCircle className="text-4xl sm:text-5xl" />
              <div className="flex flex-col">
                <p className="font-medium">{bug.author}</p>
                <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-pargraph flex-wrap">
                  <p>@email</p>
                  <p>{bug.date}</p>
                </div>
              </div>
            </div>

            <div className="text-blackText whitespace-pre-line leading-relaxed dark:text-white text-sm sm:text-base">
              {bug.caption}
            </div>

            <hr className="border-gray-300 dark:border-borderDark" />

            <div className="text-blackText flex flex-wrap gap-5 sm:gap-8 items-center dark:text-white text-sm sm:text-base">
              <button
                onClick={toggleLike}
                className={`flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-2xl transition-all 
                  ${
                    liked
                      ? "bg-mainGradient text-white"
                      : "hover:bg-[#be58211f]"
                  }`}
              >
                <AiOutlineLike className="text-lg sm:text-xl" />
                {likesNum}
              </button>

              <div className="flex items-center gap-2 sm:gap-3">
                <FiMessageSquare className="text-lg sm:text-xl" />
                {replies.length}
              </div>

              <div>{bug.views} views</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3 items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base mx-2 sm:mx-0">
          <div>{replies.length}</div>
          <div>Replies</div>
        </div>

        <div className="flex flex-col gap-5">
          {replies.map((reply, index) => (
            <div
              key={index}
              className="border border-borderLight flex flex-col p-5 sm:p-7 gap-4 sm:gap-6 rounded-3xl dark:bg-card dark:border-borderDark mx-2 sm:mx-0"
            >
              <div className="flex gap-3 sm:gap-4 text-blackText dark:text-white flex-wrap">
                <FaRegUserCircle className="text-4xl sm:text-5xl" />
                <div className="flex flex-col">
                  <div className="font-medium">{reply.replier}</div>
                  <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm text-pargraph items-center">
                    <div>{reply.email}</div>
                    <BsDot className="hidden sm:block" />
                    <div>{reply.time}</div>
                  </div>
                </div>
              </div>

              <div className="text-blackText dark:text-white text-sm sm:text-base">
                {reply.content}
              </div>

              <div className="flex gap-6 sm:gap-8 text-blackText dark:text-white">
                <button
                  onClick={() => handleReplyLike(index)}
                  className={`flex gap-2 items-center px-3 py-1.5 rounded-2xl transition-all 
                    ${
                      reply.liked
                        ? "bg-mainGradient text-white"
                        : "hover:bg-[#be58211f]"
                    }`}
                >
                  <AiOutlineLike className="text-lg sm:text-xl" />
                  {reply.likesCount}
                </button>
                <p className="cursor-pointer hover:underline">Reply</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mx-2 sm:mx-0">
          <p className="text-black dark:text-gray-300 text-sm sm:text-base">
            Add a reply
          </p>
          <textarea
            name="reply"
            id="reply"
            placeholder="Share your solution or ask for clarification"
            className="rounded-xl bg-gray-200 dark:bg-[#251f37] p-3 sm:p-4 text-sm sm:text-base min-h-[6rem] resize-none"
          ></textarea>
          <div>
            <ButtonGradiant size={"sm"} text={"Post Reply"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugDetails;
