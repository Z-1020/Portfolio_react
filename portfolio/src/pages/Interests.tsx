export default function Interests() {
  const interests = [
    {
      title: "Collection de roche, minéraux et fossiles",
      image: "src/assets/collection_mineraux.svg",
      alt: "Photographie de ma collection de roches",
      description:"",
    },
    {
      title: "Photographie",
      image : "",
      alt: "Photographie d'un minéral",
      description: "",
    },
    {
      title: "dessin",
      image : "",
      alt: "Photographie d'un dessin",
      description: "",
    }
  ]
  return (
    <main className="min-h-screen h-full flex justify-center bg-blue-950 font-roboto">
      <div className="h-full w-3/4 bg-blue-900 rounded-xl mt-20 mb-20 ml-8 mr-8 ">
      <div className="text-stone-50">
      <h1 className="text-5xl font-bold text-center m-8">
       Mes centre d'intérêts
      </h1>
       {interests.map((section) => (
        <article key={section.title} className="mb-10">
          <h2 className="text-3xl md:ml-4 md:mr-4 md:mb-4 font-bold text-center md:text-start"> {section.title}</h2>
          <img src={section.image} className="w-full h-auto p-4" alt={section.alt}></img>
          <p>{section.description}</p>
           </article>
      ))}
    </div>
    </div>
    </main>
  )
}