import '../styles/ContactForm.css';

//Component
import HookForm from '../hook/HookForm';

export default function ContactForm(){
    return(
      <div className='ContactForm'>
            <div className='bgImage formTop'></div>

            <div className='containerForm formTop'>
                <HookForm />
            </div>
      </div>  
    );
} 