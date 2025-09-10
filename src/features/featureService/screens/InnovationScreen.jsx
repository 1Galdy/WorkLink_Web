import '../styles/ScreensPages.css';

//Hook card pages politique
import CardServices from "../hook/CardServices";

export default function InnovationScreen(){

    const datas = 
        {
            title: "Innovation WorkLink",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nam non, veritatis ex? Hic, dolore minima. Temporibus distinctio cum debitis praesentium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nam non, tempora odio laudantium temporibus unde consequuntur mollitia inventore ducimus, veritatis ex? Hic, dolore minima.",
            image: "/Innovation.jpg",
            list: [
                  {options: "Option une" },
                  {options: "Option deux" },
                  {options: "Option trois" },
                  {options: "Option quatre" }
            ],
            description: "Icon Innovation",
        };

    return(
        <>
        <CardServices title={datas.title} details={datas.details} options={datas.list} image={datas.image} description={datas.description}/>
        </>
    );
}