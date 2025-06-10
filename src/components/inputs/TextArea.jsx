import React from "react";

const TextArea = ({id, value, onChange, placeHolder}) => {
  return (
    <textarea
      rows={5}
      id={id}
      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg bg-neutral-900 text-neutral-400"
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextArea;