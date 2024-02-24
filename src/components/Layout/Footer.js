import {  FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaAirbnb } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.instagram.com/recanto.oma/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.airbnb.com.br/users/show/398325930" target="_blank" rel="noopener noreferrer">
                        <FaAirbnb />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/5511979682009?text=Olá, vim do site do Recanto Oma, gostaria de mais informações." target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </li>
            </ul>
            <p className={styles.copyrigh}>
                <span>Recanto Oma</span> &copy; 2024
            </p>
        </footer>
    );
}

export default Footer;