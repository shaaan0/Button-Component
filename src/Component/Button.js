import React, { useEffect, useState } from "react";
import "../css/style.css";
import StarIcon from "./StarIcon";

function Button({
  type,
  size,
  color,
  leftStar,
  rightStar,
  isDisabled,
  children,
}) {
  const [spanClassName, setSpanClassName] = useState("");

  const handleSpanClass = () => {
    if (!isDisabled) {
      setSpanClassName(`label-focus`);
    }
  };

  return (
    <button
      type="link"
      className={`button button-${
        type !== "link" ? type : ""
      } button-${size}  ${isDisabled ? `button-${type}-disabled` : ""}`}
    >
      {type === "link" ? (
        <span className={`label ${color ? 'gray':""} ${spanClassName} ${isDisabled? "label-disabled":""}` } onClick={handleSpanClass}
        >
          {leftStar ? <StarIcon size={size} /> : ""}
          {children}
          {rightStar ? <StarIcon size={size} /> : ""}
        </span>
      ) : (
        <>
          {leftStar ? <StarIcon size={size} /> : ""}
          {children}
          {rightStar ? <StarIcon size={size} /> : ""}
        </>
      )}
    </button>
  );
}

export default Button;
