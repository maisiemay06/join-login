import { useState, useEffect } from "react";
import warningIcon from "../imgs/warning.png";
import ValidateEmail from "./ValidateEmail";
import ValidatePassword from "./ValidatePassword";

export default function Login() {
  const [incorrectEmail, setIncorrectEmail] = useState(false); // If user enters a correct email but not one already used to sign up

  const [showToggle, setShowToggle] = useState(false); // Toggle show/hide paddwords icons
  const [showPassword, setShowPassword] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [validEmail, setValidEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailMissing, setEmailMissing] = useState(false);

  const [validPassword, setValidPassword] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  useEffect(() => {
    if (validEmail && validPassword) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [validEmail, validPassword]);

  function handleEmail(event) {
    let email = event.target.value;
    if (ValidateEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  function checkEmail(event) {
    if (!event.target.value) {
      setEmailMissing(true);
    } else {
      setEmailMissing(false);
      if (validEmail) {
        setInvalidEmail(false);
      } else {
        setInvalidEmail(true);
      }
    }
  }
  function handlePassword(event) {
    let password = event.target.value;
    if (ValidatePassword(password)) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  function checkPassword(event) {
    if (!event.target.value) {
      setPasswordMissing(true);
    } else {
      setPasswordMissing(false);
      if (validPassword) {
        setInvalidPassword(false);
      } else {
        setInvalidPassword(true);
      }
    }
  }

  function handleSubmit() {}

  return (
    <>
      {incorrectEmail ? (
        <div className="incorrect-login">
          <img src={warningIcon} alt="" />
          <p>
            Oh dear… it looks like either your email address or password were
            incorrect. Would you like to try again?
          </p>
        </div>
      ) : (
        <h3 className="card-title email-title">or</h3>
      )}
      <form className="login">
        <span className="email-wrapper">
          <input
            type="email"
            placeholder={`${
              emailMissing ? "Email address required" : "Email address"
            }`}
            className={`user-input ${
              invalidEmail ? "invalid-entry" : "valid-entry"
            } ${emailMissing ? "unfilled" : "valid-entry"}`}
            id="email-input"
            required
            onChange={handleEmail}
            onBlur={checkEmail}
          />
          {invalidEmail && (
            <p className="invalid">please use a valid email address</p>
          )}
        </span>
        <span className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={`${
              passwordMissing ? "Password required" : "Password"
            }`}
            id="password"
            className={`user-input 
            ${invalidPassword ? "invalid-entry" : "valid-entry"} 
            ${passwordMissing ? "unfilled" : "valid-entry"}`}
            required
            minLength={6}
            onChange={handlePassword}
            onFocus={() => setShowToggle(true)}
            onBlur={checkPassword}
          />
          {showToggle && !showPassword && (
            <i
              className="fa-solid fa-eye"
              id="toggle-password-show"
              onClick={() => {
                setShowPassword(true);
              }}
            ></i>
          )}
          {showToggle && showPassword && (
            <i
              className="fa-solid fa-eye-slash"
              id="toggle-password-hide"
              onClick={() => setShowPassword(false)}
            ></i>
          )}
        </span>
        <input
          type="submit"
          value="continue"
          id="login-button"
          disabled={submitDisabled ? true : false}
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
