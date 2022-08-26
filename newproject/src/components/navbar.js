import logo from "../images/logo.png";

function onClick() {
  let navBar = document.getElementById("navbarNav");
  navBar.classList.remove("show");
}

export default function NavbarComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} height="50px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>onClick()} href="#new-arrivals">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>onClick()} href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>onClick()} href="#deal">
                  Deal of the day
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>onClick()} href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
