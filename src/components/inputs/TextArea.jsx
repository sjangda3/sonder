import React from "react";

const TextArea = ({id, value, onChange, placeHolder}) => {
  return (
    <textarea
      rows={5}
      id={id}
      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent text-white placeholder-neutral-500"
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextArea;