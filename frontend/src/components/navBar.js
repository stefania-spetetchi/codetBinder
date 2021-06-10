function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-center">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-3 mt-lg-0" href="#"></a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="/">
                  <button><strong>Home</strong></button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/closet">
                  <button>Closet</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/outfits">
                  <button>Outfits</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/calendar">
                  <button>Calendar</button>
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center"></div>
        </div>
      </nav>
  )
}

export default NavBar;