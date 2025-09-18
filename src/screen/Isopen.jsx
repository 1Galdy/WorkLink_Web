//Function téléchargement
import { download } from '../features/featureHome/utils/Nav';

//Navigation
import { NavLink, useLocation } from 'react-router-dom';

// Responsive css style
import '../style/Responsive.css';

export default function Isopen(){
      
    const location = useLocation();

    const isHomeActive = location.pathname === '/' || location.pathname === '/home';

    return(
        <>
            <div className="DownContainerNav">
                <div className='ongletNavMobile'>
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
                    <div className='containerDownload'>
                        <button onClick={download}>Télécharger</button>
                    </div>
                </div>
                {/* <div className='containerDownload'>
                    <button onClick={download}>Télécharger</button>
                </div> */}
            </div>
        </>
    );
}