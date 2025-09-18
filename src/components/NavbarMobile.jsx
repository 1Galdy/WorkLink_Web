import './NavbarMobile.css';

//Logo image
import WorkLinkLogo from "../assets/WorkLink.jpg";

//Function téléchargement
import { download } from '../features/featureHome/utils/Nav';

//Navigation
import { NavLink, useLocation } from 'react-router-dom';

//Hook menu drop down
import NavbarMobileHook from '../hook/NavbarMobileHook';


export default function NavbarMobile(){
    return(
        <div className='containerNavMobile'>
            
            <NavbarMobileHook />
            
            <div className='containerImg'>
                <NavLink to="/">
                    <img src={WorkLinkLogo} alt="Logo WorkLink" />
                </NavLink>
            </div>
        </div>
    );
}

