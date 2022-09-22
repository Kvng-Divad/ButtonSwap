import React from "react";

import { Box, useRadio } from "@chakra-ui/react";

const RadioCard = ({ onChange, checked, ...props }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} checked={props.checked} />
      <Box
        {...checkbox}
        onClick={event => {
          onChange && onChange(event);
        }}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "red.600",
          color: "white",
          borderColor: "red.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
