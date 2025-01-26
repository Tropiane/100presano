import Form from "./utilities/main/form"
import Recetas from "./utilities/main/recetas"
import ScrollEffect from "./utilities/scrollEffect"
import ScrollText from "./utilities/scrolltext"
import Social from "./utilities/main/social"
import Presentation from "./utilities/main/presentation"

function Main() {
    return (
        <section className="main">
            <div className="about">
                <Presentation/>
            </div>
                <ScrollEffect>
                    <ScrollText/>
                </ScrollEffect>
                <Recetas/>
                <Social/>
                <Form/>

        </section>
    )
}

export default Main