export default function Skills() {
  const skills = [
    {
      title : "Langages",
      items: ["HTML", "CSS", "JavaScript", "PHP", "SQL / PLSQL", "Java", "JavaFx", "C"],

    },
    {
      title : "Frameworks",
      items : ["Laravel", "Tailwind CSS", "Boostrap", "React (en cours)"],
    },
    {
      title : "Outils",
      items : ["Visual Studio Code", "Eclipse", "SQL Developer", "Proxmox", "VirtualBox", "Apache", "MySQL", "XAMPP", "Git (github, gitLab)"],
    },
    {
      title : "Systèmes et réseaux",
      items : ["Commande Linux et Windows", "Notions de réseaux (configuration de routeurs)", "Déploiement et configuration de serveurs web (Apache)", "Configuration de serveurs FTP (FileZilla)"]
    }

  ]
  return (
    <main className=" min-h-screen h-full flex justify-center bg-blue-950 font-roboto">
      <div className=" h-full w-3/4 bg-blue-900 rounded-xl mt-20 mb-20 ml-8 mr-8">
      <h1 className="text-3xl font-bold text-stone-50 text-center m-8">
        Compétences
      </h1>
      {skills.map((section) => (
          <article key={section.title} className="mb-10">
            <h2 className="text-2xl text-stone-50 mb-4 ml-8">
              {section.title}
            </h2>
            <ul className="list-disc list-inside text-stone-50 space-y-1 ml-8 mr-8">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  )
}