import { links, socialLinks } from "../../utils/Utils";

const LeftMenuLayout = ({ getModeIcon, onLickClick, linkClicked }: any) => {
  return (
    <div className="hidden md:flex md:flex-col md:justify-between p-6 w-80">
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
          <div key={index + 1} className="w-24">
            <p
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

export default LeftMenuLayout;
