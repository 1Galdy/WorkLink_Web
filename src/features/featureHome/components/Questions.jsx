//Utilisation des Hooks
import { useState } from 'react';

//Mon CSS
import '../styles/Questions.css';

//Icons 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function QuestionList(){

    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

    const questions = [
        {
            id: 1,
            question: "Qu'est-ce que WorkLink",
            instruction: "WorkLink est une plateforme qui a pour objectif de mettre en relation des particulier curieux, déterminés, talentieux avec des entreprises à la recherche de nouveau profil à former ou pour une nouvelle opportunité",
        },
        {
            id: 2,
            question: "Comment puis-je créer un compte",
            instruction: "Il vous faut tout d'abord télécharger l'application Worklink, puis une fois installer vous pourrez vous créer un compte et accéder à tous nos services",
        },
        {
            id: 3,
            question: "WorkLink est-il gratuit",
            instruction: "Oui et Non, Worklink dispose de services gratuits et de services payant parmis les services gratuit on peut citer : l'accès aux offre, postuler, échanger et avoir des informations sur les entreprises. Et pour les services payant on retrouve l'accompagnement, l'aide au entretient, le suivi et le coatching de nos clients",
        },
        {
            id: 4,
            question: "WorkLink est il disponible sur les Stores ?",
            instruction: "Etant donnée, que ce sont les début de la plateforme l'application WorkLink n'est disponible que via notre site web et uniquement pour la plateforme android pour le moment",
        },
        {
            id: 5,
            question: "Comment contacter le support",
            instruction: "Vous avez toutes les informations  et coordonnées au niveau de la barre tout en bas du site mais aussi au niveau de l'onglet contact où vous avez des informations aisni qu'un formulaire de contact",
        },
    ]

    return (
    <div className='marginTop'>
      {questions.map((item) => (
        <div className="questionListe" key={item.id}>
          <div
            className="summaryRow"
            onClick={() => toggle(item.id)}
          >
            <span>{item.question}</span>
            <KeyboardArrowRightIcon
              style={{
                transform: openId === item.id ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
          {openId === item.id && (
            <p className="instruction">{item.instruction}</p>
          )}
        </div>
      ))}
    </div>
  );
}
