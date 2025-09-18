import './Navbar.css';

//Logo image
import WorkLinkLogo from "../assets/WorkLink.jpg";

//Function téléchargement
import { download } from '../features/featureHome/utils/Nav';

//Navigation
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isHomeActive = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className='containerNav'>
      <div className='containerImg'>
        <NavLink to="/">
          <img src={WorkLinkLogo} alt="Logo WorkLink" />
        </NavLink>
      </div>
      <div className='containerOnglets'>
        <NavLink
          to="/home"
          className={isHomeActive ? 'nav-link active-link' : 'nav-link'}
        >
          Accueil
        </NavLink>
        <NavLink
  to="/services"
  className={({ isActive }) =>
    `nav-link ${isActive ? "active-link" : ""} custom-class`
  }
>
  Ce que nous proposons
</NavLink>

        <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/tarifs">Tarifs</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/contact">Contact</NavLink>
      </div>
      <div className='containerDownload'>
        <button onClick={download}>Télécharger</button>
      </div>
    </div>
  );
}
