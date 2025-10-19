import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import { BsDot } from "react-icons/bs";

const Post = () => {
  const { num } = useParams();
  const location = useLocation();
  const { post } = location.state || {};  
  const { likes, title, tags, user, email, replies, details, views, time, repliesData = [], id } = post || {};
  const navigate = useNavigate();

  const [likes_num, setLikes_num] = useState(likes); 
  const [liked, setLiked] = useState(false);

  const postlike = () => {
    setLikes_num((prev) => (liked ? prev - 1 : prev + 1)); 
    setLiked((prev) => !prev); 
  };

  const [reply_num] = useState(repliesData.length);

  const [repliesState, setRepliesState] = useState(
    repliesData.map((reply) => ({
      ...reply,
      liked: false, 
      likesCount: reply.likes || 0, 
    }))
  );

  const handleReplyLike = (index) => {
    setRepliesState((prevReplies) =>
      prevReplies.map((reply, i) =>
        i === index
          ? {
              ...reply,
              liked: !reply.liked,
              likesCount: reply.liked ? reply.likesCount - 1 : reply.likesCount + 1,
            }
          : reply
      )
    );
  };

  return (
    <div className="bg-white dark:bg-[#1a1625] py-6">
      <div className="max-w-[72rem] mx-auto flex flex-col gap-7">
        <div className="flex flex-col items-start gap-6">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-[#be582115] whitespace-pre-line leading-relaxed p-2 rounded-3xl"
          >
            <div className="flex gap-4 items-center">
              <GoArrowLeft className="text-xl font-bold text-blackText dark:text-white" />
              <h1 className="font-medium text-sm text-blackText dark:text-white">Back to Discussions</h1>
            </div>
          </button>

          <div className="border border-borderLight flex flex-col p-10 justify-evenly gap-12 rounded-3xl dark:bg-card dark:border-borderDark">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                {tags?.map((tag, index) => (
                  <button
                    key={index}
                    className="border border-borderLight rounded-2xl p-1.5 text-blackText text-xs font-bold dark:text-white dark:bg-card dark:border-borderDark"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="text-blackText dark:text-white">{title}</div>
            </div>

            <div className="text-blackText flex items-center gap-3 dark:text-white">
              <FaRegUserCircle className="text-5xl" />
              <div className="flex flex-col justify-center">
                {user}
                <div className="flex gap-3 text-sm text-pargraph">
                  <div>{email}</div>
                  <div>{time}</div>
                </div>
              </div>
            </div>

            <div className="text-blackText whitespace-pre-line leading-relaxed dark:text-white">
              {details}
            </div>

            <hr />

            <div className="text-blackText flex gap-8 items-center dark:text-white">
              <button
                onClick={postlike}
                className={`flex items-center gap-3 justify-center p-2 rounded-2xl 
                  ${liked ? "bg-mainGradient text-white" : "hover:bg-[#be58211f]"}
                `}
              >
                <AiOutlineLike className="text-xl" />
                {likes_num}
              </button>
              <div className="flex items-center gap-3">
                <FiMessageSquare className="text-xl" />
                {reply_num}
              </div>
              <div>{views}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="text-lg">{reply_num}</div>
          <div className="text-lg">Replies</div>
        </div>

        <div>
          {repliesState.map((comment, index) => (
            <div
              key={index}
              className="border border-borderLight flex flex-col p-7 gap-6 mb-5 rounded-3xl dark:bg-card dark:border-borderDark"
            >
              <div className="flex gap-3 text-blackText dark:text-white">
                <FaRegUserCircle className="text-5xl" />
                <div className="flex flex-col">
                  <div>{comment.replier}</div>
                  <div className="flex gap-1 text-center justify-center text-sm text-pargraph">
                    <div>{comment.email}</div>
                    <div className="flex items-center">
                      <BsDot />
                    </div>
                    <div>{comment.time}</div>
                  </div>
                </div>
              </div>

              <div className="text-blackText dark:text-white">{comment.content}</div>

              <div className="flex gap-8 text-blackText dark:text-white">
                <button
                  onClick={() => handleReplyLike(index)} 
                  className={`flex gap-2 items-center px-2 py-1 rounded-2xl 
                    ${comment.liked ? "bg-mainGradient text-white" : "hover:bg-[#be58211f]"}
                  `}
                >
                  <AiOutlineLike className="text-xl" />
                  {comment.likesCount}
                </button>
                <div>reply</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
