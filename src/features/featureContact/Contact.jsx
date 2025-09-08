import ContactInfos from "./components/ContactInfos";
import ContactForm from "./components/ContactForm";

export default function Contact(){
    return(
        <>
            <div className="spaceContainer">
                <div style={{textAlign: "center", marginTop: '8%'}}>
                    <h1>Contact</h1>
                    <p>Vous rencontrez une difficulté ? Dites-nous tout !</p>
                </div>
                <ContactInfos />
                <ContactForm />
            </div>
        </>
    );
}