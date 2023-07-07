import React from "react";

type headerProps = {
  logo: string;
  name: string;
  getFullYear: number;
  darkMode: boolean;
  datas: {
    id: number;
    book: string;
  }[];
};

export default function HeaderComponent(props: headerProps) {
  console.log("darkkmodeee", props.darkMode);
  console.log("datassss", props.datas);
  return (
    <div>
      <header className={props.darkMode ? "App-header" : "App-light-header"}>
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>Belajar Typescript {props.name}</p>

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
