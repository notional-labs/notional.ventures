import "./Navbar.css";
import NotionalLogo from "../media/logo/notional.png";

const Navbar = () => {
  return (
    <div className = "nav">
      <div className = "logo">
        <img src = {NotionalLogo} alt = "Logo" />
      </div>
      <nav className = "main-nav">
        <ul className = "main-nav-list">
          <li>
            <a href = "#">About Us</a>
          </li>
          <li>
            <a href = "#">Delegate</a>
          </li>
          <li>
            <a href = "#">Projects</a>
          </li>
          <li>
            <a href = "#">Infrastructure</a>
          </li>
          <li>
            <a href = "#">Team</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
