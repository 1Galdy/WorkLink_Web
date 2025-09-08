import '../styles/hookForm.css';

export default function HookForm(){

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return(
        <div className='formulaire'>
            <h2>Envoyer-nous un message</h2>
                <form onSubmit={sendMessage}>
                    <div className='containerInput'>
                        <section>
                            <label htmlFor="prenom">Ton nom</label>
                            <input type='text' name='nom' id='prenom' placeholder='Ton nom' />
                        </section>
                        <section>
                            <label htmlFor="nom">Ton prénom</label>
                            <input type='text' name='nom' id='nom' placeholder='Ton prénom' />
                        </section>
                    </div>
                        
                    <label htmlFor="subjet">Sujet</label>
                    <input type='text' name='nom' id='subjet' placeholder='Sujet' />
                    <label htmlFor='message'>Écrivez votre message</label>
                    <textarea name="texte" id="message" cols="30" rows="10" placeholder='Écrivez votre message...'></textarea>
                    <button type='submit'>Envoyer</button>
                    
                </form>
        </div>
    );
}