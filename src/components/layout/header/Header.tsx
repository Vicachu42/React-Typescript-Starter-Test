import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <h3 className='navbar-brand'>Pablo's Sportsbar</h3>
        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/dishscreen">Menu</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/sportsscreen">Sports Selection</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
