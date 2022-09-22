import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="animate__fadeInTopRight">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
