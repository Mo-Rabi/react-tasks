import React from "react";

export default function Home() {
  // Import all files from the 'images' directory
  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context("../../images", false, /\.(png|jpe?g|svg)$/)
  ); // Log the images array outside of JSX
  console.log(images);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {images.map((image, index) => (
        <img
          className="m-5"
          key={index}
          src={image}
          alt={`Photo ${index + 1}`}
          style={{ height: "50vh", width: "auto" }}
        />
      ))}
    </div>
  );
}
