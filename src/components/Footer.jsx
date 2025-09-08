import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
    return(
        <div className='containerFooter'>
            <div className='containerInfos'>
                <div className='contentReaseaux'>
                    <div className='textWorkLink'>
                        <p>WorkLink est une plateforme professionnelle conçue pour présenter ses services et se connecter avec tout types de profils afin de répondre efficacement à leur besoin</p>
                    </div>
                    <div className='contentIcons'>
                        <section>
                            <LinkedInIcon />
                        </section>
                        <section>
                            <InstagramIcon />
                        </section>
                        <section>
                            <FacebookIcon />
                        </section>
                    </div>
                </div>
                <div className='containerServices'>
                    <div>
                        <h3>Navigation</h3>
                        <p>Accueil</p>
                        <p>Ce que nous proposons</p>
                        <p>Tarifs</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <p>Innovation</p>
                        <p>Sécurité</p>
                        <p>Performance</p>
                        <p>Support</p>
                    </div>
                    <div>
                        <h3>Entreprise</h3>
                        <p>Membres</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}