import { Link } from "react-router-dom";
import "./Navbar.css";

export const Logo = () => {
  return (
    <Link className=" nav-link kp-logo" to="/">
      <span id="kp-logo-up">Kaospilot</span>toolbox
    </Link>
  );
};
