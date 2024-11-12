import { useState } from "react";
import MainContentLayout from "./components/content/MainContentLayout";
import MenuLayout from "./components/menu/MenuLayout";
import ContactContentLayout from "./components/content/ContactContentLayout";

function App() {
  const [linkClicked, setLinkClicked] = useState("");
  const renderContent = () => {
    if (linkClicked === "/contact") {
      return <ContactContentLayout />;
    }
    return <MainContentLayout />;
  };
  return (
    <div className="min-h-screen w-full flex md:flex-col flex-row bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-1 md:flex-row flex-col">
        <MenuLayout onClick={setLinkClicked} linkClicked={linkClicked} />
        <div className="hidden md:block bg-gradient-to-b from-orange-500 via-red-600 to-blue-800 w-1"></div>
        <div className="grow flex flex-col justify-center items-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
