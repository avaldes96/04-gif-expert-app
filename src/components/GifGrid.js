import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getGif } from "../helpers/GetGifs";
import { UseFetchGifs } from "../hooks/UseFetchGits";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);

  const { data, loading } = UseFetchGifs(category);
  //    useEffect(() => {
  //     getGif(category).then(setImages);
  //   }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="animate__animated animate__animate__animate__rollOut">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
