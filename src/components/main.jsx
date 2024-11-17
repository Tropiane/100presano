import Recetas from "./utilities/recetas"
import ScrollText from "./utilities/scrolltext"
import Social from "./utilities/social"


function Main() {
    return (
        <section className="main">
            <div className="about">
                <h1>eslogan</h1>
            </div>
                <ScrollText/>
                <Recetas/>
                <Social/>
        </section>
    )
}

export default Main