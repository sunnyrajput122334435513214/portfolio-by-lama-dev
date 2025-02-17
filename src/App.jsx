import { useState } from "react"; //run npm install framer-motion
// npm install framer-motion react-simple-typewriter in bash
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter
import { motion } from "framer-motion"; //import framer-motion
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import sunny from "./image/sunny.png";
import moon from "./image/moon.png";
import logo from "./image/logo.png";
import dots from "./image/dot.png";
//study it
//{initial={{ opacity: 0, scale: 0.8 }}
// animate={{ opacity: 1, scale: 1 }}
// transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}}
function App() {
  const [isOpen, setIsOpen] = useState(false);
 


  return (
    <>
      {/* intor section 
    mx means marginn in x
    bg-gradient-to-t from-indigo-300  upto top color decreases use this argument*/}
      {/* relative  IMAGE neeche hogi usko upar kr dega means realtive me apne aap kr dega jo ki hmnw fix ki hai immage me*/}
      <div className="h-1/2 sm:h-screen  bg-gradient-to-t from-indigo-300 relative overflow-hidden ">
        {/* navbar 
    z-10 upr aa gya hai*/}
        <nav className="fixed top-0 items-center bg-white w-full z-10">
          <div className=" container mx-auto py-5 flex justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-8 w-8" />
              <span className=" text-2xl font-bold text-indigo-900">
                Portwind
              </span>
            </div>
            <ul className="hidden text-gray-500 uppercase text-sm font-bold lg:flex items-center gap-10">
              <li className=" hover:text-pink-500 cursor-pointer">
                <a href="#">Homepage</a>
              </li>
              <li className=" hover:text-pink-500 cursor-pointer">
                <a href="#">About me</a>
              </li>
              <li className=" hover:text-pink-500 cursor-pointer">
                <a href="#">Services</a>
              </li>
              <li className=" hover:text-pink-500 cursor-pointer">
                <a href="#">Works</a>
              </li>
              <li className=" hover:text-pink-500 cursor-pointer">
                <a href="#">Contact</a>
              </li>
            </ul>
            <img  onClick={() => document.querySelector("html").classList.toggle("dark")}
              src={moon}
              alt=""
              className="hidden md:block h-8 w-8 cursor-pointer bg-white dark:bg-black text-black dark:text-white "
            />

            <div
              id="humburger"
              onClick={() => setIsOpen(!isOpen)}
              className=" space-y-1 md:hidden cursor-pointer z-20"
            >
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
            </div>
            <ul
              id="menu"
              className={`  bg-indigo-700 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* intro content */}
        {/* image */}
        <img
          className="absolute  bottom-0 right-0 lg:left-0 mx-auto h-[90vh] "
          src={sunny}
          alt=""
        />

        {/* circle
    -z for andar ke liye */}
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
        {/* animated text */}
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-5xl lg:left-5 xl:left-48 xl:text-8xl font-bold z-10">
          <span className="text-gray-600">Frelance</span>
          <motion.p className="text-red-600">
            {" "}
            <Typewriter
              words={["Developer", "Designer"]}
              loop={true}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.p>
        </div>
        {/* texts */}
        <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-green-500 absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-indigo-600">HI, I'm Sunny</h1>
          <p className="text-gray-400">
            I'm a full stack developer and a freelancer. I love to build things
            and help people. I'm passionate about technology and I'm always
            looking for new challenges to solve.
          </p>
          <a
            className="bg-indigo-600 w-fit rounded-md font-semibold  text-white text-xl px-3 py-2"
            href="#contact"
          >
            Hire me
          </a>
        </div>
      </div>
      {/* About  */}

        {/* <!-- left --> */}
        <div id="about" class="px-10 dark:bg-slate-900">
      <div
        class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20"
      >
      
        <div class="relative">
          <img
            class="h-1/4 absolute top-0 left-0 -z-10"
            src="./img/dots.png"
            alt=""
          />
          <div class="h-full rounded-full overflow-hidden">
            <img src="./img/portrait.png" alt="" />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 className="text-3xl font-medium dark:text-white">Better Design</h1>
          <h1 className="text-3xl font-medium dark:text-white">
            Better Experience
          </h1>
          <p className="text-gray-400">
            I design and build digital products. I'm also a multi-disciplinary
            maker with over 10 years of experiences in wide range of design
            disciplines.
          </p>
          <h2 className="text-gray-400 font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Javascript</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">React</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
      {/* <div className='bg-blue-500 h-screen text-white flex items-center justify-center p-5 '>
      {/* jb flex hoga sm me to gap-16 rakha hai overlap hua tha */}
      {/* <div className='bg-white p-6 rounded-lg shadow-2xl sm:flex sm:gap-10 sm:p-0'>
        <div className='flex items-center  gap-2'>
          <img className='h-8 w-8 object-cover rounded-full sm:h-full sm:w-45 sm:rounded-none' src="https://www.lummi.ai/api/render/image/b18d54fe-59cf-4e54-9e48-ae5f9cb7c1aa?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImIxOGQ1NGZlLTU5Y2YtNGU1NC05ZTQ4LWFlNWY5Y2I3YzFhYSIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiWE1qekJKWmNUVlNnWHBEQVdHcVFoIiwiaWF0IjoxNzM5NzM5OTI3LCJleHAiOjE3Mzk3Mzk5ODd9.JYLJCcUJwPzA3AWziWLmmTAeuo2I0tMkQEj6jcLmRj8" alt="" />
          <span className='text-black font-bold'>Sunny</span>
        </div >
        <div className='m-2'><p className='text-black italic'>Sleep deprivation causes all sorts of challenges and problems. When one doesn’t get enough sleep one’s mind doesn’t work clearly. Studies have shown that after staying awake for 24 hours one’s ability to do simple math is greatly impaired. Driving tired has been shown to be as bad as driving drunk. Moods change, depression, anxiety, and mania can be induced by lack of sleep. As much as people try to do without enough sleep it is a wonder more crazy things don’t happen in this world.</p>
        <span className='text-black font-bold'>Co-founder of Lummi</span>
        </div>

      </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
