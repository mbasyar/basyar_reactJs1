const Navbar = ()=> (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/img/logo.jpg" alt="" className="me-3" width={30} height={24} />Rumah Kopi</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#">Beranda</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Menu</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Fasilitas</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Email" aria-label="Search" />
                <button className="btn btn-dark btn-sm" type="submit">Login</button>
              </form>
            </div>
          </div>
        </nav>
)
export default Navbar;