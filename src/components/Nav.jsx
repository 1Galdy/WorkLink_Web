import './Navbar.css';

//Logo image
import WorkLinkLogo from "../assets/WorkLink.jpg";

//Function téléchargement
import { download } from '../features/featureHome/utils/Nav';

//Navigation
import { NavLink } from 'react-router';

export default function Navbar(){
    return(
        <>
            <div className='containerNav'>
                <div className='containerImg'>
                    <img src={WorkLinkLogo} alt="Logo WorkLink" />
                </div>
                <div className='containerOnglets'>
                    <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Accueil</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/services">Ce que nous proposons</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/tarifs">Tarifs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/contact">Contact</NavLink>
                </div>
                <div className='containerDownload'>
                    <button onClick={download}>Télécharger</button>
                </div>
            </div>
        </>
    );
} 