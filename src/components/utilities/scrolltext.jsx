const cards = [
    {
        src: 'images/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        alt: 'Imagen 1',
        contenido: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
        class: 'derecha'
    },
    {
        src: 'images/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        alt: 'Imagen 2',
        contenido: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
        class: 'izquierda'
    },
    {
        src: 'images/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        alt: 'Imagen 3',
        contenido: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
        class: 'derecha'
    }
];

function ScrollText() {
    return (
        <div className="scrollText" id="about">
            {cards.map((card, index) => (
                <div key={index} className='scrollContent'>
                    <p>{card.contenido}</p>
                    <img src={card.src} alt={card.alt} />
                </div>
            ))}
        </div>
    );
}

export default ScrollText;
