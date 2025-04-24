import { useState } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const links = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#' },
    { name: 'Contact', link: '#footer' },
]

function NavBar() {
    const [open, setOpen] = useState(false)

    
    const handleClick = () => {
        setOpen(!open)
    }

    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
        return (
            <>
            <nav>
                <div className="logo">
                    <h2><span>CP</span> Nutrición</h2>
                </div>

                <div className="menu">
                    <FontAwesomeIcon icon={faBars} onClick={handleClick} />
                    {open && (
                        <motion.ul
                            className="dropdown-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            >
                            <ul>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.ul>
                    )}
                </div>
            </nav>
            </>
        )
    }

    return (
        <>
        <nav>
            <div className="logo">
                <h2><span>CP</span>Nutrición</h2>
            </div>

            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar