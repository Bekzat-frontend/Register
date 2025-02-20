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
  width: 100px;
  height: 70px;
  background-color: #0073ff;
  color: white;
  &:hover {
    background-color: #0073ff86;
  }
`;

export default Button;
