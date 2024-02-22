import { Link } from 'react-router-dom';

import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/recanto_logo.png';

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Recanto" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/Empresa">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/Contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/Fotos">Fotos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/Pets">Pets</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/FAQ">FAQ</Link>
                    </li>
                </ul>
            </Container>
        </nav>      
    )
}
export default Navbar;