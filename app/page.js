"use client";
import { useState } from "react";
import "./globals.css";
import Card from "./components/Card";

const getData = async () => {
  const temp = await fetch("https://dummyjson.com/users/");
  const data = await temp.json();
  return data.users;
};

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const serverData = await getData();
    setData(serverData);
    setIsLoading(false);
  };

  const loading = (
    <div className="flex justify-center items-center mt-8">
      <div className="loader"></div>
    </div>
  );
  return (
    <>
      <div className="text-center">
        <button
          className={`${
            data ? "opacity-0" : "opacity-100"
          } mt-2 ml-2 px-3 py-1 border-2 border-gray-600 rounded-lg text-white text-center`}
          onClick={fetchData}
        >
          Get Data
        </button>
      </div>

      {isLoading ? loading : ""}

      {/* {error ? <p className="text-white">Error Encountered</p> : ""} */}

      {data ? (
        <div
          className={`${
            data ? "opacity-100" : " opacity-0"
          } text-center mb-4 transition-all duration-1000`}
        >
          <button className="bg-white px-4 py-2 rounded-xl">
            <a href="/">Back Home</a>
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className={`${
          data ? "opacity-100" : "opacity-0"
        } grid grid-cols-1 sm:grid-cols-2 grid-rows-2 lg:grid-cols-3 gap-4 items-center w-9/12 mx-auto transition-all duration-[2000ms]`}
      >
        {data && data.map((user, i) => <Card key={i} data={user} />)}
      </div>
    </>
  );
}
