import '../styles/ContactInfos.css';

//Les icones
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

export default function ContactForm(){

    const location = [
        {
            id: 1,
            icon: <LocationOnOutlinedIcon />,
            titre: "Location",
            infos: "France, Ile de France, Lille 59350",
        },
        {
            id: 2,
            icon: <MarkunreadOutlinedIcon />,
            titre: "Email",
            infos: "worklink@gmail.com",
        },
        {
            id: 3,
            icon: <LocalPhoneOutlinedIcon />,
            titre: "Contact",
            infos: "+33 7 01 23 45 68",
        },
        {
            id: 4,
            icon: <WatchLaterOutlinedIcon />,
            titre: "Horaires",
            infos: "Du lundi au Dimanche, de 08h à 23h 30",
        },
    ]

    return(
        <div className='ContainerContact infosTop'>
            {location.map(item => (
                <div className='CardContact' key={item.id}>
                    <section style={{color: "rgb(75, 109, 114)"}}>{item.icon}</section>
                    <h1>{item.titre}</h1>
                    <p className='fontSize'>{item.infos}</p>
                </div>
            ))}
        </div>
    );
}