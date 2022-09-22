import React from "react";
import { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";
//import gifGrid from "./components/gifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch"];

  const [categories, setCategoties] = useState([""]);

  //   const handleAdd = () => {
  //     setCategoties([...categories, "Adriana"]);
  //   };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategories setCategoties={setCategoties} />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
