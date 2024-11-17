import { useState } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
                    <h2><span>100</span>Presano</h2>
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
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
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
                <h2><span>100</span>Presano</h2>
            </div>

            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar