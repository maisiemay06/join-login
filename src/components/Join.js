import { useState } from "react";
import warningIcon from "../imgs/warning.png";
import ValidateEmail from "./ValidateEmail";
import ValidatePassword from "./ValidatePassword";

export default function Join() {
  const [incorrectEmail, setIncorrectEmail] = useState(false); // If user enters a correct email but not one already used to sign up

  const [showToggle, setShowToggle] = useState(""); // Toggle show/hide paddwords icons
  const [showSecToggle, setShowSecToggle] = useState(""); // Toggle show/hide paddwords icons
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [validEmail, setValidEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailMissing, setEmailMissing] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const [validSecPassword, setValidSecPassword] = useState(false);
  const [invalidSecPassword, setInvalidSecPassword] = useState(false);
  const [secPasswordMissing, setSecPasswordMissing] = useState(false);

  function enableSubmit() {
    if (validEmail && validPassword && validSecPassword) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }

  function handleEmail(event) {
    let email = event.target.value;
    if (ValidateEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    enableSubmit();
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
    enableSubmit();
  }
  function handleSecPassword(event) {
    let password = event.target.value;
    if (ValidatePassword(password)) {
      setValidSecPassword(true);
    } else {
      setValidSecPassword(false);
    }
    enableSubmit();
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
  function checkSecPassword(event) {
    if (!event.target.value) {
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
            ${invalidEmail ? "invalid-entry" : ""}
            ${emailMissing ? "unfilled" : ""}`}
            id="email-input"
            required
            onChange={handleEmail}
            onBlur={checkEmail}
          />
          {invalidEmail && (
            <p className="invalid">
              please use a valid email <address></address>
            </p>
          )}
        </span>
        <span className="password-wrapper">
          <input
            type={showToggle === "hide" ? "text" : "password"}
            placeholder={`${
              passwordMissing ? "Password required" : "Password"
            }`}
            id="password"
            className={`user-input 
              ${invalidPassword ? "invalid-entry" : ""} 
              ${passwordMissing ? "unfilled" : ""}`}
            required
            minLength={6}
            onChange={handlePassword}
            onFocus={() => setShowToggle("show")}
            onBlur={checkPassword}
          />
          {showToggle === "show" && (
            <i
              className="fa-solid fa-eye"
              id="toggle-password-show"
              onClick={() => {
                setShowToggle("hide");
              }}
            ></i>
          )}
          {showToggle === "hide" && (
            <i
              className="fa-solid fa-eye-slash"
              id="toggle-password-hide"
              onClick={() => setShowToggle("show")}
            ></i>
          )}
        </span>
        <span className="password-wrapper">
          <input
            type={showSecToggle === "hide" ? "text" : "password"}
            placeholder={`${
              secPasswordMissing ? "Password required" : "Re-enter Password"
            }`}
            id="password"
            className={`user-input 
                ${invalidSecPassword ? "invalid-entry" : ""} 
                ${secPasswordMissing ? "unfilled" : ""}`}
            required
            minLength={6}
            onChange={handleSecPassword}
            onFocus={() => setShowSecToggle("show")}
            onBlur={checkSecPassword}
          />
          {showSecToggle === "show" && (
            <i
              className="fa-solid fa-eye"
              id="toggle-secPassword-show"
              onClick={() => {
                setShowSecToggle("hide");
              }}
            ></i>
          )}
          {showSecToggle === "hide" && (
            <i
              className="fa-solid fa-eye-slash"
              id="toggle-secPassword-hide"
              onClick={() => setShowSecToggle("show")}
            ></i>
          )}
        </span>
        <p id="pass-requirements">
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
