import React from "react";

export const useCompletes = (initial) => {
  const [text, setText] = React.useState(initial);

  const setBoxText = (_ref) => {
    const value = _ref.current?.value;
    if (value && value !== "") {
      setText(value);
      _ref.current.value = "";
    }
  };

  return [text, setBoxText];
};