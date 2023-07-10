import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { useState } from "react";

function App() {
  const date = new Date();
  const getFullYear = date.getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const datas = [
    { id: 1, book: "Sangkuriang" },
    { id: 2, book: "Blambangan" },
    { id: 3, book: "Sritanjung" },
  ];

  return (
    <div className="App">
      <HeaderComponent
        logo={logo}
        name="Kang Wahyu Studio"
        getFullYear={getFullYear}
        darkMode={isDarkMode}
        datas={datas}
        setIsDarkMode={setIsDarkMode}
      />
    </div>
  );
}

export default App;
