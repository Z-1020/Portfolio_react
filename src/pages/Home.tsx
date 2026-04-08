import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Home() {
   const projects = [
  {
    title : "Application de recherche de stage",
    color: "bg-stone-600 p-4 w-3/4 mx-auto rounded-xl shadow-lg shadow-stone-700",
    image : "src/assets/applicationStage.png",
    description : "Cette application a été conçue pour répondre à la demande d'une cliente (fictive), souhaitant une application afin de faciliter la recherche de stage de ses étudiants.",
  },
  {
    title : "DungeonXplorer",
    color: "bg-stone-700 p-4 w-3/4 rounded-xl mx-auto shadow-lg shadow-stone-800",
    image : "src/assets/dungeonXplorer.png",
    description : "DungeonXplorer est un jeu développé en PHP, il est inspiré d'un « livre dont vous êtes le héros ». Le joueur peut gérer son compte, s'inscrire, se connecter et commencer une aventure.",
    
  },
]
  const isMobile = window.innerWidth < 768;
  const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, // délai entre chaque élément
    },
  },
};


const navigate = useNavigate();
  return (
    <main className="min-h-screen font-roboto text-stone-50 ">
      <motion.article  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="bg-stone-800/95 mt-30 ml-5 w-30/100">
        <h1 className="md:text-xl font-bold text-center  ">
          Zoé Margerie
        </h1>
        <motion.article  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <h2 className=" md:text-xl font-bold text-center">Étudiante en deuxième année de BUT Informatique</h2>
      </motion.article>
        </div>
        <div className="bg-stone-800/95 mt-30 ml-5 w-30/100">
          <p>Développeuse web créative et ambitieuse</p>
        </div>
      </motion.article>
      
      <hr className="ml-10 mr-10 mt-30 mb-30 border-stone-500 border-3"></hr>
      <motion.article  variants={container} initial="hidden" animate={isMobile ? "visible" : undefined} whileInView={!isMobile ? "visible" : undefined} viewport={{ once: true, amount: 0.2 }}>
        <div className="bg-stone-500 rounded-xl shadow-lg w-3/4 md:p-10 mx-auto shadow-stone-600 mb-30 text-stone-50">
          <h3 className="font-bold text-xl text-2xl md:text-4xl font-bold p-2 md:p-4 text-center text-stone-50">Stage développement web ou développement logiciel de 8 semaines.</h3>
            <div className="flex flex-col md:justify-center text-stone-50 m-4 md:m-8">
              <p className="md:p-4 text-justify md:text-3xl text-l m-4">Étudiante en deuxième année de BUT Informatique, je suis intéressée par le développement web et le développement logiciel.
                Curieuse et créative, j'aime apprendre de nouvelles technologies et les utiliser pour les projets.
                Je recherche un stage de développement web ou de développement logiciel de 8 à 10 semaines à partir du 7 avril 2026.
              </p>
            <div className="flex gap-10 flex-col md:justify-center md:flex-row m-4">
              <div className="border border-5 rounded-xl p-4">
                <h3 className="font-bold text-xl text-center text-2xl md:text-4xl font-bold p-2 text-stone-50">Soft Skills</h3>
                <ul className=" md:text-3xl text-l text-center md:ml-4">
                  <li>Persévérante</li>
                  <li>Créative</li>
                  <li>Esprit d'équipe</li>
                  <li>Curieuse</li>
                </ul>
              </div>
              <div className="border border-5 rounded-xl p-4">
                <h3 className="font-bold text-xl text-center text-2xl md:text-4xl font-bold p-4 text-stone-50">Langues</h3>
                <ul className="md: md:text-3xl text-center text-l md:ml-4 ">
                  <li>Anglais</li>
                  <li>Espagnol</li>
                  <li>Japonais</li>
                </ul>
              </div>
              <div className="border border-5 rounded-xl p-4">
                <h3 className="font-bold text-xl text-center text-2xl md:text-4xl font-bold p-4 text-stone-50">Compétences</h3>
                <ul className="md: md:text-3xl text-center text-l md:ml-4 ">
                  <li>Front-end: HTML / CSS / Javascript</li>
                  <li>Back-end: PHP / Java </li>
                  <li>Frameworks: Laravel / Tailwind CSS / React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
      <motion.article  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-stone-700 mt-30 mb-30 ">Projets</h2>
      </motion.article>
      <div className="flex flex-col items-center justify-center">
        {projects.map((section) => (
          <article key={section.title} className="mb-10">
            <motion.article  variants={container} initial="hidden" animate={isMobile ? "visible" : undefined} whileInView={!isMobile ? "visible" : undefined} viewport={{ once: true, amount: 0.2 }}>
              <div className= {section.color}>
                <h2 className="text-2xl md:text-4xl font-bold text-center p-4 md:p-10">{section.title}</h2>
                <img src={section.image} className="mx-auto rounded-xl" alt="Capture d'écran "></img>
                <div className="md:flex md:flex-col p-4 md:p-4">
                  <h3 className="font-bold text-xl text-2xl md:text-4xl font-bold mt-4">Description</h3>
                  <p className="space-y-1 text-justify md:text-3xl text-l mt-4">{section.description}</p> 
                  <button aria-label="Voir les projets" className="hover:cursor-pointer p-4 bg-stone-800 md:w-1/2 w-full rounded-xl m-4 hover:bg-stone-900 mx-auto text-l md:text-3xl" onClick={() => navigate("/projects")}>
                    Voir les projets
                  </button>       
                </div>
              </div>
            </motion.article>
          </article>
        ))}
     </div>
    </main>
  )
}