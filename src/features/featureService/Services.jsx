import './styles/Services.css';

//Components
import Politique from './components/Politique';
import StatistiqueScreen from './screens/StatistiqueScreen';

export default function Service(){
    return(
        <>
            <div className="spaceContainer">
                <Politique />
                <StatistiqueScreen />
            </div>
        </>
    );
}