import React from "react";
import toast from "react-hot-toast";

const CustomToast = (props) => {
  const { title, buttonText } = props;
  return (
    <>
      {toast((t) => (
        <span>
          {title}
          <button onClick={() => toast.dismiss(t.id)}>{buttonText}</button>
        </span>
      ))}
    </>
  );
};

export default CustomToast;
