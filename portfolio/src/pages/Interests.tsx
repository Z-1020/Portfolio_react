export default function Interests() {
  const interests = [
    {
      title: "Collection de roche, minéraux et fossiles",
      image1: "src/assets/collection1.jpg",
      image2: "src/assets/collection2.jpg",
      image3: "src/assets/collection3.jpg",
      image4: "src/assets/collection4.jpg",
      alt: "Photographie de ma collection de roches",
      description:"L'un de mes loisirs préférés est de collectionner des roches, des fossiles et des minéraux. J'ai une centaine de spécimen de près de 20 espèces différentes. C'est une passion que j'ai depuis l'âge de 10 ans",
    },
    {
      title: "Photographie",
      image1: "src/assets/amethyste1.jpg",
      image2: "src/assets/citrine2.jpg",
      image3: "src/assets/amethyste2.jpg",
      image4: "src/assets/aragonite.jpg",
      alt: "Photographie d'un minéral",
      description: "Je pratique la photographie depuis l'âge de 13 ans",
    },
    {
      title: "dessin",
      image : "",
      alt: "Photographie d'un dessin",
      description: "",
    }
  ]
  return (
    <main className="min-h-screen bg-stone-50 font-roboto">
      
        <h1 className="text-5xl font-bold text-center text-stone-400 m-8">
          Mes centre d'intérêts
        </h1>
      <div className="text-stone-50 w-3/4 gap-10 flex flex-col items-center">
      
       {interests.map((section) => (
        <article key={section.title} className="mb-10">
          <div className="bg-stone-400  p-4 rounded-xl">
          <h2 className="text-3xl font-bold text-center"> {section.title}</h2>
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
          
          <p className="text-center">{section.description}</p>
          </div>
           </article>
           
      ))}
    </div>
    </main>
  )
}