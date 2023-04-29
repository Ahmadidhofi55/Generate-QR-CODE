import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body?.classList) {
      if (isDarkMode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button 
      className="fixed bottom-16 right-5 bg-gray-800 rounded-full w-14 h-14 flex items-center justify-center text-white z-10"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <FontAwesomeIcon icon={faMoon} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="2x" />
      )}
    </button>
  );
}

export default DarkModeButton;
