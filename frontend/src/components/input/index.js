import React, { useCallback, useState } from "react";

import { Container } from "./style";

const Input = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container OnFocus={handleInputFocus} isFocused={isFocused} {...rest} />
  );
};

export default Input;
