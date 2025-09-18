import '../styles/Tarifs.css';
 
//components
import CardPrix from '../components/CardPrix';

export default function TarifsScreen(){
    return(
        <div className='containerComponentTarif'>
            <h1>Nos Tarifications</h1>
            <div className='alignCard'>
                <CardPrix />
            </div>
        </div>
    ); 
}