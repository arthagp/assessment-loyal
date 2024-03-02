"use client";

import React, { useState, ChangeEvent } from "react";

type InputValue = string | number;

type InputHandler = (event: ChangeEvent<HTMLInputElement>) => void;

type UseInputHook = (
  initialValue: InputValue
) => [InputValue, InputHandler, () => void];

const useInput: UseInputHook = (initialValue) => {
  const [value, setValue] = useState<InputValue>(initialValue);

  const onChange: InputHandler = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, onChange, reset];
};

export default useInput;
