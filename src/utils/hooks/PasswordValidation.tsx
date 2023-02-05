import { useState, useEffect } from "react";

export const usePasswordValidation = ({
  password = "",
  requiredLength = 8,
}) => {
  const [validLength, setValidLength] = useState(Boolean);
  const [hasNumber, setHasNumber] = useState(Boolean);
  const [upperCase, setUpperCase] = useState(Boolean);
  const [lowerCase, setLowerCase] = useState(Boolean);

  useEffect(() => {
    setValidLength(password.length >= requiredLength ? true : false);
    setUpperCase(password.toLowerCase() !== password);
    setLowerCase(password.toUpperCase() !== password);
    setHasNumber(/\d/.test(password));
  }, [password]);

  return [validLength, hasNumber, upperCase, lowerCase];
};
