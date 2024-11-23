import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer" id='footer'>
            <div className='socialMedia'>
                <h3>Encontranos en instagram</h3>
                <a href='https://www.instagram.com/100.presano/' target='_blank'><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            </div>
        </div>
    )
}

export default Footer