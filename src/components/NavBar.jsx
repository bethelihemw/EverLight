import logo from  '../assets/logo.png';
import '../index.css';


function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon"><img src={logo} alt="" /></div>
        <div className="logo-text">
          <span className="brand-title">EVERLIGHT</span>
          <span className="brand-subtitle">ACADEMY</span>
        </div>
      </div>
      
      <nav className="navbar-links">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#programs" className="nav-link">Programs</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

    </header>
  );
}

export default NavBar;