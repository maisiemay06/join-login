import Join from "./Join";
import Login from "./Login";
import SocialLogin from "./SocialLogin";

export default function JoinLoginCard({ pageTitle, setPageTitle }) {
  return (
    <div className="card">
      {/* Join/Login Buttons */}
      <div className="page-nav">
        <div
          className={`tab ${pageTitle === "Signup" ? "active" : "inactive"}`}
          onClick={() => setPageTitle("Signup")}
        >
          signup
        </div>
        <div
          className={`tab ${pageTitle === "Login" ? "active" : "inactive"}`}
          onClick={() => setPageTitle("Login")}
        >
          login
        </div>
      </div>
      {pageTitle === "Login" ? (
        <h3 className="card-title" id="login-social">
          login with...
        </h3>
      ) : (
        <h3 className="card-title" id="join-social">
          signup for free now
        </h3>
      )}

      <SocialLogin action={pageTitle} />

      {pageTitle === "Login" ? <Login /> : <Join />}
    </div>
  );
}
