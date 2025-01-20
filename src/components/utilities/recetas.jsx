const recetas = [
    {
        "id": 0,
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque totam repellat",
        "image": "../../../public/images/macaronsBG.webp"
    },
    {
        "id": 1,
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque totam repellat",
        "image": "../../../public/images/macaronsBG.webp"
    },
    {
        "id": 2,
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque totam repellat",
        "image": "../../../public/images/macaronsBG.webp"
    }
]

function Recetas() {

    return (
    <>
        <div className="recetas">
            <h1>¡Recetas Vegetarianas!</h1>
            <div className="cardContainer">
                    {recetas.map((receta) => (
                        <div className="card" key={receta.id}>
                            <img src={receta.image} alt={receta.title} />
                        </div>
                    ))}
            </div>
        </div>
    </>
    )
}

export default Recetas