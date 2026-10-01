import { motion } from "framer-motion";
export default function Projects() {
  const isMobile = window.innerWidth < 768;
  const projects = [
  {
    title : "Application de recherche de stage",
    color: "bg-stone-500 p-4 rounded-xl shadow-lg shadow-stone-600",
    image : "/src/assets/applicationStage.png",
    nbPersons : "Projet de groupe (5 personnes)",
    languages : "React, Laravel, Tailwind CSS",
    contributions : ["Utilisation de l'API pour afficher les informations d'une entreprise", "Requête pour afficher le nombre d'étudiants ayant effectué leur stage dans l'entreprise"],
    description : "Cette application a été conçue pour répondre à la demande d'une cliente (fictive), souhaitant une application afin de faciliter la recherche de stage de ses étudiants.",
    link: "https://github.com/Z-1020/StageWebApp.git",
  },
  {
    title : "DungeonXplorer",
    color: "bg-stone-600 p-4 rounded-xl shadow-lg shadow-stone-700",
    image : "/src/assets/dungeonXplorer.png",
    nbPersons : "Projet de groupe (4 personnes)" ,
    languages : "PHP, HTML, CSS, JavaScript, Tailwind CSS",
    contributions : ["Affichage du profil", "Suppression du compte par l'utilisateur", "Modification des éléments du compte par l'utilisateur", "Gestion des combats en JavaScript"],
    description : "DungeonXplorer est un jeu développé en PHP, il est inspiré d'un « livre dont vous êtes le héros ». Le joueur peut gérer son compte, s'inscrire, se connecter et commencer une aventure.",
    link: "https://github.com/Z-1020/DungeonXplorer.git",
  },
  {
    title : "Gribouille",
    color: "bg-stone-700 p-4 rounded-xl shadow-lg shadow-stone-800",
    image : "/src/assets/gribouille.jpg",
    nbPersons : "Projet individuel",
    languages : "Java, JavaFX",
    contributions :["Gestion du tracé", "Changement de la taille du tracé", "Changement de couleur du tracé", "Affichage du tracé", "Sauvegarde du dessin"],
    description : "Gribouille est un logiciel de dessin réalisé en Java et en JavaFX. Il est possible de réaliser des dessins, de changer la couleur ou d'épaissir le tracé, ainsi que de sauvegarder le dessin.",
    link: "https://github.com/Z-1020/Gribouille.git",
  },
  {
    title : "Anime Requester",
    color: "bg-stone-800 p-4 rounded-xl shadow-lg shadow-stone-900",
    image : "src/assets/animeRequester.png",
    nbPersons : "Projet de groupe (3 personnes)",
    languages : "HTML, CSS, JavaScript",
    contributions : ["Mode sombre / mode clair", "Création du design avec CSS"],
    description : "L'Anime Requester est un site web qui, grâce à une API, permet de rechercher et d'afficher des résumés d'animés japonais. Il est possible de rechercher par genre, par nom, par classement ou par leur identifiant.",
    link: "https://github.com/Z-1020/AnimeRequester.git",
    viewLink: "https://Z-1020.github.io/AnimeRequester/",
  },
  {
    title : "Solo Pong",
    color: "bg-stone-900 p-4 rounded-xl shadow-lg shadow-stone-950",
    image : "src/assets/soloPong.png",
    nbPersons : "Projet de groupe (2 personnes)",
    languages : "HTML, CSS, JavaScript",
    contributions : ["Affichage du jeu", "Gestion des mouvements de la raquette"],
    description : "Solo Pong est un jeu inspiré de Pong, mythique jeu commercialisé en 1972. Le principe du jeu est de faire rebondir la balle sur la raquette et sur les murs. Si la balle touche le sol, vous perdez.",
    link: "https://github.com/Z-1020/pong.git",
    viewLink: "https://Z-1020.github.io/pong/",
  }
  ]
  const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, // délai entre chaque élément
    },
  },
};
  return (
    <main className="flex justify-center bg-stone-50 font-roboto">
      <div className="text-stone-50 w-3/4">
        <motion.article  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-6xl font-bold text-center text-stone-600 mt-30 mb-30 ">
            Projets
          </h1>
        </motion.article>
        <hr className="ml-10 mr-10 mt-30 mb-30 border-stone-500 border-3"></hr>
        {projects.map((section) => (
          <article key={section.title} className="mb-10">
            <motion.article  variants={container} initial="hidden" animate={isMobile ? "visible" : undefined} whileInView={!isMobile ? "visible" : undefined} viewport={{ once: true, amount: 0.2 }}>
              <div className= {section.color}>
                <h2 className="text-2xl md:text-4xl font-bold text-center p-4 md:p-10">{section.title}</h2>
                <p className="text-center text-center space-y-1 p-4 md:text-3xl text-l mb-4 ">{section.nbPersons}</p>
                <img src={section.image} className="mx-auto rounded-xl" alt="Capture d'écran "></img>
                <div className="md:flex md:flex-col p-4 md:p-4">
                  <h3 className="font-bold text-xl text-2xl md:text-4xl font-bold md:mt-4">Langages</h3>
                  <p className="space-y-1 mt-4 text-justify md:text-3xl text-l">
                    {section.languages}
                  </p>
                  <h3 className="font-bold text-xl text-2xl md:text-4xl font-bold mt-4">Description</h3>
                  <p className="space-y-1 text-justify md:text-3xl text-l mt-4">{section.description}</p> 
                  <h3 className="font-bold text-xl text-2xl md:text-4xl font-bold mt-4">Mes Contributions</h3>
                  <ul className="space-y-1 mt-4">
                    {section.contributions.map((realisation) =>(
                      <li className="list-disc ml-8 md:p-4 md:text-3xl text-l " key={realisation}>{realisation}</li>
                    ))}
                  </ul>
                  <h3 className="font-bold text-xl text-2xl md:text-4xl font-bold mt-4 mb-4">Lien vers les dépôts gitHub</h3>
                  <a href={section.link} className="underline hover:text-stone-300 text-justify md:text-3xl text-l mt-4">{section.link}</a>
                  {section.viewLink != null && ( 
                    <>
                      <h3 className="font-bold text-xl text-2xl md:text-4xl font-bold mt-4 mb-4">Visualiser le projet</h3> 
                      <a href={section.viewLink} className="underline hover:text-stone-300 text-justify md:text-3xl text-l mt-4">{section.viewLink}</a>
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          </article>
        ))}
      </div>
    </main>
  )
}