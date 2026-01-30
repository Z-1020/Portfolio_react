import { motion } from "framer-motion";
export default function Skills() {
  const isMobile = window.innerWidth < 768;
  const skills = [
    {
      title : "Langages",
      items: ["HTML", "CSS", "JavaScript", "PHP", "SQL / PLSQL", "Java", "JavaFx", "C"],
      color: "bg-stone-500 rounded-xl shadow-lg w-60 md:w-90 md:h-150 mx-auto shadow-stone-600 text-stone-50 ",

    },
    {
      title : "Frameworks",
      items : ["Laravel", "Tailwind CSS", "Boostrap", "React (en cours)"],
      color: "bg-stone-600 rounded-xl w-60 md:w-90 md:h-150 shadow-lg mx-auto  shadow-stone-700 text-stone-50 ",
    },
    {
      title : "Outils",
      items : ["Visual Studio Code", "Eclipse", "SQL Developer", "Proxmox", "VirtualBox", "Apache", "MySQL", "XAMPP", "Git (github, gitLab)"],
      color: "bg-stone-700 rounded-xl w-60 md:w-90 md:h-150 shadow-lg mx-auto shadow-stone-800 text-stone-50 ",
    },
    {
      title : "Systèmes et réseaux",
      items : ["Commande Linux et Windows", "Notions de réseaux (configuration de routeurs)", "Déploiement et configuration de serveurs web (Apache)", "Configuration de serveurs FTP (FileZilla)"],
      color: "bg-stone-800 rounded-xl shadow-lg w-60 md:w-90 md:h-150 mx-auto shadow-stone-900 text-stone-50 ",
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
    <main className="min-h-screen bg-stone-50 font-roboto ">
      
       <motion.article  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <h1 className="text-5xl md:text-6xl font-bold text-center text-stone-600 mt-30 mb-30 ">
        Compétences
      </h1>
         </motion.article>
        <hr className="ml-10 mr-10 mt-30 mb-30 border-stone-500 border-3"></hr>
      <div className="flex flex-col md:flex-row gap-5 md:justify-center items-center m-4 ">
      {skills.map((section) => (
          <article key={section.title} className="mb-10">
            <motion.article  variants={container} initial="hidden" animate={isMobile ? "visible" : undefined} whileInView={!isMobile ? "visible" : undefined} viewport={{ once: true, amount: 0.2 }}>
            <div className={section.color}>
              <div className="">
            <h2 className="font-bold text-xl text-2xl md:text-4xl font-bold p-4 text-center text-stone-50">
              {section.title}
            </h2>
            <ul className="list-disc p-8 md:text-3xl text-l ml-4">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            </div>
            </div>
            </motion.article>
          </article>
          
        ))}
        
      </div>
    </main>
  )
}