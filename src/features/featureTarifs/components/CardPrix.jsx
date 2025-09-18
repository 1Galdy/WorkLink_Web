import '../styles/CardPrix.css';
 
export default function CardPrix(){

    const forfaits = [
        {
            id: 1,
            plan: "Plan Gratuit",
            prix: "0 € / mois",
            service1: "✅ Accès de base à la plateforme",
            service2: "✅ Accès au offres d'emplois",
            service3: "✅ Chat sous conditions",
            service4: "❌ Pas de coatching",
            service5: "❌ Pas de suivie",
            service6: "❌ Pas de profil certifié",
        },
        {
            id: 2,
            plan: "Plan Affaires",
            prix: "30 € / mois",
            service1: "✅ Tous les services du plan Gratuit",
            service2: "✅ Profil certifié",
            service3: "✅ Coatching et accompagnement",
            service4: "✅ Suivie et aide jusqu'au contrat",
            service5: "❌ Session personnalisé",
            service6: "❌ Mise en relation entreprises",
        },
        {
            id: 3,
            plan: "Plan Or",
            prix: "90 € / mois",
            service1: "✅ Tous les services du plan Affaires",
            service2: "✅ Recommandation des profil",
            service3: "✅ Mise en relation entreprises",
            service4: "✅ Mise à niveau des profils",
            service5: "✅ Evaluation des compétences",
            service6: "✅ Orientation et conseil",
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