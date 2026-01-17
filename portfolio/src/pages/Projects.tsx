export default function Projects() {
  const projects = [
  {
    title : "Application de recherche de stage",
    image : "src/assets/applicationStage.png",
    nbPersonnes : ["Projet de groupe (5 personnes)"],
    langages : "React, Laravel",
    contributions : ["Utilisation de l'API pour afficher les informations d'une entreprise", "Requête pour afficher le nombre d'étudiant ayant fait leur stage dans l'entreprise"],
    description : "Cette application a été conçut pour répondre à la demande d'une cliente (fictive), qui demandé une application pour faciliter le recherche de stage de ses étudiants",
  },
  {
    title : "DungeonXplorer",
    image : "src/assets/dungeonXplorer.png",
    nbPersonnes : "Projet de groupe (4 personnes)" ,
    langages : "PHP, HTML, CSS, JavaScript, Tailwind CSS",
    contributions : ["Affichage du profil", "Suppression compte par l'utilisateur", "Modification des éléments du compte par l'utilisateur", "Gestion des combats en JavaScript"],
    description : "DungeonXplorer est un jeu développé en PHP, il est inspiré d'un << D'un Livre dont vous êtes le héros >>. Le projet a duré un mois ",
  },
  {
    title : "Gribouille",
    image : "src/assets/gribouille.jpg",
    nbPersonnes : "Projet réalisé seul",
    langages : "Java, JavaFX",
    contributions :["Gestion du tracé", "Changement de la taille du tracé", "Changement de couleur du tracé", "Affichage du tracé", "Sauvegarde du dessin"],
    description : "Gribouille est un logiciel de dessin réalisé en JavaFX et en Java, il est possible, de réaliser des dessins, de changer la couleur ou d'épaissir le tracé, et de sauvegarder le dessin",
  },
  {
    title : "Anime Requester",
    image : "src/assets/animeRequester.png",
    nbPersonnes : "Projet de groupe (3 personnes)",
    langages : "HTML, CSS, JavaScript",
    contributions : ["Mode sombre/ mode claire", "style en CSS"],
    description : "L'anime requester est un site web qui grâce à une API permet de rechercher et d'afficher des résumés d'animés japonais. Il est possible de rechercher par genre, par nom, par classement ou par leur identifiant",
  },
  {
    title : "Solo Pong",
    image : "src/assets/soloPong.png",
    nbPersonnes : "Projet de groupe (2 personnes)",
    contributions : ["Affichage du jeu", "Gestion des mouvements de la barre"],
    description : "Solo Pong est un jeu inspiré de Pong mythique jeu développé fin des années 70. Le principe de Solo Pong est de faire rebondir la balle sur la raquette et sur les mur, si la balle touche le sol, vous avez perdu."
  }
  ]
  return (
    <main className="min-h-screen h-full flex justify-center bg-blue-950 font-roboto">
      <div className="h-full w-3/4 bg-blue-900 rounded-xl mt-20 mb-20 ml-8 mr-8 ">
      <div className="text-stone-50">
      <h1 className="text-5xl font-bold text-center m-8">
        Projets
      </h1>
      {projects.map((section) => (
          <article key={section.title} className="mb-10">
           
            <h2 className="text-3xl md:ml-10 md:mr-10 md:mb-4 font-bold text-center md:text-start">
           
              {section.title}
             
            </h2>
            
            <ul className="space-y-1 ml-10 mr-10 mb-4">
              <li className="text-center md:text-start">{section.nbPersonnes}</li>
            </ul>
            <div className="md:flex">
            <img src={section.image} className="mx-auto w-full max-w-md sm:max-w-lg md: w-10/11 p-2 md:pl-10 md:pr-6" alt="Capture d'écran"></img>
                <div className="md:flex md:flex-col">
            <h3 className="font-bold text-xl ml-2 mr-2 mb-2">Langages</h3>
            <ul className="space-y-1 m-2">
              {section.langages}
              </ul>
             
                <h3 className="font-bold text-xl m-2">Description</h3>
                <ul className="space-y-1 m-2">
                    <li className="">{section.description} </li> 
                  </ul>
              
                  <h3 className="font-bold text-xl m-2">Mes Contributions</h3>
                  <ul className="space-y-1 ml-6 mr-2 mt-2 mb-2">
              {section.contributions.map((realisation) =>(
                <li className="list-disc" key={realisation}>{realisation}</li>
              ))}
            
            </ul>
            </div>
            </div>
          </article>
        ))}
        
      </div>
      </div>
      </main>
  )
}