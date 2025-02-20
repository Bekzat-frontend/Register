import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return (
    <div>
      <StyledButton>{children}</StyledButton>
    </div>
  );
}
export const StyledButton = styled.button`
  height: 36px;
  background-color: #0073ff;
  color: white;
  &:hover {
    background-color: #0073ffc3;
  }
`;

export default Button;
