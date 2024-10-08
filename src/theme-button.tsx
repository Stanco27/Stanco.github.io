import React, { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ThemeButton: React.FC = () => {
    // Get the theme from local storage, default to "dark" if not present
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme || "dark");
  
    useEffect(() => {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        // Set the data-bs-theme attribute based on the theme state
        htmlElement.setAttribute("data-bs-theme", theme);
        // Set the theme in local storage whenever it changes
        localStorage.setItem("theme", theme);
      }
    }, [theme]);
  
    const toggleTheme = () => {
      // Toggle the theme and update local storage
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    };
  
    return theme === "dark" ? (
      <BsSunFill className="icon-buttons" onClick={toggleTheme} />
    ) : (
      <BsMoonFill className="icon-buttons" onClick={toggleTheme} />
    );
  };

export default ThemeButton;