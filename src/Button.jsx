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
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0073ffc3;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    transform: translate(4px, 4px);
  }
`;

export default Button;
