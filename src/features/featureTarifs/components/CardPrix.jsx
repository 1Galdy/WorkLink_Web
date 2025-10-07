import '../styles/CardPrix.css';

// Mes icons
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
 
export default function CardPrix(){

    const forfaits = [
        {
            id: 1,
            plan: "Plan Gratuit",
            prix: "0 € / mois",
            service1: (
                <>
                    <DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />
                    Accès de base à la plateforme
                </>
            ),
            service2: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Accès au offres d'emplois</>),
            service3: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Chat sous conditions</>),
            service4: (<><CloseIcon style={{ color: 'rgb(239, 68, 68)'  }} />Pas de coatching</>),
            service5: (<><CloseIcon style={{ color: 'rgb(239, 68, 68)' }} />Pas de suivie</>),
            service6: (<><CloseIcon style={{ color: 'rgb(239, 68, 68)' }} />Pas de profil certifié</>),
        },
        {
            id: 2,
            plan: "Plan Affaires",
            prix: "30 € / mois",
            service1: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Tous les services du plan Gratuit</>),
            service2: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Profil certifié</>),
            service3: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Coatching et accompagnement</>),
            service4: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Suivie et aide jusqu'au contrat</>),
            service5: (<><CloseIcon style={{ color: 'rgb(239, 68, 68)' }} />Session personnalisé</>),
            service6: (<><CloseIcon style={{ color: 'rgb(239, 68, 68)' }} />Mise en relation entreprises</>),
        },
        {
            id: 3,
            plan: "Plan Or",
            prix: "90 € / mois",
            service1: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Tous les services du plan Affaires</>),
            service2: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Recommandation des profil</>),
            service3: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Mise en relation entreprises</>),
            service4: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Mise à niveau des profils</>),
            service5: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Evaluation des compétences</>),
            service6: (<><DoneIcon style={{ color: 'rgb(34, 197, 94)' }} />Orientation et conseil</>),
        },
    ]

    return( 
        <>
            {forfaits.map(item => (
                <div className='ContainerCardPrix'>
                    <div key={item.id} className='contentCard'>
                        <section className='sectionForfaits'>
                            <h2>{item.plan}</h2>
                            <h1>{item.prix}</h1>
                            <ul>
                                <li>{item.service1}</li>
                                <li>{item.service2}</li>
                                <li>{item.service3}</li>
                                <li>{item.service4}</li>
                                <li>{item.service5}</li>
                                <li>{item.service6}</li>
                            </ul>
                        </section>
                        <section className='sectionButton'>
                            <button>S'abonner sur l'application</button>
                        </section>
                    </div>
                </div>
            ))}
        </>
    );
}