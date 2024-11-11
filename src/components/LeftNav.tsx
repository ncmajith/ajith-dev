import { useEffect, useState } from "react";
import { links, socialLinks } from "../utils/Utils";

const LeftNav = ({ onClick, linkClicked }: any) => {
  const [mode, setMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const toggleMode = () => {
    setMode(!mode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  const getModeIcon = () => {
    return (
      <button
        onClick={toggleMode}
        className="pl-2"
        aria-label="Toggle dark mode"
      >
        {mode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
    );
  };

  const onLickClick = (link: any) => {
    onClick(link);
  };

  return (
    <div className="p-6 flex flex-col justify-between w-80">
      <div className="flex flex-row">
        <p className="text-2xl">Ajith VM</p>
        {getModeIcon()}
      </div>
      <div className="flex flex-row">
        <p className="text-xl text-colorBraces dark:text-colorBracesBlack">
          &#123;
        </p>
        <p className="ml-2 mr-2 text-xl dark:text-colorCode text-gray-600">
          Full Stack Developer
        </p>
        <p className="text-xl text-colorBraces dark:text-colorBracesBlack">
          &#125;
        </p>
      </div>

      <div className="grow flex flex-col justify-center">
        {links.map((link, index) => (
          <div className="w-24">
            <p
              key={index + 1}
              className={`${
                link.link === linkClicked ? `text-2xl` : `text-xl mb-5`
              } cursor-pointer transform transition-transform duration-150 ease-in-out hover:scale-110`}
              onClick={() => onLickClick(link.link)}
            >
              {link.name}
            </p>
            {link.link === linkClicked && (
              <div
                className={`h-1 bg-black mt-1 bg-gradient-to-r from-orange-500 via-red-600 to-blue-800 ${
                  link.link === linkClicked && `mb-5`
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {socialLinks.map((link, index) => {
          return (
            <p
              key={index + 1}
              className="p-1 text-gray-600 dark:text-gray-300 cursor-pointer transform transition-transform duration-150 ease-in-out hover:scale-110"
            >
              {link.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
