import React from "react";
import eplant from "../assets/eplant.png";
import netflix from "../assets/netflix.png";
import covid from "../assets/covid-19.png";
import todo from "../assets/todo.png";
import logus from "../assets/logus.png";
import quiz from "../assets/quiz.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300  bg-[#0a192f] "
    >
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full ">
        <div className="my-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
        </div>
        {/* card item */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-2">
          <div
            style={{
              backgroundImage: `url(${covid})`,
              backgroundBlendMode: "darken",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover effectss */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Covid-19 tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://adithyan-covid-19-tracker.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AdithyanKP/covid-19-tracker.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${eplant})`,
              backgroundBlendMode: "darken",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover effectss */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-Plant Ecommerce
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/AdithyanKP/E-PLANT.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${logus})`,
              backgroundBlendMode: "darken",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover effectss */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Logus Social-media App
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/AdithyanKP/Logus.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${netflix})`,
              backgroundBlendMode: "darken",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover effectss */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://adiflix.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AdithyanKP/Netflix-Clone.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${todo})`,
              backgroundBlendMode: "darken",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover effectss */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo App
              </span>
              <div className="pt-8 text-center">
                <a href="https://todo-app-adithyan.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AdithyanKP/To-Do-App.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${quiz})`,
              backgroundBlendMode: "darken",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover effectss */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Simple quiz App
              </span>
              <div className="pt-8 text-center">
                <a href="https://quizz-kp.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AdithyanKP/Quiz-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
