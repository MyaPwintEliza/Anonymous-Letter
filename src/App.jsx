import { useEffect, useState } from "react";
import "./App.css";
import LetterEnvlope from "./components/LetterEnvlope";
import FormBox from "./components/FormBox";
import { v4 as uuid } from "uuid";

const peopleLetter = [
  {
    id: 1,
    name: "Future Love",
    text: "I will find you and hope you that see me and give me a change to make this happen..",
    from: "Little Star",
  },
  {
    id: 2,
    name: "World",
    text: "please be happy when we are around",
    from: "Human",
  },
  {
    id: 3,
    name: "The Person Who Opened This Letter",
    text: "hey i'm glad that you open this letter, i things i want to tell you is never gave up.",
    from: "Writer",
  },
];

function App() {
  // const [count, setCount] = useState(0);
  const [letter, setLetter] = useState(peopleLetter);
  const [newLetter, setNewLetter] = useState({
    id: uuid(),
    name: "",
    text: "",
    from: "",
  });

  function handleNewLetterAdd() {
    setLetter([...letter, newLetter]);
  }

  useEffect(() => {
    localStorage.setItem("newLetter", JSON.stringify(newLetter));
  }, [newLetter]);

  useEffect(() => {
    const newLetter = JSON.parse(localStorage.getItem("newLetter"));
    if (newLetter) {
      setNewLetter(newLetter);
    }
  }, []);

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="App bg:white dark:bg-slate-900">
        <div>
          <label className="swap swap-rotate mt-5">
            <input type="checkbox" onClick={handleThemeSwitch} />

            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current dark:fill-white w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <h1 className="text-9xl font-semibold dark:text-white">
            WILL YOU KNOW?
          </h1>
          <div>
            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium dark:text-slate-400">
                <a href="#">Read Letters</a>
              </div>
              {/* preview */}
              <div className="collapse-content justify-center ease-in duration-700 ease-out">
                <div className="mt-20 images flex-wrap">
                  <ul className="flex justify-between">
                    <li>
                      {letter.map((letter) => (
                        <LetterEnvlope
                          letter={letter}
                          key={letter.id}
                          name={letter.name}
                          text={letter.text}
                          from={letter.from}
                        />
                      ))}
                    </li>

                    <li>
                      <LetterEnvlope
                        name={newLetter.name}
                        text={newLetter.text}
                        from={newLetter.from}
                      />
                    </li>
                    <button className="btn" onClick={handleNewLetterAdd}>
                      Write New
                    </button>
                  </ul>
                </div>
              </div>
              ;
            </div>

            {/* form */}
            <div className="collapse border dark:border-none">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium dark:text-slate-400 ">
                <a href="#">Write Your Own</a>
              </div>
              <div className="collapse-content justify-self-center ">
                <FormBox newLetter={newLetter} setNewLetter={setNewLetter} />
              </div>
            </div>

            <div className="collapse dark:text-slate-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium dark:text-slate-400">
                <a href="#">About Us</a>
              </div>
              <div className="collapse-content">
                <div className="justify-start">
                  <p>
                    <span className="font-bold">Will You Know</span> is an
                    online community for people to submit their letters
                    anonymously.
                  </p>
                  <p>
                    Letters have an intentional reader and are crafted with
                    purpose, time and dignity. They can be playful, serious,
                    nostalgic, poignant or confessionary. They can be open
                    letters to society or personal letters to the people you
                    love, miss or never met. Letters may be addressed to someone
                    else but they are a sounding board for ourselves. In a world
                    where we often struggle to connect and listen to each other,
                    letters can fill that gap. Everyone has a letter to write.
                  </p>
                  <p>
                    In doing so, I hope we can feel more connected to the other
                    humans we share this planet with. ♥
                  </p>
                  <img className="w-35" src="src/images/writing.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
