import { useState } from "react";
import { links } from "../../utils/Utils";

const MobileMenuLayout = ({ onLickClick, linkClicked }: any) => {
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);
  const openMenuDrawer = () => {
    setShowMenuDrawer(!showMenuDrawer);
  };
  return (
    <>
      {showMenuDrawer && (
        <div className="md:hidden flex flex-col items-center bg-gray-500">
          {links.map((link, index) => {
            return (
              <div>
                <p
                  key={index + 1}
                  className={`${
                    link.link === linkClicked ? `text-2xl` : `text-xl mb-5`
                  } p-1 text-gray-100 cursor-pointer transform transition-transform duration-150 ease-in-out hover:scale-110`}
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
            );
          })}
        </div>
      )}
      <div className="md:hidden flex flex-row-reverse m-4">
        <button onClick={openMenuDrawer}>
          <div className="bg-gradient-to-r from-orange-500 via-red-600 to-blue-800 w-10 h-1 mb-1 rounded"></div>
          <div className="bg-gradient-to-r from-orange-500 via-red-600 to-blue-800 w-10 h-1 mb-1 rounded"></div>
          <div className="bg-gradient-to-r from-orange-500 via-red-600 to-blue-800 w-10 h-1 mb-1 rounded"></div>
        </button>
      </div>
    </>
  );
};

export default MobileMenuLayout;
