export default function Projects() {
  const projects = [
  {
    title : "Application de recherche de stage",
    image : "src/assets/applicationStage.png",
    nbPersonnes : ["Projet de groupe (5 personnes)"],
    langages : "React, Laravel, Tailwind CSS",
    contributions : ["Utilisation de l'API pour afficher les informations d'une entreprise", "Requête pour afficher le nombre d'étudiants ayant fait leur stage dans l'entreprise"],
    description : "Cette application a été conçue pour répondre à la demande d'une cliente (fictive), souhaitant une application pour faciliter la recherche de stage de ses étudiants.",
    lien: "https://github.com/Briiice3R/StageWebApp.git",
  },
  {
    title : "DungeonXplorer",
    image : "src/assets/dungeonXplorer.png",
    nbPersonnes : "Projet de groupe (4 personnes)" ,
    langages : "PHP, HTML, CSS, JavaScript, Tailwind CSS",
    contributions : ["Affichage du profil", "Suppression du compte par l'utilisateur", "Modification des éléments du compte par l'utilisateur", "Gestion des combats en JavaScript"],
    description : "DungeonXplorer est un jeu développé en PHP, il est inspiré inspiré d'un « livre dont vous êtes le héros ». Le joueur peut gérer son compte, s'inscrire, se connecter, commencer une aventure.",
    lien: "https://github.com/Briiice3R/DungeonXplorer.git",
  },
  {
    title : "Gribouille",
    image : "src/assets/gribouille.jpg",
    nbPersonnes : "Projet réalisé seul",
    langages : "Java, JavaFX",
    contributions :["Gestion du tracé", "Changement de la taille du tracé", "Changement de couleur du tracé", "Affichage du tracé", "Sauvegarde du dessin"],
    description : "Gribouille est un logiciel de dessin réalisé en Java et en JavaFX. Il est possible de réaliser des dessins, de changer la couleur ou d'épaissir le tracé, ainsi que de sauvegarder le dessin.",
    lien: "https://github.com/Z-1020/Gribouille.git",
  },
  {
    title : "Anime Requester",
    image : "src/assets/animeRequester.png",
    nbPersonnes : "Projet de groupe (3 personnes)",
    langages : "HTML, CSS, JavaScript",
    contributions : ["Mode sombre / mode clair", "Création du design avec CSS"],
    description : "L'Anime Requester est un site web qui, grâce à une API, permet de rechercher et d'afficher des résumés d'animés japonais. Il est possible de rechercher par genre, par nom, par classement ou par leur identifiant.",
    lien: "https://github.com/Jaysoooooon/AnimeRequester.git",
    lienVisualisation: "https://jaysoooooon.github.io/AnimeRequester/",
  },
  {
    title : "Solo Pong",
    image : "src/assets/soloPong.png",
    nbPersonnes : "Projet de groupe (2 personnes)",
    langages : "HTML, CSS, JavaScript",
    contributions : ["Affichage du jeu", "Gestion des mouvements de la barre."],
    description : "Solo Pong est un jeu inspiré de Pong, mythique jeu commercialisé en 1972. Le principe de Solo Pong est de faire rebondir la balle sur la raquette et sur les murs. Si la balle touche le sol, vous perdez.",
    lien: "https://github.com/DarkNatha008/pong.git",
    lienVisualisation: "https://darknatha008.github.io/pong/",
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
           
            <h2 className="text-3xl md:ml-4 md:mr-4 md:mb-4 font-bold text-center md:text-start">{section.title}</h2>
            <p className="text-center md:text-start space-y-1 ml-4 mr-4 mb-4">{section.nbPersonnes}</p>
            <div className="md:flex">
            <img src={section.image} className="w-full h-auto p-4" alt="Capture d'écran"></img>
                <div className="md:flex md:flex-col">
            <h3 className="font-bold text-xl m-2">Langages</h3>
            <p className="space-y-1 m-2 ">
              {section.langages}
              </p>
             
                <h3 className="font-bold text-xl m-2">Description</h3>
                    <p className="space-y-1 m-2">{section.description}</p> 
                
              
                  <h3 className="font-bold text-xl m-2">Mes Contributions</h3>
                  <ul className="space-y-1 ml-6 mr-2 mt-2 mb-2">
              {section.contributions.map((realisation) =>(
                <li className="list-disc" key={realisation}>{realisation}</li>
              ))}
            
            </ul>
            <h3 className="font-bold text-xl m-2">Lien vers les dépôts gitHub</h3>
              <a href={section.lien} className="underline hover:text-stone-300 space-y-1 m-2">{section.lien}</a>
           
            {section.lienVisualisation != null && ( 
              <>
            <h3 className="font-bold text-xl m-2">Visualiser le projet</h3> 
            <a href={section.lienVisualisation} className="underline hover:text-stone-300 space-y-1 m-2">{section.lienVisualisation}</a>
            </>
            )}

            
            
            </div>
            </div>
          </article>
        ))}
        
      </div>
      </div>
      </main>
  )
}