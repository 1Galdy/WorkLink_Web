import '../styles/StatistiquesScreen.css';

//Icons components
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

//Components
import Statistiques from '../components/Statistiques';

export default function StatistiqueScreen({id, icon, alt, number, texte, more}){

    const datas = [
        {
            id: 1,
            icon: <HandshakeOutlinedIcon sx={{ fontSize: 60, color: 'rgb(0, 92, 69)', }} />,
            alt: "Icon Handshake",
            number: 185,
            texte: "Entreprises partenaires",
            more: [
                {
                    id: 1,
                    img: "/airtel.svg",
                    alt: "Icon entreprise 1",
                },
                {
                    id: 2,
                    img: "/mtn.svg",
                    alt: "Icon entreprise 2",
                },
                {
                    id: 3,
                    img: "/ecole.svg",
                    alt: "Icon entreprise 3",
                },
                {
                    id: 4,
                    img: "/nike.svg",
                    alt: "Icon entreprise 3",
                },
            ],
        },
        {
            id: 2,
            icon: <PeopleAltOutlinedIcon sx={{ fontSize: 60, color: 'rgb(0, 92, 69)', }} />,
            alt: "Icon People",
            number: "2.5K",
            texte: "Utilisateurs de WorkLink",
        },
        {
            id: 3,
            icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 60, color: 'rgb(0, 92, 69)', }} />,
            alt: "Icon Work",
            number: 500,
            texte: "Emplois décrochés",
        },
    ]

    return(
        <div className='containerStatistique'>

            <h2>Nos statistiques</h2>

            <div className='importCard'>
                {datas.map(item => (
                    <Statistiques id={item.id} icon={item.icon} alt={item.alt} number={item.number} text={item.texte} more={item.more} />
                ))}
            </div>
        </div>
    );
}