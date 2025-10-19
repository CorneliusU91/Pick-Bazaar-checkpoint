import React from "react";

const MainParagraph = ({ className, text }) => {
  return <p className={className}>{text || "Paste your text here"}</p>;
};

export default MainParagraph;
