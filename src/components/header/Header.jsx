import "./header.css";

function Header({ onResumeClick }) {
  return (
    <header>
      <div>
        <h1>CESAR LARRINAGA</h1>
        <h2>WEB & MOBILE DEVELOPER WITH ENGINEERING BACKGROUND</h2>
      </div>
      <nav>
        <button>About</button>
        <button>Projects</button>
        <button className="resume-button" onClick={onResumeClick}>
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
