import React, { useEffect, useState } from "react";
import ProfileComponent from "./ProfileComponent";

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const fetchRes = await fetch("http://localhost:4000", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await fetchRes.json();
    console.log(data);
    setDataArr(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            key={el.name}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </>
  );
}
