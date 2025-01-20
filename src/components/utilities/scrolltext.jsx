import { useEffect, useState } from 'react';

function ScrollText() {
    const [opacities, setOpacities] = useState([1, 1, 1]);

    const handleScroll = () => {
        const newOpacities = [...opacities];
        let isUpdated = false;

        newOpacities.forEach((_, index) => {
            const imgElement = document.getElementById(`image-${index}`);
            if (imgElement) {
                const rect = imgElement.getBoundingClientRect();
                const fadePoint = window.innerHeight * 1.7;
                const newOpacity = Math.max((fadePoint - rect.top) / fadePoint, 0);

                if (newOpacity !== newOpacities[index]) {
                    newOpacities[index] = newOpacity;
                    isUpdated = true;
                }
            }
        });

        if (isUpdated) {
            setOpacities(newOpacities);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [opacities]);

    return (
        <div className="scrollText" id="about">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="scrollContent">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque totam repellat
                        praesentium reiciendis veniam ducimus, ullam obcaecati commodi veritatis ipsa, consequatur
                        quisquam consequuntur et sunt! Dolor commodi eveniet vitae quia fugiat deleniti. Ipsam alias
                        beatae, iure aliquid sit rerum?
                    </p>
                    <img
                        id={`image-${index}`}
                        src="../../../public/images/macaronsBG.webp"
                        alt="Receta Saludable"
                        style={{ opacity: opacities[index] }}
                    />
                </div>
            ))}
        </div>
    );
}

export default ScrollText;
