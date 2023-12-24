import { useContext } from "react"
import { TextContext } from "../context/TextContext"
import { AboutCard } from "../components/AbouCard"

export function About() {
    const {about} = useContext(TextContext)

    const {title,subtitle,cards}= about
    return (
        <section className="py-8 px-4 flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row">
                <div className=" md:w-[30%] ">
                    <h1 className="text-xl">{title}</h1>
                    <h3 className="mb-4">{subtitle}</h3>
                </div>
                <div className=" mx-4 md:w-[70%] flex flex-col sm:mx-12 gap-4 md:grid md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                    {cards.map(card=>
                        <AboutCard key={card.id} card={card} />    
                    )}
                </div>
            </div>
        </section>
    )
}