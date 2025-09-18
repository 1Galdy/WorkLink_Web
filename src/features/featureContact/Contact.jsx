import ContactInfos from "./components/ContactInfos";
import ContactForm from "./components/ContactForm";

// Style css
import './styles/Contact.css';

export default function Contact(){
    return(
        <>
            <div className={"spaceContainer"}>
                <div style={{textAlign: "center", marginTop: '8%'}}>
                    <h1>Contact</h1>
                    <p>Vous rencontrez une difficulté ? Dites-nous tout !</p>
                </div>
                <div className="ScreenContact">
                    <ContactInfos />
                    <ContactForm />
                </div>
            </div>
        </>
    );
}