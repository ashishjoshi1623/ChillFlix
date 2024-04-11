import { useNavigate, Link, useLocation } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const page = location.pathname === '/login' ? true : false;

  const clickHandler = (e) => {
    e.preventDefault();
    page ? navigate('/register') : navigate('/login');
  }

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger" onClick={clickHandler}>{page ? 'Sign up' : 'New Account'}</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;