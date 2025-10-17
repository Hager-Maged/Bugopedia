import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBugSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoPeopleOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";

const FAQ = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="px-8 py-20">
      <div className="container flex flex-col items-center gap-8 mx-auto">
        <div className="flex flex-col gap-6 pb-12 text-center">
          <FaRegQuestionCircle className="mx-auto rounded-full text-8xl bg-mainGradient text-whiteText" />
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-base  lg:text-[40px] text-secondaryColorTwo "
          >
            Frequently asked questions
          </Typography>
          <Typography className="mx-auto font-normal text-[18px] !text-grayText lg:max-w-3xl dark:">
            Find answers to common questions about Bugopedia. Can't find what
            you're looking for? Contact our support team.
          </Typography>

          <div className="relative flex items-center flex-1 max-w-xs mx-auto ">
            <CiSearch className="absolute left-3 text-grayText text-[1.2em]" />
            <input
              type="text"
              placeholder="Search FAQs"
              className="w-full pl-10 pr-3 py-[0.6em] rounded-[0.6em] border bg-transparent !text-black dark:!text-whiteText placeholder-grayText outline-none focus:ring-2 focus:ring-orangeColor transition-all duration-200 focus:!text-black dark:focus:!text-whiteText"
            />
          </div>
        </div>
        <div className="flex flex-col w-5/6 gap-4 p-4 shadow-lg border-1">
          <div className="flex items-start gap-3">
            <FaRegQuestionCircle className="text-3xl rounded-full bg-mainGradient text-whiteText" />
            <h1 className="text-2xl font-bold dark:text-whiteText">
              General Questions
            </h1>
          </div>
          <Accordion open={true}>
            <AccordionBody className="space-y-2">
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="dark:text-whiteText"
                >
                  What is Bugopedia?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Bugopedia is a developer community platform where programmers
                  can share, discuss, and solve bugs together. It combines the
                  best features of social coding platforms with a reward system
                  that recognizes top contributors.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="dark:text-whiteText"
                >
                  Is Bugopedia free to use?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Yes! Bugopedia is completely free to use. You can post bugs,
                  vote, comment, and earn rewards without any cost. We believe
                  in supporting the developer community.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="dark:text-whiteText"
                >
                  How do I get started?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Simply create a free account, complete your profile, and start
                  exploring bugs in your favorite technologies. You can also
                  post your first bug to get help from the community.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 4}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="dark:text-whiteText"
                >
                  What technologies does Bugopedia support?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Bugopedia supports a wide range of technologies including
                  JavaScript, Python, React, Node.js, Java, C++, and many more.
                  You can filter bugs by technology in the Tech section.
                </AccordionBody>
              </Accordion>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="flex flex-col w-5/6 gap-4 p-4 shadow-lg border-1">
          <div className="flex items-start gap-3">
            <FaBugSlash className="text-3xl rounded-full bg-mainGradient text-whiteText" />

            <h1 className="text-2xl font-bold dark:text-whiteText">
              Posting & Managing Bugs
            </h1>
          </div>
          <Accordion open={true}>
            <AccordionBody className="space-y-2">
              <Accordion open={open === 5}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="dark:text-whiteText"
                >
                  How do I post a bug?{" "}
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Click the 'Share a Bug' button in the navigation bar or on the
                  home page. Fill in the bug title, description, add your code
                  snippet, select relevant tags, and choose the appropriate
                  category. Then click 'Post Bug' to share it with the
                  community.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 6}>
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="dark:text-whiteText"
                >
                  What makes a good bug post?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  A good bug post includes: a clear, descriptive title; detailed
                  description of the issue; relevant code snippets; steps to
                  reproduce; expected vs actual behavior; and appropriate tags.
                  The more details you provide, the better help you'll receive.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 7}>
                <AccordionHeader
                  onClick={() => handleOpen(7)}
                  className="dark:text-whiteText"
                >
                  Can I edit my bug post after publishing?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Yes! You can edit your bug posts at any time from your profile
                  page. Click on the bug, then select the edit option to make
                  changes.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 8}>
                <AccordionHeader
                  onClick={() => handleOpen(8)}
                  className="dark:text-whiteText"
                >
                  How do I mark a bug as solved?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Once your bug is resolved, open the bug detail page and click
                  the 'Mark as Solved' button. This helps others know the issue
                  has been fixed and earns you completion points.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 9}>
                <AccordionHeader
                  onClick={() => handleOpen(9)}
                  className="dark:text-whiteText"
                >
                  Can i delete my bug post?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Yes, you can delete your own bug posts from your profile page.
                  However, if the post has received significant community
                  engagement (comments, votes), we recommend marking it as
                  solved instead.
                </AccordionBody>
              </Accordion>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="flex flex-col w-5/6 gap-4 p-4 shadow-lg border-1">
          <div className="flex items-start gap-3">
            <IoPeopleOutline className="text-3xl rounded-full bg-mainGradient text-whiteText" />

            <h1 className="text-2xl font-bold dark:text-whiteText">
              Community & Interaction
            </h1>
          </div>
          <Accordion open={true}>
            <AccordionBody className="space-y-2">
              <Accordion open={open === 10}>
                <AccordionHeader
                  onClick={() => handleOpen(10)}
                  className="dark:text-whiteText"
                >
                  How does the voting system work?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  You can upvote bugs and comments that are helpful or
                  well-written, and downvote those that are unclear or
                  unhelpful. Your votes help surface the best content and
                  contribute to user reputation scores.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 11}>
                <AccordionHeader
                  onClick={() => handleOpen(11)}
                  className="dark:text-whiteText"
                >
                  What are comments for?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Comments allow you to discuss bugs, ask clarifying questions,
                  suggest solutions, or provide additional context. Quality
                  comments that help solve bugs earn you reputation points.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 12}>
                <AccordionHeader
                  onClick={() => handleOpen(12)}
                  className="dark:text-whiteText"
                >
                  How do I follow other users?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Visit a user's profile and click the 'Follow' button. You'll
                  see their latest bug posts and activity in your feed.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 13}>
                <AccordionHeader
                  onClick={() => handleOpen(13)}
                  className="dark:text-whiteText"
                >
                  What are discussions?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Discussions are community conversations about general
                  programming topics, best practices, and industry news. Join
                  discussions in the Community section to share your insights.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 14}>
                <AccordionHeader
                  onClick={() => handleOpen(14)}
                  className="dark:text-whiteText"
                >
                  How can I participate in polls?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Visit the Community page to find active polls. Click on any
                  poll to view details and cast your vote. Polls help the
                  community decide on features and topics.
                </AccordionBody>
              </Accordion>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="flex flex-col w-5/6 gap-4 p-4 shadow-lg border-1">
          <div className="flex items-start gap-3">
            <GiTrophyCup className="text-3xl rounded-full bg-mainGradient text-whiteText" />

            <h1 className="text-2xl font-bold dark:text-whiteText">
              Rewards & Achievements
            </h1>
          </div>
          <Accordion open={true}>
            <AccordionBody className="space-y-2">
              <Accordion open={open === 15}>
                <AccordionHeader
                  onClick={() => handleOpen(15)}
                  className="dark:text-whiteText"
                >
                  How do I earn reputation points?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Earn reputation by posting quality bugs, providing helpful
                  comments, receiving upvotes, solving bugs, and being active in
                  the community. The more you contribute, the more points you
                  earn.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 16}>
                <AccordionHeader
                  onClick={() => handleOpen(16)}
                  className="dark:text-whiteText"
                >
                  What are badges?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Badges are achievements that recognize your contributions and
                  milestones. You can earn badges for various activities like
                  posting your first bug, reaching voting milestones,
                  maintaining streaks, and helping others.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 17}>
                <AccordionHeader
                  onClick={() => handleOpen(17)}
                  className="dark:text-whiteText"
                >
                  How do I appear in the Top Contributors section?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  The Top Contributors showcase is based on your weekly activity
                  and reputation. Stay active, post quality content, and help
                  others to increase your ranking.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 18}>
                <AccordionHeader
                  onClick={() => handleOpen(18)}
                  className="dark:text-whiteText"
                >
                  What is the leaderboard?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  The leaderboard shows top contributors ranked by reputation,
                  bugs solved, and helpful comments. You can filter by weekly,
                  monthly, or all-time rankings.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 19}>
                <AccordionHeader
                  onClick={() => handleOpen(19)}
                  className="dark:text-whiteText"
                >
                  Can I lose reputation points?
                </AccordionHeader>
                <AccordionBody className="text-grayText">
                  Yes, receiving downvotes or having your content flagged as
                  unhelpful can result in reputation loss. Focus on quality
                  contributions to maintain your score.
                </AccordionBody>
              </Accordion>
            </AccordionBody>
          </Accordion>
        </div>
        <section className="w-5/6 mx-auto text-center bg-right-top rounded-lg shadow-lg p-15 bg-mainGradient">
          <div
            xl
            className="flex flex-col items-center justify-center gap-6 p-10 bg-right bg-no-repeat bg-cover rounded-l-der border-blue-gray-100 rounded-xl lg:bg-contain "
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-bold text-whiteText"
            >
              Still need help?
            </Typography>
            <Typography
              variant="p"
              color="blue-gray"
              className="text-whiteText"
            >
              Can't find the answer you're looking for? Our support team is here
              to help
            </Typography>
            <div className="flex items-center justify-center gap-4">
              <Link to="/support">
                <Button
                  variant="outlined"
                  className="flex-shrink-0 border-whiteText bg-whiteText text-secondaryColorTwo"
                >
                  Contact Support
                </Button>
              </Link>

              <Link to="/community">
                <Button
                  variant="outlined"
                  className="flex-shrink-0 text-whiteText border-whiteText hover:bg-whiteText hover:text-secondaryColorTwo"
                >
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FAQ;
