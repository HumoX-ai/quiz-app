import { quiz } from "../../../../db";
import { IFormInput } from "../../Users";
import Fade from "react-reveal/Fade";
interface TopicsProps {
  user: IFormInput; // User ma'lumotlari uchun interfeys
  handleTopicSelect: (topic: string) => void;
  handleOpen: () => void;
}

const getRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};
const Topics: React.FC<TopicsProps> = ({ handleOpen, handleTopicSelect }) => {
  
  return (
    <div className="mt-28 text-blue-gray-800" id="topics">
      <h1 className="text-3xl lg:text-6xl font-bold mb-12">Testlar to'plami</h1>
      <Fade bottom cascade fraction={0.2}>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {quiz.map((item) => (
            <div
              key={item.id}
              className="max-w-sm relative"
              onClick={() => {
                handleTopicSelect(item.topic);
                handleOpen();
              }}
            >
              <div
                className=" p-5 rounded-md  relative h-[150px]"
                style={{ backgroundColor: getRandomRGB() }}
              >
                <div
                  className={`absolute top-0 left-0 ${
                    item.level === "Oson"
                      ? "bg-green-500"
                      : item.level === "O'rta"
                      ? "bg-yellow-800"
                      : "bg-red-500"
                  } rounded-t-md text-white p-[2px]`}
                >
                  {item.level}
                </div>
                <div className="text-white flex items-center h-full">
                  <h2 className="font-semibold text-2xl">{item.topic}</h2>
                </div>

                <img
                  src={item.img}
                  alt=""
                  className="w-28 absolute bottom-0 right-0"
                />
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Topics;
