import '../styles/ScreensPages.css';

//Import Icons
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function InnovationScreen(){
    const datas = [
        {
            id: 1,
            title: "Innovation WorkLink",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nam non, tempora odio laudantium temporibus unde consequuntur mollitia inventore ducimus, veritatis ex? Hic, dolore minima. Temporibus distinctio cum debitis praesentium?",
            image: "../../../../public/Innovation.jpg",
            list: [
                  { id: 1, icon: <CheckCircleOutlineOutlinedIcon />, options: "Option une" },
                  { id: 2, icon: <CheckCircleOutlineOutlinedIcon />, options: "Option deux" },
                  { id: 3, icon: <CheckCircleOutlineOutlinedIcon />, options: "Option trois" },
                  { id: 4, icon: <CheckCircleOutlineOutlinedIcon />, options: "Option quatre" }
            ],
        }
    ]
    return(
        <div className='topPagesService'>
            {datas.map(item => (
            <div key={item.id} className='flexService'>
                
                <div className='DetailsServices'>
                    <h1>{item.title}</h1>
                    <p>{item.details}</p>
                    <ul>
                        {item.list.map((puce) => (
                            <li key={puce.id} className="list-item">
                            <span className="icon">{puce.icon}</span>
                            <span>{puce.options}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='ImageService'>
                    <img src={item.image} alt={item.title} />
                </div>

            </div>
            ))}
        </div>
    );
}