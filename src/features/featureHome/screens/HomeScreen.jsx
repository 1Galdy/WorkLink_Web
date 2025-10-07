import CardHome from "../components/Card";
import '../styles/HomeScreen.css'
import QuestionList from "../components/Questions";


export default function HomeScreen(){
    return(
        <>
            <div className="containerScreen spaceContainer">
                <div className="containerWelcome">
                    <h2>Bienvenue sur WorkLink</h2>
                    <p className="centerHome">Votre plateforme ultime pour les connexions professionnelles.</p>
                </div>
                <div className="containerCard">
                    <h1 className="screenH1">Les Membres de WorkLink</h1>
                    <CardHome />
                </div>
                <h1 className="screenH1 marginTop">Les questions fréquentes</h1>
                <QuestionList />
            </div>
        </>
    );
}
