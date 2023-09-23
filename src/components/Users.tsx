import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Quiz } from "./Quiz/Quiz";
import { quiz } from "../../db";
import axios from "axios";
import { Button, Spinner } from "@material-tailwind/react";
import {
  FiMenu,
  FiShoppingCart,
  FiUsers,
  FiLayers,
  FiTrello,
} from "react-icons/fi";
import { Hero } from "./Hero/Hero";
import Topics from "./Quiz/Topics/Topics";
import Fade from "react-reveal/Fade";
import { Results } from "./Results/Results";

export interface IFormInput {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  result: number;
  geografiya: number;
  onatili: number;
  tarix: number;
}

export const Users = () => {
  const [data, setData] = useState<IFormInput[]>([]);
  const [userId, setUserId] = useState<string | undefined>();
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleModalOpen = () => setIsModalOpen(!isModalOpen);

  const { id } = useParams();

  useEffect(() => {
    setUserId(id);
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<IFormInput[]>(
        "https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  const user = data.find((item) => item.id.toString() === userId);

  if (!user) {
    return (
      <div className="absolute h-screen flex items-center justify-center w-full">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    console.log(topic);
  };

  const scrollToTopics = () => {
    const toicsElement = document.getElementById("topics");
    if (toicsElement) {
      window.scrollTo({
        behavior: "smooth",
        top: toicsElement.offsetTop,
      });
    }
  };

  const topicQuestions = quiz.filter((t) => t.topic === selectedTopic);

  return (
    <div
      className="w-screen h-[90vh] bg-cover"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="" />
            <h1 className="text-white font-bold text-xl  lg:text-2xl">
              Quiz APP
            </h1>
          </div>
          <Fade top cascade>
            <ul className="items-center gap-6 text-white hidden lg:flex">
              {listItem.map((item, index) => (
                <li
                  key={index}
                  onClick={
                    index === 0
                      ? scrollToTopics
                      : index === 1
                      ? handleModalOpen
                      : () => {}
                  }
                  className="cursor-pointer hover:text-blue-gray-300 transition-all duration-300"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </Fade>
          <div className="hidden lg:flex">
            <Link to="/">
              <Button className="bg-[#FFBC51] text-white py-3 px-10 rounded-[96px]">
                Chiqish
              </Button>
            </Link>
          </div>
          <div className="text-white flex lg:hidden text-2xl">
            <FiMenu onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <Hero />

        {isLoggedIn && (
          <>
            <div>
              <Topics
                user={user}
                handleTopicSelect={handleTopicSelect}
                handleOpen={handleOpen}
              />
            </div>

            {selectedTopic ? (
              <div>
                <Quiz
                  key={selectedTopic}
                  quiz={topicQuestions}
                  handleOpen={handleOpen}
                  open={open}
                  id={Number(id)}
                  handleTopicSelect={handleTopicSelect}
                />
              </div>
            ) : null}
          </>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="" className="bg-blue-gray-700" />
            <h1 className="text-blue-gray-700 font-bold text-xl  lg:text-2xl">
              Quiz APP
            </h1>
          </div>
          <ul className=" gap-2 text-blue-gray-700 flex flex-col">
            {listItem.map((item, index) => (
              <li
                key={index}
                onClick={
                  index === 0
                    ? scrollToTopics
                    : index === 1
                    ? handleModalOpen
                    : () => {}
                }
                className=" rounded-md p-2 flex items-center gap-2 font-semibold cursor-pointer hover:bg-blue-gray-200 hover:text-white transition-all duration-300 "
              >
                {item.icon}
                {item.title}
              </li>
            ))}
          </ul>
          <Link to="/">
            <Button className="bg-[#FFBC51] text-white py-3 px-10 rounded-[96px] w-full mt-10">
              Chiqish
            </Button>
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <>
          <Results
            handleOpen={handleModalOpen}
            open={isModalOpen}
            user={user}
          />
        </>
      )}
    </div>
  );
};

const listItem = [
  {
    title: "Testlar",
    icon: <FiShoppingCart />,
  },
  {
    title: "Natijalar",
    icon: <FiUsers />,
  },
  {
    title: "Loyiha haqida",
    icon: <FiLayers />,
  },
  {
    title: "Pricing",
    icon: <FiTrello />,
  },
];
