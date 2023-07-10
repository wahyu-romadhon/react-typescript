import React from "react";
import ButtonComponent from "./ButtonComponent";

type headerProps = {
  logo: string;
  name: string;
  getFullYear: number;
  darkMode: boolean;
  datas: {
    id: number;
    book: string;
  }[];
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderComponent(props: headerProps) {
  return (
    <div>
      <header className={props.darkMode ? "App-header" : "App-light-header"}>
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>Belajar Typescript {props.name}</p>

        <ButtonComponent
          label={`Click me, Setting ${
            props.darkMode ? "Light Mode" : "Dark Mode"
          }`}
          handleClick={(event, paramKedua) => {
            props.setIsDarkMode(!props.darkMode); // jadi ini bisa ganti sesuai click
          }}
        />

        {props.datas.map((data, index) => {
          return (
            <p>
              buku dengan id {data.id}, dan nama bukunya yaitu {data.book}
            </p>
          );
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, {props.getFullYear}
        </a>
      </header>
    </div>
  );
}
