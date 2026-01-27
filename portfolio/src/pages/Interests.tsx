import { motion } from "framer-motion";
export default function Interests() {
  const isMobile = window.innerWidth < 768;
  const interests = [
    {
      title: "Collection de roche, minéraux et fossiles",
      initial:"{{ opacity: 0, y: 30 }}",
      animate:"{{ opacity: 1, y: 0 }}",
      transition: 1,
      color: "bg-stone-400 p-4 rounded-xl shadow-lg shadow-stone-500",
      image1: "src/assets/collection1.jpg",
      image2: "src/assets/collection2.jpg",
      image3: "src/assets/collection3.jpg",
      image4: "src/assets/collection4.jpg",
      alt: "Photographie de ma collection de roches",
      description:"L'un de mes loisirs préférés est de collectionner des roches, des fossiles et des minéraux. J'ai une centaine de spécimen de près de 20 espèces différentes. C'est une passion que j'ai depuis l'âge de 10 ans",
    },
    {
      title: "Photographie",
      initial:"{{ opacity: 0, y: 30 }}",
      animate:"{{ opacity: 1, y: 0 }}",
      transition: 1.1 ,
      color: "bg-stone-500 p-4 rounded-xl shadow-lg shadow-stone-600",
      image1: "src/assets/amethyste1.jpg",
      image2: "src/assets/citrine2.jpg",
      image3: "src/assets/amethyste2.jpg",
      image4: "src/assets/aragonite.jpg",
      alt: "Photographie d'un minéral",
      description: "Je pratique la photographie depuis l'âge de 13 ans",
    },
    {
      title: "dessin",
      initial:"{{ opacity: 0, y: 30 }}",
      animate:"{{ opacity: 1, y: 0 }}",
      transition: 1.2 ,
      color: "bg-stone-600 p-4 rounded-xl shadow-lg shadow-stone-700",
      image : "",
      alt: "Photographie d'un dessin",
      description: "",
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
    <main className=" bg-stone-50 font-roboto">
      
      <motion.article  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-6xl font-bold text-center text-stone-600 mt-30 mb-30">
          Mes centre d'intérêts
        </h1>
        </motion.article>
        <hr className="ml-10 mr-10 mt-30 mb-30 border-stone-500 border-3"></hr>
      <div className="text-stone-50 w-3/4 mx-auto">
      
       {interests.map((section) => (
        <article key={section.title} className="mb-30">
         <motion.article  variants={container} initial="hidden" animate={isMobile ? "visible" : undefined} whileInView={!isMobile ? "visible" : undefined} viewport={{ once: true, amount: 0.2 }}>
          <div className={section.color}>
          <h2 className="text-2xl md:text-4xl font-bold text-center p-4 md:p-10"> {section.title}</h2>
            <table className="m-2">
              <tr className="">
                <th><img src={section.image1} className="p-2 rounded-xl" alt={section.alt}></img></th>
                <th><img src={section.image2} className="p-2 rounded-xl " alt={section.alt}></img></th>
              </tr>
              <tr className="">
                <th><img src={section.image3} className="p-2 rounded-xl" alt={section.alt}></img></th>
                <th><img src={section.image4} className="p-2 rounded-xl" alt={section.alt}></img></th>
              </tr>
            </table>
          
          <p className=" p-4 text-justify md:text-3xl text-l">{section.description}</p>
          </div>
          </motion.article>
           </article>
           
      ))}
      
    </div>
  
    </main>
  )
}