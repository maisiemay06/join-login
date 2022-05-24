export default function SocialLogin({ action }) {
  return (
    <div className={`alt-login ${action}`}>
      <div className="socials">
        <div className="li-login social-button ">
          <i className="fa-brands fa-linkedin-in"></i>
          <a href="">{action} with LinkedIn</a>
          <div className="spacer"></div>
        </div>

        <div className="g-login social-button">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            className="g-logo"
          />
          <a href="">{action} with Google</a>
          <div className="spacer"></div>
        </div>
        <div className="fb-login social-button">
          <i className="fa-brands fa-facebook"></i>
          <a href="">{action} with Facebook</a>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
}
