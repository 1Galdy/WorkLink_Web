import '../styles/ScreensPages.css';

//Hook card pages politique
import CardServices from "../hook/CardServices";

export default function PerformanceScreen(){

    const datas = 
            {
                title: "La sécurité pour WorkLink",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nam non, veritatis ex? Hic, dolore minima. Temporibus distinctio cum debitis praesentium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nam non, tempora odio laudantium temporibus unde consequuntur mollitia inventore ducimus, veritatis ex? Hic, dolore minima.",
                image: "/Performance.jpg",
                list: [
                      {options: "Option une" },
                      {options: "Option deux" },
                      {options: "Option trois" },
                      {options: "Option quatre" }
                ],
                description: "Icon sécurité",
            };
    
        return(
            <>
            <CardServices title={datas.title} details={datas.details} options={datas.list} image={datas.image} description={datas.description}/>
            </>
        );
} 