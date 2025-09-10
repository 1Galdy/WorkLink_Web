//Les pages screen
import Home from "../features/featureHome/Home";
import Service from "../features/featureService/Services";
import Tarifs from "../features/featureTarifs/Tarifs";
import Contact from "../features/featureContact/Contact";

export default function Index(){
    return(
        <div className="spaceContainer">
            <Home />
            <Service />
            <Tarifs />
            <Contact />
        </div>
    );
}