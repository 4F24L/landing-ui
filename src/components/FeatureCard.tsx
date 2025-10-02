import type { FeatCard } from "../lib/types"


const FeatureCard = (card : FeatCard) => {
  return (
    <div className=" bg-white rounded-2xl space-y-4 py-5 p-3 shadow-md">
        {card.icon && (<div className="mb-2.5">< card.icon size={20}/></div>)}
        <p className=" text-lg">{card.title}</p>
        {card.image && (<img src={card.image} alt={card.title} className="h-52 w-full rounded-3xl" />)}
        <p className=" text-neutral-500 text-wrap">{card.description}</p>
    </div>
  )
}

export default FeatureCard