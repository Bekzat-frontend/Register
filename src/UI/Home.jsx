import React, { useState } from "react";
import { StyledButton } from "../Button";

export function AppRegister() {
  const [state, setState] = useState({
    FirstName: "",
    UserName: "",
    Email: "",
  });
  const [addBtn, setAddBtn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFirstName = (event) => {
    setState({ ...state, FirstName: event.target.value });
  };

  const handleUserName = (event) => {
    setState({ ...state, UserName: event.target.value });
  };

  const handleEmail = (event) => {
    setState({ ...state, Email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.FirstName && state.UserName && state.Email) {
      setAddBtn(true);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && addBtn ? (
            <span className="span-1">Спасибо за регистрацию.</span>
          ) : null}
          <input
            className="input-item"
            onChange={handleFirstName}
            value={state.FirstName}
            type="text"
            placeholder="first name"
          />
          {submitted && !state.FirstName ? (
            <span>Заполните это поле.</span>
          ) : null}

          <input
            onChange={handleUserName}
            value={state.UserName}
            type="text"
            placeholder="user name"
          />
          {submitted && !state.UserName ? (
            <span>Заполните это поле.</span>
          ) : null}

          <input
            onChange={handleEmail}
            value={state.Email}
            type="email"
            placeholder="Email"
          />
          {submitted && !state.Email ? <span>Заполните это поле.</span> : null}

          <StyledButton type="submit">Register</StyledButton>
        </form>
      </div>
    </>
  );
}

export default AppRegister;
