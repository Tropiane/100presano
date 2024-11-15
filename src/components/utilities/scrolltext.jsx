import { useEffect, useState } from 'react';

function ScrollText() {
    const [opacities, setOpacities] = useState([1, 1, 1]);

    const handleScroll = () => {
        const newOpacities = opacities.map((_, index) => {
            const imgElement = document.getElementById(`image-${index}`);
            if (imgElement) {
                const rect = imgElement.getBoundingClientRect();
                const fadePoint = window.innerHeight * 1.7;
                const newOpacity = Math.max((fadePoint - rect.top) / fadePoint, 0);
                return newOpacity;
            }
            return 1;
        });
        setOpacities(newOpacities);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [opacities]);

    return (
        <div className="scrollText">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="scrollContent">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque totam repellat praesentium reiciendis veniam ducimus, ullam obcaecati
                    commodi veritatis ipsa, consequatur quisquam consequuntur et sunt! Dolor commodi eveniet vitae quia fugiat deleniti. Ipsam alias beatae, iure aliquid sit rerum?
                    </p>
                    <img
                        id={`image-${index}`}
                        src="/images/processed_enhanced_image.png"
                        alt=""
                        style={{ opacity: opacities[index] }}
                    />
                </div>
            ))}
        </div>
    );
}

export default ScrollText;
