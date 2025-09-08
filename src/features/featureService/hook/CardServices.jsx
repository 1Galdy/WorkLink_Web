import '../styles/ScreensPages.css';

//Import Icons
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function CardServices(){
    const icon = <CheckCircleOutlineOutlinedIcon />
    return(
        <div className='topPagesService'>

            <div className='flexService'>
                
                <div className='DetailsServices'>
                    <h1>{title}</h1>
                    <p>{details}</p>
                    <ul>
                        <li className="list-item">
                            <span className="icon">{icon}</span>
                            <span>{options}</span>
                        </li>
                        <li className="list-item">
                            <span className="icon">{icon}</span>
                            <span>{options}</span>
                        </li>
                        <li className="list-item">
                            <span className="icon">{icon}</span>
                            <span>{options}</span>
                        </li>
                        <li className="list-item">
                            <span className="icon">{icon}</span>
                            <span>{options}</span>
                        </li>
                    </ul>
                </div>

                <div className='ImageService'>
                    <img src={image} alt={description} />
                </div>

            </div>

        </div>
    );
}