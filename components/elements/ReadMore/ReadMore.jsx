import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={isReadMore ? "text-open-true" : "text-open"}>
      <p onClick={toggleReadMore}>
        {text}
      </p>
      {isReadMore && <button onClick={toggleReadMore} className="btn-reset">Открыть еще</button>}
    </div>
  );
};

export default ReadMore;