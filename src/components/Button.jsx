import React from 'react'
import "./Button.css"

const Button = ({ text, onClick, type = "default" }) => {
  const btnType = ["submit", "cancel"].includes(type) ? type : "default";

  return (
    <button className={["btn", `btn-${btnType}`].join(" ")} onClick={onClick}>
      {text} {/* 👈 버튼에 텍스트가 노출되도록 추가 */}
    </button>
  );
};

export default Button;