import Recetas from "./utilities/recetas"
import ScrollText from "./utilities/scrolltext"


function Main() {
    return (
        <section className="main">
            <div className="about">
                <h1>eslogan</h1>
            </div>
            <div>
                <ScrollText/>
            </div>
            <div>
                <Recetas/>
            </div>
        </section>
    )
}

export default Main