import '../styles/Politique.css';

//Hook
import PolitiqueHook from '../hook/PolitiqueHook';

export default function Politique(){
    return(
        <div className='containerPolitique'>
            <h1>Ce que nous proposons</h1>
            <PolitiqueHook />
        </div>
    );
}