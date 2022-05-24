import { useEffect, useState } from "react";
import warningIcon from "../imgs/warning.png";
import ValidateEmail from "./ValidateEmail";
import ValidatePassword from "./ValidatePassword";

export default function Join() {
  const [incorrectEmail, setIncorrectEmail] = useState(false); // If user enters a correct email but not one already used to sign up

  const [showToggle, setShowToggle] = useState(false); // Toggle show/hide paddwords icons
  const [showPassword, setShowPassword] = useState(false);
  const [showSecToggle, setShowSecToggle] = useState(false); // Toggle show/hide passwords icons
  const [showSecPassword, setShowSecPassword] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [validEmail, setValidEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailMissing, setEmailMissing] = useState(false);

  const [validPassword, setValidPassword] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);
  const [firstPassword, setFirstPassword] = useState("");

  const [validSecPassword, setValidSecPassword] = useState(false);
  const [invalidSecPassword, setInvalidSecPassword] = useState(false);
  const [secPasswordMissing, setSecPasswordMissing] = useState(false);
  const [secPassword, setSecPassword] = useState("");

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    if (validEmail && validPassword && validSecPassword && passwordsMatch) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [validEmail, validPassword, validSecPassword, passwordsMatch]);

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

  useEffect(() => {
    if (firstPassword === secPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  }, [secPassword, firstPassword]);

  function handlePassword(event) {
    setFirstPassword(event.target.value);
    if (ValidatePassword(firstPassword)) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  function handleSecPassword(event) {
    setSecPassword(event.target.value);
    if (ValidatePassword(secPassword)) {
      setValidSecPassword(true);
    } else {
      setValidSecPassword(false);
    }
  }

  function checkPassword() {
    if (!firstPassword) {
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

  function checkSecPassword() {
    if (!secPassword) {
      setSecPasswordMissing(true);
    } else {
      setSecPasswordMissing(false);
      if (validSecPassword) {
        setInvalidSecPassword(false);
      } else {
        setInvalidSecPassword(true);
      }
    }
  }

  function handleSubmit() {}

  return (
    <div className="join">
      {incorrectEmail ? (
        <div className="incorrect-login">
          <img src={warningIcon} alt="" />
          <p>
            This email address has already been used for a Meeow account. <br />
            Click here to login or try another email address.
          </p>
        </div>
      ) : (
        <h3 className="card-title">or join with email</h3>
      )}
      <form className="login join">
        <span className="email-wrapper">
          <input
            type="email"
            placeholder={`${
              emailMissing ? "Email address required" : "Email address"
            }`}
            className={`user-input 
            ${invalidEmail ? "invalid-entry" : "valid-entry"}
            ${emailMissing ? "unfilled" : "valid-entry"}`}
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
            className={`user-input valid-entry"
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
        <span className="password-wrapper">
          <input
            type={showSecPassword ? "text" : "password"}
            placeholder={`${
              secPasswordMissing ? "Password required" : "Re-enter Password"
            }`}
            id="sec-password"
            className={`user-input valid-entry
                ${secPasswordMissing ? "unfilled" : "valid-entry"}`}
            required
            minLength={6}
            onChange={handleSecPassword}
            onFocus={() => setShowSecToggle(true)}
            onBlur={checkSecPassword}
          />
          {showSecToggle && !showSecPassword && (
            <i
              className="fa-solid fa-eye"
              id="toggle-secPassword-show"
              onClick={() => {
                setShowSecPassword(true);
              }}
            ></i>
          )}
          {showSecToggle && showSecPassword && (
            <i
              className="fa-solid fa-eye-slash"
              id="toggle-secPassword-hide"
              onClick={() => setShowSecPassword(false)}
            ></i>
          )}
          {!passwordsMatch && <p className="invalid">Passwords don't match</p>}
        </span>
        <p
          id="pass-requirements"
          className={`${
            (passwordsMatch && invalidPassword) ||
            (passwordsMatch && invalidSecPassword)
              ? "highlight-requirements"
              : ""
          }`}
        >
          Must contain at least 1 uppercase letter and a special character
        </p>
        <input
          type="submit"
          value="login now"
          id="login-button"
          disabled={submitDisabled ? true : false}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
