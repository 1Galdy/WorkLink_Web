// import '../styles/ScreensPages.css';

//Import Icons
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function CardServices({title, details, options, image, description}){
    const icon = <CheckCircleOutlineOutlinedIcon />
    return(
        <div className='topPagesService'>

            <div className='flexService'>
                
                <div className='DetailsServices'>
                    <h1>{title}</h1>
                    <p>{details}</p>
                    <ul>
                        {options.map((opt, index) => (
                            <li className="list-item" key={index}>
                                <span className="icon">{icon}</span>
                                <span>{opt.options}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='ImageService'>
                    <img src={image} alt={description} />
                </div>

            </div>

        </div> 
    );
}