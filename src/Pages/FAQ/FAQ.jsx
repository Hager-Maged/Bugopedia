import React from "react";
import {
  Button,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
const faqData = [
  {
    id: 1,
    title: "General Questions",
    icon: (
      <FaRegQuestionCircle className="text-3xl rounded-full bg-mainGradient text-whiteText" />
    ),
    items: [
      {
        id: 1,
        question: "What is Bugopedia?",
        answer:
          "Bugopedia is a developer community platform where programmers can share, discuss, and solve bugs together...",
      },
      {
        id: 2,
        question: "Is Bugopedia free to use?",
        answer:
          "Yes! Bugopedia is completely free to use. You can post bugs, vote, comment, and earn rewards without any cost...",
      },
      {
        id: 3,
        question: "How do I get started?",
        answer:
          "Simply create a free account, complete your profile, and start exploring bugs...",
      },
      {
        id: 4,
        question: "What technologies does Bugopedia support?",
        answer:
          "Bugopedia supports a wide range of technologies including JavaScript, Python, React...",
      },
    ],
  },
  {
    id: 2,
    title: "Posting & Managing Bugs",
    icon: (
      <FaBugSlash className="text-3xl rounded-full bg-mainGradient text-whiteText" />
    ),
    items: [
      {
        id: 5,
        question: "How do I post a bug?",
        answer: "Click the 'Share a Bug' button in the navigation bar...",
      },
      {
        id: 6,
        question: "What makes a good bug post?",
        answer: "A good bug post includes: a clear, descriptive title...",
      },
      {
        id: 7,
        question: "Can I edit my bug post after publishing?",
        answer: "Yes! You can edit your bug posts at any time...",
      },
      {
        id: 8,
        question: "How do I mark a bug as solved?",
        answer:
          "Once your bug is resolved, open the bug detail page and click the 'Mark as Solved' button...",
      },
      {
        id: 9,
        question: "Can I delete my bug post?",
        answer:
          "Yes, you can delete your own bug posts from your profile page...",
      },
    ],
  },
  {
    id: 3,
    title: "Community & Interaction",
    icon: (
      <IoPeopleOutline className="text-3xl rounded-full bg-mainGradient text-whiteText" />
    ),
    items: [
      {
        id: 10,
        question: "How does the voting system work?",
        answer: "You can upvote bugs and comments that are helpful...",
      },
      {
        id: 11,
        question: "What are comments for?",
        answer:
          "Comments allow you to discuss bugs, ask clarifying questions...",
      },
      {
        id: 12,
        question: "How do I follow other users?",
        answer: "Visit a user's profile and click the 'Follow' button...",
      },
      {
        id: 13,
        question: "What are discussions?",
        answer:
          "Discussions are community conversations about general programming topics...",
      },
      {
        id: 14,
        question: "How can I participate in polls?",
        answer: "Visit the Community page to find active polls...",
      },
    ],
  },
  {
    id: 4,
    title: "Rewards & Achievements",
    icon: (
      <GiTrophyCup className="text-3xl rounded-full bg-mainGradient text-whiteText" />
    ),
    items: [
      {
        id: 15,
        question: "How do I earn reputation points?",
        answer:
          "Earn reputation by posting quality bugs, providing helpful comments...",
      },
      {
        id: 16,
        question: "What are badges?",
        answer: "Badges are achievements that recognize your contributions...",
      },
      {
        id: 17,
        question: "How do I appear in the Top Contributors section?",
        answer:
          "The Top Contributors showcase is based on your weekly activity...",
      },
      {
        id: 18,
        question: "What is the leaderboard?",
        answer:
          "The leaderboard shows top contributors ranked by reputation...",
      },
      {
        id: 19,
        question: "Can I lose reputation points?",
        answer: "Yes, receiving downvotes or having your content flagged...",
      },
    ],
  },
];
const FAQ = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="px-8 py-20 bg-white dark:bg-darkModeBg">
      <div
        className="container flex flex-col items-center gap-8 mx-auto"
        data-aos="zoom-in"
      >
        <div className="flex flex-col gap-6 pb-12 text-center">
          <FaRegQuestionCircle className="mx-auto rounded-full text-8xl bg-mainGradient text-whiteText" />
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-4xl lg:text-5xl text-secondaryColorTwo"
          >
            Frequently asked questions
          </Typography>
          <Typography className="mx-auto text-lg font-normal lg:max-w-3xl text-blue-gray-800">
            Find answers to common questions about Bugopedia. Can't find what
            you're looking for? Contact our support team.
          </Typography>
          <div className="relative flex items-center flex-1 max-w-xs mx-auto">
            <CiSearch className="absolute text-xl left-3 text-grayText" />
            <input
              type="text"
              placeholder="Search FAQs"
              className="w-full py-2 pl-10 pr-3 text-black transition-all duration-200 bg-transparent border rounded-lg outline-none dark:text-whiteText placeholder-grayText focus:ring-2 focus:ring-orangeColor"
            />
          </div>
        </div>

        {faqData.map((section) => (
          <div
            key={section.id}
            className="flex flex-col w-5/6 gap-4 p-4 rounded-lg shadow-lg bg-lightPink dark:!bg-mainDarkModeColor"
          >
            <div className="flex items-start gap-3">
              {section.icon}
              <h1 className="text-xl font-bold text-blue-gray-800 dark:text-white">
                {section.title}
              </h1>
            </div>
            <Accordion open={true}>
              <AccordionBody className="space-y-2">
                {section.items.map((item) => (
                  <Accordion key={item.id} open={open === item.id}>
                    <AccordionHeader
                      onClick={() => handleOpen(item.id)}
                      className="text-black dark:text-white"
                    >
                      {item.question}
                    </AccordionHeader>
                    <AccordionBody className="text-lg font-bold text-blue-gray-800 dark:text-secondaryColorTwo">
                      {item.answer}
                    </AccordionBody>
                  </Accordion>
                ))}
              </AccordionBody>
            </Accordion>
          </div>
        ))}

        <section
          className="w-5/6 p-6 mx-auto text-center rounded-lg shadow-lg lg:w-2/3 lg:p-8 bg-mainGradient"
          data-aos="flip-right"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-lg font-bold sm:mb-2 text-whiteText lg:text-xl"
            >
              Still need help?
            </Typography>
            <Typography
              variant="p"
              color="blue-gray"
              className="text-base text-whiteText sm:text-lg lg:text-xl"
            >
              Can't find the answer you're looking for? Our support team is here
              to help
            </Typography>
            <div className="flex flex-col items-center justify-center gap-2 mt-2 sm:flex-row sm:gap-4 lg:gap-6 sm:mt-4">
              <Link to="/support">
                <Button
                  variant="outlined"
                  className="flex-shrink-0 px-4 py-2 text-base border-whiteText bg-whiteText text-secondaryColorTwo "
                >
                  Contact Support
                </Button>
              </Link>
              <Link to="/community">
                <Button
                  variant="outlined"
                  className="flex-shrink-0 px-4 py-2 text-base text-whiteText border-whiteText hover:bg-whiteText hover:text-secondaryColorTwo"
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
