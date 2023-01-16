//import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header () {
    return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="../images/logo.svg" alt="Shoes"/>
        <nav>
          <a className={styles.active}>Homem</a>
          <a>Mulher</a>
          <a>Criança</a>
          <a>Customizar</a>
        </nav>
        <input type="text" placeholder="pesquisar"/>
        <img src="../images/cesta.png" alt="cesta" className={styles.cesta} />
      </div>
    </header>
    )
}