import "./Navbar.css";
import NotionalLogo from "../media/logo/notional.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div href="#" className="logo" style={{cursor: "pointer"}}>
        <img src={NotionalLogo} alt="Logo" />
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#Contribution">Contribution</a>
          </li>
          <li>
            <a href="#Delegate">Delegate</a>
          </li>
          <li>
            <a href="#Project">Projects</a>
          </li>
          <li>
            <a href="#Team">Team</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
