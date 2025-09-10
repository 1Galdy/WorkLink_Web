import '../styles/Statistiques.css';

export default function Statistiques({id, icon, alt, number, text, more}){
    return(
        <div key={id} alt={alt} className='borderContainer'>
            <div className='contentCenter'>
                {icon}
                <h3>{number}</h3>
                <p>{text}</p>
            </div>
            <div className='MoreIcons'>
                {more?.map(picture => (
                    <img key={picture.id} src={picture.img} alt={picture.alt} />
                ))}
            </div>
        </div>
    );
}