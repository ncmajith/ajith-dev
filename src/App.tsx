import { useState } from "react";
import MainContentLayout from "./components/content/MainContentLayout";
import LeftNav from "./components/LeftNav";
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
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-1 flex-row">
        <LeftNav onClick={setLinkClicked} linkClicked={linkClicked} />
        <div className="bg-gradient-to-b from-orange-500 via-red-600 to-blue-800 w-1"></div>
        <div className="grow flex flex-col justify-center items-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
