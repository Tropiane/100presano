import Recetas from "./utilities/recetas"
import ScrollEffect from "./utilities/scrollEffect"
import ScrollText from "./utilities/scrolltext"
import Social from "./utilities/social"

function Main() {
    return (
        <section className="main">
            <div className="about">
                <h1>eslogan</h1>
            </div>
                <ScrollEffect>
                    <ScrollText/>
                </ScrollEffect>
                <Recetas/>
                <Social/>
        </section>
    )
}

export default Main