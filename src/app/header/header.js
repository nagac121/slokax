import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = { variable: "font-inter" };

export const Header = ({ onHomeClick }) => (
  <header className={`header ${inter.variable}`}>
    <i className="fas fa-home home-icon" onClick={onHomeClick}></i>
    <div className="header-text">Header</div>
  </header>
);
export default Header;
