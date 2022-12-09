import React, { useState } from "react";
import "../App.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const [showDot, setShowDot] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    setShowDot(!showDot);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      {text.length > 150 && (
        <>
          {showDot && "..."}

          <span style={{ marginTop: "30px" }} onClick={toggleReadMore}>
            {isReadMore ? "read more" : "read less"}
          </span>
        </>
      )}
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </ReadMore>
      </h2>
    </div>
  );
};

export default Content;
