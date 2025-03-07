import Carrusel from "./carrusel"
import {Apple} from "lucide-react";

const imgs = [
    [{
        src: '/images/hamburger.webp',
        alt: 'Imagen 1'
    },
    {
        src: '/images/macaronsBG.webp',
        alt: 'Imagen 2'
    },
    {
        src: '/images/macaronsBG.webp',
        alt: 'Imagen 3'
    }],
    [
        {
            src: '/images/julian-schultz-yPRJ1YcSXRY-unsplash.jpg',
            alt: 'Imagen 4'
        },
        {
            src: '/images/julian-schultz-yPRJ1YcSXRY-unsplash.jpg',
            alt: 'Imagen 5'
        },
        {
            src: '/images/julian-schultz-yPRJ1YcSXRY-unsplash.jpg',
            alt: 'Imagen 6'
        }
    ]
]

function Presentation() {
    return (
        <div className="presentation" id='presentation'>
            <Carrusel images={imgs}/>
            <h1><span>CP</span> Nutrición <span><Apple/></span></h1>
        </div>
    )
}

export default Presentation