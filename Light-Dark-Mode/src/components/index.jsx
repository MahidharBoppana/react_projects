import useLocalStorage from "./useLocalStorage.jsx";
import "./style.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello World!</h1>
        <button onClick={handleToggleChange}>Change Theme</button>
      </div>
    </div>
  );
}
