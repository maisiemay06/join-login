import { useState } from "react";
import Join from "./Join";
import Login from "./Login";
import SocialLogin from "./SocialLogin";

export default function JoinLoginCard({ pageTitle, setPageTitle }) {
  return (
    <div className="card">
      {/* Join/Login Buttons */}
      <div className="page-nav">
        <div
          className={`tab ${pageTitle === "join" ? "active" : "inactive"}`}
          onClick={() => setPageTitle("join")}
        >
          join
        </div>
        <div
          className={`tab ${pageTitle === "login" ? "active" : "inactive"}`}
          onClick={() => setPageTitle("login")}
        >
          login
        </div>
      </div>
      {/* Login Page */}
      {pageTitle === "login" && <Login />}
      {pageTitle === "login" && <SocialLogin action={"Login"} />}

      {/* Join Page */}
      {pageTitle === "join" && <SocialLogin action={"Join"} />}
      {pageTitle === "join" && <Join />}
    </div>
  );
}
